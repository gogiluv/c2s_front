<template>
  <div :style="style"></div>
</template>

<script>
var debounce = require('lodash.debounce')
var monacoLoader = require('./MonacoLoader')
// var index = function (obj) {
//   var arguments$1 = arguments
//   for (var i = 1; i < arguments.length; i++) {
//     // eslint-disable-next-line guard-for-in, prefer-rest-params
//     for (var p in arguments[i]) { obj[p] = arguments$1[i][p] }
//   }
//   return obj
// }
// var nanoAssignCommon = index

module.exports = {
  props: {
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: '100%' },
    value: { type: String, default: '' }, // code \n
    srcPath: { type: String },
    language: { type: String, default: 'c' },
    theme: { type: String, default: 'vs-dark' }, // vs, hc-black
    options: { type: Object, default: () => {} },
    highlighted: { type: Array,
      default: () => [{
        number: 0,
        class: ''
      }] },
    changeThrottle: { type: Number, default: 0 }
  },
  mounted () {
    this.fetchEditor()
    // var this$1 = this

    // var options = nanoAssignCommon({}, {value: this.value,
    //   theme: this.theme,
    //   language: this.language},
    //   this.options);

    // this$1.editorLoaded = true;
    // this$1.editor = window.monaco.editor.create(this$1.$el, options);
    // this$1.$emit('editorMount', this$1.editor);
    // this$1.editor.onContextMenu(function (event) { return this$1.$emit('contextMenu', event); });
    // this$1.editor.onDidBlurEditor(function () { return this$1.$emit('blur'); });
    // this$1.editor.onDidBlurEditorText(function () { return this$1.$emit('blurText'); });
    // this$1.editor.onDidChangeConfiguration(function (event) { return this$1.$emit('configuration', event); }
    // );
    // this$1.editor.onDidChangeCursorPosition(function (event) { return this$1.$emit('position', event); }
    // );
    // this$1.editor.onDidChangeCursorSelection(function (event) { return this$1.$emit('selection', event); }
    // );
    // this$1.editor.onDidChangeModel(function (event) { return this$1.$emit('model', event); });
    // this$1.editor.onDidChangeModelContent(function (event) {
    //   var value = this$1.editor.getValue();
    //   if (this$1.value !== value) {
    //     this$1.$emit('change', value, event);
    //   }
    // });
    // this$1.editor.onDidChangeModelDecorations(function (event) { return this$1.$emit('modelDecorations', event); }
    // );
    // this$1.editor.onDidChangeModelLanguage(function (event) { return this$1.$emit('modelLanguage', event); }
    // );
    // this$1.editor.onDidChangeModelOptions(function (event) { return this$1.$emit('modelOptions', event); }
    // );
    // this$1.editor.onDidDispose(function (event) { return this$1.$emit('afterDispose', event); });
    // this$1.editor.onDidFocusEditor(function () { return this$1.$emit('focus'); });
    // this$1.editor.onDidFocusEditorText(function () { return this$1.$emit('focusText'); });
    // this$1.editor.onDidLayoutChange(function (event) { return this$1.$emit('layout', event) })
    // this$1.editor.onDidScrollChange(function (event) { return this$1.$emit('scroll', event); });
    // this$1.editor.onKeyDown(function (event) { return this$1.$emit('keydown', event); });
    // this$1.editor.onKeyUp(function (event) { return this$1.$emit('keyup', event); });
    // this$1.editor.onMouseDown(function (event) { return this$1.$emit('mouseDown', event); });
    // this$1.editor.onMouseLeave(function (event) { return this$1.$emit('mouseLeave', event); });
    // this$1.editor.onMouseMove(function (event) { return this$1.$emit('mouseMove', event); });
    // this$1.editor.onMouseUp(function (event) { return this$1.$emit('mouseUp', event); });
  },
  destroyed () {
    // this.destroyMonaco()
  },
  beforeDestroy: function beforeDestroy () {
    // this.$emit('update:code', this.editor.getValue())
    console.log('BeforeDestroy')

    if (typeof this.completionItemProvider !== 'undefined') {
      // console.log(typeof this.completionItemProvider !== 'undefined')
      // console.log(this.completionItemProvider)
      this.completionItemProvider.dispose()
      // console.log(this.completionItemProvider)
    }

    if (typeof this.editor !== 'undefined') {
      this.editor && this.editor.dispose()
      // console.log('1:', this.editor)
      this.editor.dispose()
      // console.log('2:', this.editor)
    }
  },
  computed: {
    style () {
      const { width, height } = this
      const fixedWidth = width.toString().indexOf('%') !== -1 ? width : `${width}px`
      const fixedHeight = height.toString().indexOf('%') !== -1 ? height : `${height}px`
      return {
        width: fixedWidth,
        height: fixedHeight
      }
    },
    editorOptions () {
      return Object.assign({}, this.defaults, this.options, {
        value: this.value,
        language: this.language,
        theme: this.theme
      })
    }
  },
  data () {
    return {
      defaults: {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
        glyphMargin: true
      }
    }
  },
  watch: {
    highlighted: {
      handler (lines) {
        this.highlightLines(lines)
      },
      deep: true
    },
    // 'value': function (newVal, oldVal) {
    //   var editorValue = this.editor.getValue()
    //   if (newVal !== editorValue) {
    //     this.skipNextChangeEvent = true
    //     var scrollInfo = this.editor.getScrollInfo()
    //     this.editor.setValue(newVal)
    //     this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
    //   }
    // },
    options: {
      deep: true,
      handler: function handler (options) {
        if (this.editor) {
          this.editor.updateOptions(options)
        }
      }
    },
    // language () {
    //   window.monaco.editor.setModelLanguage(this.editor.getModel(), this.language)
    // },
    value: function value (newValue) {
      if (this.editor) {
        if (newValue !== this.editor.getValue()) {
          this.editor.setValue(newValue)
        }
      }
    },
    language: function language (newVal) {
      if (this.editor) {
        window.monaco.editor.setModelLanguage(this.editor.getModel(), newVal)
      }
    },
    theme: function theme (newVal) {
      if (this.editor) {
        window.monaco.editor.setTheme(newVal)
      }
    }

  },
  methods: {
    getMonaco: function getMonaco () {
      return this.editor
    },
    focus: function focus () {
      this.editor.focus()
    },
    highlightLines (lines) {
      if (!this.editor) {
        return
      }
      lines.forEach((line) => {
        const className = line.class
        const highlighted = this.$el.querySelector(`.${className}`)

        if (highlighted) {
          highlighted.classList.remove(className)
        }

        const number = parseInt(line.number)
        if ((!this.editor && number < 1) || isNaN(number)) {
          return
        }

        const selectedLine = this.$el.querySelector(`.view-lines [linenumber="${number}"]`)
        if (selectedLine) {
          selectedLine.classList.add(className)
        }
      })
    },
    editorHasLoaded: function (editor, monaco) {
      this.editor = editor
      this.monaco = monaco
      this.editor.onDidChangeModelContent(event =>
        this.codeChangeHandler(editor, event)
      )
      this.autoCompleteMonaco()
      this.$emit('mounted', editor)
    },
    codeChangeHandler: function (editor) {
      if (this.codeChangeEmitter) {
        this.codeChangeEmitter(editor)
      } else {
        this.codeChangeEmitter = debounce(
          function (editor) {
            this.$emit('codeChange', editor)
          },
          this.changeThrottle
        )
        this.codeChangeEmitter(editor)
      }
    },
    autoCompleteMonaco () {
      // Register a new language
      // https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages
      // https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-completion-provider-example

      function createVectorProposals () {
        return [
          {
            label: 'Vector2',
            kind: window.monaco.languages.CompletionItemKind.Class,
            documentation: 'UnityEngine.Vector2',
            insertText: 'Vector2()'
          },
          {
            label: 'Vector3',
            kind: window.monaco.languages.CompletionItemKind.Class,
            documentation: 'UnityEngine.Vector3',
            insertText: 'Vector3()'
          }
        ]
      }
      function createMatrixProposals () {
        return [
          {
            label: 'Matrix3x3',
            kind: window.monaco.languages.CompletionItemKind.Class,
            documentation: 'UnityEngine.Matrix3x3',
            insertText: 'Matrix3x3()'
          },
          {
            label: 'Matrix4x4',
            kind: window.monaco.languages.CompletionItemKind.Class,
            documentation: 'UnityEngine.Matrix4x4',
            insertText: 'Matrix4x4()'
          }
        ]
      }
      function createUnityProposals () {
        return [
          {
            label: 'UnityEngine',
            kind: window.monaco.languages.CompletionItemKind.Text,
            documentation: 'UnityEngine',
            insertText: 'UnityEngine;'
          }
        ]
      }
      this.monaco.languages.register({ id: 'csharp' })
      this.completionItemProvider = this.monaco.languages.registerCompletionItemProvider('csharp', {
        provideCompletionItems: function (model, position) {
          var textUntilPosition = model.getValueInRange({startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column})
          var keywordList = []
          var unityAsm =
            [
              {
                regex: /\s*new\s*Ve(\w+)/,
                proposal: createVectorProposals
              },
              {
                regex: /\s*new\s*Ma(\w+)/,
                proposal: createMatrixProposals
              },
              {
                regex: 'using Un',
                proposal: createUnityProposals
              }
            ]
          for (var i = 0; i < unityAsm.length; ++i) {
            var match = textUntilPosition.match(unityAsm[i]['regex'])
            if (match) {
              keywordList = keywordList.concat(keywordList, unityAsm[i]['proposal']())
              keywordList = Array.from(new Set(keywordList))
              // return unityAsm[i]['proposal']()
            }
          }

          var matchVec2 = textUntilPosition.match('new Vector2')
          var matchVec3 = textUntilPosition.match('new Vector3')
          var matchMatrix3x3 = textUntilPosition.match('new Matrix3x3')
          var matchMatrix4x4 = textUntilPosition.match('new Matrix4x4')
          var staticPropList = []
          var propList = []
          var publicMethodList = []
          var staticMethodList = []
          var idx

          if (matchVec2 || matchVec3) {
            if (matchVec2) {
              staticPropList = staticPropList.concat(staticPropList, ['down', 'left', 'negativeInfinity', 'one', 'right', 'up', 'zero'])
              propList = propList.concat(propList, ['magnitude', 'normalized', 'sqrMagnitude', 'x', 'y'])
              publicMethodList = publicMethodList.concat(publicMethodList, ['Equals', 'Normalize', 'Set', 'ToString'])
              staticMethodList = staticMethodList.concat(staticMethodList, ['Angle', 'ClampMagnitude', 'Distance', 'Dot', 'Lerp', 'LerpUnclamped', 'Max', 'Min', 'MoveTowards', 'Perpendicular', 'Reflect', 'Scale', 'SignedAngle', 'SmoothDamp'])
            }
            if (matchVec3) {
              staticPropList = staticPropList.concat(staticPropList, ['back', 'down', 'forward', 'left', 'negativeInfinity', 'one', 'positiveInfinity', 'right', 'up', 'zero'])
              propList = propList.concat(propList, ['magnitude', 'normalized', 'sqrMagnitude', 'x', 'y', 'z'])
              publicMethodList = publicMethodList.concat(publicMethodList, ['Equals', 'Set', 'ToString'])
              staticMethodList = staticMethodList.concat(staticMethodList, ['Angle', 'ClampMagnitude', 'Cross', 'Distance', 'Dot', 'Lerp', 'LerpUnclamped', 'Max', 'Min', 'MoveTowards', 'Normalize', 'OrthoNormalize', 'Project', 'ProjectOnPlane', 'Reflect', 'RotateTowards', 'Scale', 'SignedAngle', 'Slerp', 'SlerpUnclamped', 'SmoothDamp'])
            }
            if (matchMatrix3x3) {
              staticPropList = staticPropList.concat(staticPropList, ['identity'])
              // propList = propList.concat(propList, [''])
              publicMethodList = publicMethodList.concat(publicMethodList, ['GetDeterminant', 'Invert', 'Transpose'])
              staticMethodList = staticMethodList.concat(staticMethodList, ['MultiplyVector2', 'MultiplyVector3', 'MultiplyMatrix3x3', 'ToString'])
            }
            if (matchMatrix4x4) {
              staticPropList = staticPropList.concat(staticPropList, ['identity', 'zero'])
              propList = propList.concat(propList, ['decomposeProjection', 'determinant', 'inverse', 'isIdentity', 'lossyScale', 'rotation', 'transpose'])
              publicMethodList = publicMethodList.concat(publicMethodList, ['GetColumn', 'GetRow', 'MultiplyPoint', 'MultiplyPoint3x4', 'MultiplyVector', 'SetColumn', 'SetRow', 'SetTRS', 'ToString', 'TransformPlane', 'ValidTRS'])
              staticMethodList = staticMethodList.concat(staticMethodList, ['Frustum', 'LookAt', 'Ortho', 'Perspective', 'Rotate', 'Scale', 'Translate', 'TRS'])
            }

            staticPropList = Array.from(new Set(staticPropList))
            propList = Array.from(new Set(propList))
            publicMethodList = Array.from(new Set(publicMethodList))
            staticMethodList = Array.from(new Set(staticMethodList))

            for (idx in staticPropList) { keywordList.push({label: staticPropList[idx], kind: window.monaco.languages.CompletionItemKind.Text}) }
            for (idx in propList) { keywordList.push({label: propList[idx], kind: window.monaco.languages.CompletionItemKind.Text}) }
            for (idx in publicMethodList) { keywordList.push({label: publicMethodList[idx], kind: window.monaco.languages.CompletionItemKind.Method}) }
            for (idx in staticMethodList) { keywordList.push({label: staticMethodList[idx], kind: window.monaco.languages.CompletionItemKind.Method}) }

            return keywordList
          }
          return keywordList
        }
      })
    },
    fetchEditor () {
      monacoLoader.load(this.srcPath, this.createMonaco)
    },
    createMonaco () {
      this.editor = window.monaco.editor.create(this.$el, this.editorOptions)
      this.editor.setValue(this.value)
      this.editorHasLoaded(this.editor, window.monaco)
      console.log('create Monaco')
      // console.log('typeof this.editor', typeof this.editor)
      // console.log(this.editor)
    },
    destroyMonaco () {
      if (typeof this.editor !== 'undefined') {
        console.log('destroy Monaco')
        // console.log('typeof this.editor', typeof this.editor)
        // console.log(this.editor)
        // if (typeof this.completionItemProvider !== 'undefined') {
        //   this.completionItemProvider.dispose()
        // }
        this.editor.dispose()
        // console.log(this.editor)
      }
    }
  }
}
</script>
