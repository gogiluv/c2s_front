/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as nls from '../../../nls.js';
import { alert } from '../../../base/browser/ui/aria/aria.js';
import { KeyChord } from '../../../base/common/keyCodes.js';
import * as platform from '../../../base/common/platform.js';
import { TPromise } from '../../../base/common/winjs.base.js';
import { IEditorService } from '../../../platform/editor/common/editor.js';
import { Range } from '../../common/core/range.js';
import { registerEditorAction, EditorAction } from '../../browser/editorExtensions.js';
import { getDefinitionsAtPosition, getImplementationsAtPosition, getTypeDefinitionsAtPosition } from './goToDeclaration.js';
import { ReferencesController } from '../referenceSearch/referencesController.js';
import { ReferencesModel } from '../referenceSearch/referencesModel.js';
import { PeekContext } from '../referenceSearch/peekViewWidget.js';
import { ContextKeyExpr } from '../../../platform/contextkey/common/contextkey.js';
import { MessageController } from '../message/messageController.js';
import { EditorContextKeys } from '../../common/editorContextKeys.js';
import { IProgressService } from '../../../platform/progress/common/progress.js';
import { INotificationService } from '../../../platform/notification/common/notification.js';
var DefinitionActionConfig = /** @class */ (function () {
    function DefinitionActionConfig(openToSide, openInPeek, filterCurrent, showMessage) {
        if (openToSide === void 0) { openToSide = false; }
        if (openInPeek === void 0) { openInPeek = false; }
        if (filterCurrent === void 0) { filterCurrent = true; }
        if (showMessage === void 0) { showMessage = true; }
        this.openToSide = openToSide;
        this.openInPeek = openInPeek;
        this.filterCurrent = filterCurrent;
        this.showMessage = showMessage;
        //
    }
    return DefinitionActionConfig;
}());
export { DefinitionActionConfig };
var DefinitionAction = /** @class */ (function (_super) {
    __extends(DefinitionAction, _super);
    function DefinitionAction(configuration, opts) {
        var _this = _super.call(this, opts) || this;
        _this._configuration = configuration;
        return _this;
    }
    DefinitionAction.prototype.run = function (accessor, editor) {
        var _this = this;
        var notificationService = accessor.get(INotificationService);
        var editorService = accessor.get(IEditorService);
        var progressService = accessor.get(IProgressService);
        var model = editor.getModel();
        var pos = editor.getPosition();
        var definitionPromise = this._getDeclarationsAtPosition(model, pos).then(function (references) {
            if (model.isDisposed() || editor.getModel() !== model) {
                // new model, no more model
                return;
            }
            // * remove falsy references
            // * find reference at the current pos
            var idxOfCurrent = -1;
            var result = [];
            for (var i = 0; i < references.length; i++) {
                var reference = references[i];
                if (!reference || !reference.range) {
                    continue;
                }
                var uri = reference.uri, range = reference.range;
                var newLen = result.push({
                    uri: uri,
                    range: range
                });
                if (_this._configuration.filterCurrent
                    && uri.toString() === model.uri.toString()
                    && Range.containsPosition(range, pos)
                    && idxOfCurrent === -1) {
                    idxOfCurrent = newLen - 1;
                }
            }
            if (result.length === 0) {
                // no result -> show message
                if (_this._configuration.showMessage) {
                    var info = model.getWordAtPosition(pos);
                    MessageController.get(editor).showMessage(_this._getNoResultFoundMessage(info), pos);
                }
            }
            else if (result.length === 1 && idxOfCurrent !== -1) {
                // only the position at which we are -> adjust selection
                var current = result[0];
                _this._openReference(editorService, current, false);
            }
            else {
                // handle multile results
                _this._onResult(editorService, editor, new ReferencesModel(result));
            }
        }, function (err) {
            // report an error
            notificationService.error(err);
        });
        progressService.showWhile(definitionPromise, 250);
        return definitionPromise;
    };
    DefinitionAction.prototype._getDeclarationsAtPosition = function (model, position) {
        return getDefinitionsAtPosition(model, position);
    };
    DefinitionAction.prototype._getNoResultFoundMessage = function (info) {
        return info && info.word
            ? nls.localize('noResultWord', "No definition found for '{0}'", info.word)
            : nls.localize('generic.noResults', "No definition found");
    };
    DefinitionAction.prototype._getMetaTitle = function (model) {
        return model.references.length > 1 && nls.localize('meta.title', " – {0} definitions", model.references.length);
    };
    DefinitionAction.prototype._onResult = function (editorService, editor, model) {
        var _this = this;
        var msg = model.getAriaMessage();
        alert(msg);
        if (this._configuration.openInPeek) {
            this._openInPeek(editorService, editor, model);
        }
        else {
            var next = model.nearestReference(editor.getModel().uri, editor.getPosition());
            this._openReference(editorService, next, this._configuration.openToSide).then(function (editor) {
                if (editor && model.references.length > 1) {
                    _this._openInPeek(editorService, editor, model);
                }
                else {
                    model.dispose();
                }
            });
        }
    };
    DefinitionAction.prototype._openReference = function (editorService, reference, sideBySide) {
        var uri = reference.uri, range = reference.range;
        return editorService.openEditor({
            resource: uri,
            options: {
                selection: Range.collapseToStart(range),
                revealIfVisible: true,
                revealInCenterIfOutsideViewport: true
            }
        }, sideBySide).then(function (editor) {
            return editor && editor.getControl();
        });
    };
    DefinitionAction.prototype._openInPeek = function (editorService, target, model) {
        var _this = this;
        var controller = ReferencesController.get(target);
        if (controller) {
            controller.toggleWidget(target.getSelection(), TPromise.as(model), {
                getMetaTitle: function (model) {
                    return _this._getMetaTitle(model);
                },
                onGoto: function (reference) {
                    controller.closeWidget();
                    return _this._openReference(editorService, reference, false);
                }
            });
        }
        else {
            model.dispose();
        }
    };
    return DefinitionAction;
}(EditorAction));
export { DefinitionAction };
var goToDeclarationKb = platform.isWeb
    ? 2048 /* CtrlCmd */ | 70 /* F12 */
    : 70 /* F12 */;
var GoToDefinitionAction = /** @class */ (function (_super) {
    __extends(GoToDefinitionAction, _super);
    function GoToDefinitionAction() {
        return _super.call(this, new DefinitionActionConfig(), {
            id: GoToDefinitionAction.ID,
            label: nls.localize('actions.goToDecl.label', "Go to Definition"),
            alias: 'Go to Definition',
            precondition: ContextKeyExpr.and(EditorContextKeys.hasDefinitionProvider, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            kbOpts: {
                kbExpr: EditorContextKeys.textFocus,
                primary: goToDeclarationKb
            },
            menuOpts: {
                group: 'navigation',
                order: 1.1
            }
        }) || this;
    }
    GoToDefinitionAction.ID = 'editor.action.goToDeclaration';
    return GoToDefinitionAction;
}(DefinitionAction));
export { GoToDefinitionAction };
var OpenDefinitionToSideAction = /** @class */ (function (_super) {
    __extends(OpenDefinitionToSideAction, _super);
    function OpenDefinitionToSideAction() {
        return _super.call(this, new DefinitionActionConfig(true), {
            id: OpenDefinitionToSideAction.ID,
            label: nls.localize('actions.goToDeclToSide.label', "Open Definition to the Side"),
            alias: 'Open Definition to the Side',
            precondition: ContextKeyExpr.and(EditorContextKeys.hasDefinitionProvider, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            kbOpts: {
                kbExpr: EditorContextKeys.textFocus,
                primary: KeyChord(2048 /* CtrlCmd */ | 41 /* KEY_K */, goToDeclarationKb)
            }
        }) || this;
    }
    OpenDefinitionToSideAction.ID = 'editor.action.openDeclarationToTheSide';
    return OpenDefinitionToSideAction;
}(DefinitionAction));
export { OpenDefinitionToSideAction };
var PeekDefinitionAction = /** @class */ (function (_super) {
    __extends(PeekDefinitionAction, _super);
    function PeekDefinitionAction() {
        return _super.call(this, new DefinitionActionConfig(void 0, true, false), {
            id: 'editor.action.previewDeclaration',
            label: nls.localize('actions.previewDecl.label', "Peek Definition"),
            alias: 'Peek Definition',
            precondition: ContextKeyExpr.and(EditorContextKeys.hasDefinitionProvider, PeekContext.notInPeekEditor, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            kbOpts: {
                kbExpr: EditorContextKeys.textFocus,
                primary: 512 /* Alt */ | 70 /* F12 */,
                linux: { primary: 2048 /* CtrlCmd */ | 1024 /* Shift */ | 68 /* F10 */ }
            },
            menuOpts: {
                group: 'navigation',
                order: 1.2
            }
        }) || this;
    }
    return PeekDefinitionAction;
}(DefinitionAction));
export { PeekDefinitionAction };
var ImplementationAction = /** @class */ (function (_super) {
    __extends(ImplementationAction, _super);
    function ImplementationAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImplementationAction.prototype._getDeclarationsAtPosition = function (model, position) {
        return getImplementationsAtPosition(model, position);
    };
    ImplementationAction.prototype._getNoResultFoundMessage = function (info) {
        return info && info.word
            ? nls.localize('goToImplementation.noResultWord', "No implementation found for '{0}'", info.word)
            : nls.localize('goToImplementation.generic.noResults', "No implementation found");
    };
    ImplementationAction.prototype._getMetaTitle = function (model) {
        return model.references.length > 1 && nls.localize('meta.implementations.title', " – {0} implementations", model.references.length);
    };
    return ImplementationAction;
}(DefinitionAction));
export { ImplementationAction };
var GoToImplementationAction = /** @class */ (function (_super) {
    __extends(GoToImplementationAction, _super);
    function GoToImplementationAction() {
        return _super.call(this, new DefinitionActionConfig(), {
            id: GoToImplementationAction.ID,
            label: nls.localize('actions.goToImplementation.label', "Go to Implementation"),
            alias: 'Go to Implementation',
            precondition: ContextKeyExpr.and(EditorContextKeys.hasImplementationProvider, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            kbOpts: {
                kbExpr: EditorContextKeys.textFocus,
                primary: 2048 /* CtrlCmd */ | 70 /* F12 */
            }
        }) || this;
    }
    GoToImplementationAction.ID = 'editor.action.goToImplementation';
    return GoToImplementationAction;
}(ImplementationAction));
export { GoToImplementationAction };
var PeekImplementationAction = /** @class */ (function (_super) {
    __extends(PeekImplementationAction, _super);
    function PeekImplementationAction() {
        return _super.call(this, new DefinitionActionConfig(false, true, false), {
            id: PeekImplementationAction.ID,
            label: nls.localize('actions.peekImplementation.label', "Peek Implementation"),
            alias: 'Peek Implementation',
            precondition: ContextKeyExpr.and(EditorContextKeys.hasImplementationProvider, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            kbOpts: {
                kbExpr: EditorContextKeys.textFocus,
                primary: 2048 /* CtrlCmd */ | 1024 /* Shift */ | 70 /* F12 */
            }
        }) || this;
    }
    PeekImplementationAction.ID = 'editor.action.peekImplementation';
    return PeekImplementationAction;
}(ImplementationAction));
export { PeekImplementationAction };
var TypeDefinitionAction = /** @class */ (function (_super) {
    __extends(TypeDefinitionAction, _super);
    function TypeDefinitionAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeDefinitionAction.prototype._getDeclarationsAtPosition = function (model, position) {
        return getTypeDefinitionsAtPosition(model, position);
    };
    TypeDefinitionAction.prototype._getNoResultFoundMessage = function (info) {
        return info && info.word
            ? nls.localize('goToTypeDefinition.noResultWord', "No type definition found for '{0}'", info.word)
            : nls.localize('goToTypeDefinition.generic.noResults', "No type definition found");
    };
    TypeDefinitionAction.prototype._getMetaTitle = function (model) {
        return model.references.length > 1 && nls.localize('meta.typeDefinitions.title', " – {0} type definitions", model.references.length);
    };
    return TypeDefinitionAction;
}(DefinitionAction));
export { TypeDefinitionAction };
var GoToTypeDefintionAction = /** @class */ (function (_super) {
    __extends(GoToTypeDefintionAction, _super);
    function GoToTypeDefintionAction() {
        return _super.call(this, new DefinitionActionConfig(), {
            id: GoToTypeDefintionAction.ID,
            label: nls.localize('actions.goToTypeDefinition.label', "Go to Type Definition"),
            alias: 'Go to Type Definition',
            precondition: ContextKeyExpr.and(EditorContextKeys.hasTypeDefinitionProvider, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            kbOpts: {
                kbExpr: EditorContextKeys.textFocus,
                primary: 0
            },
            menuOpts: {
                group: 'navigation',
                order: 1.4
            }
        }) || this;
    }
    GoToTypeDefintionAction.ID = 'editor.action.goToTypeDefinition';
    return GoToTypeDefintionAction;
}(TypeDefinitionAction));
export { GoToTypeDefintionAction };
var PeekTypeDefinitionAction = /** @class */ (function (_super) {
    __extends(PeekTypeDefinitionAction, _super);
    function PeekTypeDefinitionAction() {
        return _super.call(this, new DefinitionActionConfig(false, true, false), {
            id: PeekTypeDefinitionAction.ID,
            label: nls.localize('actions.peekTypeDefinition.label', "Peek Type Definition"),
            alias: 'Peek Type Definition',
            precondition: ContextKeyExpr.and(EditorContextKeys.hasTypeDefinitionProvider, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            kbOpts: {
                kbExpr: EditorContextKeys.textFocus,
                primary: 0
            }
        }) || this;
    }
    PeekTypeDefinitionAction.ID = 'editor.action.peekTypeDefinition';
    return PeekTypeDefinitionAction;
}(TypeDefinitionAction));
export { PeekTypeDefinitionAction };
registerEditorAction(GoToDefinitionAction);
registerEditorAction(OpenDefinitionToSideAction);
registerEditorAction(PeekDefinitionAction);
registerEditorAction(GoToImplementationAction);
registerEditorAction(PeekImplementationAction);
registerEditorAction(GoToTypeDefintionAction);
registerEditorAction(PeekTypeDefinitionAction);
