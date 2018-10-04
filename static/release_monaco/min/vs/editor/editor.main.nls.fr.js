/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.11.7(21c85cd77041c5d5179f9db344a29864834bb6f2)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.fr",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (s'est reproduit)"],"vs/base/browser/ui/findinput/findInput":["entrée"],"vs/base/browser/ui/findinput/findInputCheckboxes":["Respecter la casse","Mot entier","Utiliser une expression régulière"],"vs/base/browser/ui/inputbox/inputBox":["Erreur : {0}","Avertissement : {0}","Information : {0}"],"vs/base/browser/ui/selectBox/selectBoxCustom":["{0}"],"vs/base/common/keybindingLabels":["Ctrl","Maj","Alt","Windows","Contrôle","Maj","Alt","Commande","Contrôle","Maj","Alt","Windows"],"vs/base/common/severity":["Erreur","Avertissement","Informations"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, sélecteur","sélecteur"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Sélecteur rapide. Tapez pour réduire les résultats.","Sélecteur rapide"],"vs/base/parts/tree/browser/treeDefaults":["Réduire"],
"vs/editor/browser/services/bulkEdit":["Aucune modification effectuée","{0} modifications de texte effectuées dans {1} fichiers","{0} modifications de texte effectuées dans un fichier","Ces fichiers ont changé pendant ce temps : {0}"],"vs/editor/browser/widget/diffEditorWidget":["Impossible de comparer les fichiers car l'un d'eux est trop volumineux."],"vs/editor/browser/widget/diffReview":["Fermer","Différence {0} sur {1} : {2} d'origine, {3} lignes, {4} modifiées, {5} lignes","vide","{0} d'origine, {1} modifiées : {2}","+ {0} modifiées : {1}","- {0} d'origine : {1}","Accéder à la différence suivante","Accéder la différence précédente"],
"vs/editor/common/config/commonEditorConfig":["Éditeur","Contrôle la famille de polices.","Contrôle l'épaisseur de police.","Contrôle la taille de police en pixels.","Contrôle la hauteur de ligne. Utilisez 0 pour calculer lineHeight à partir de fontSize.","Définit l'espacement des caractères en pixels.","Les numéros de ligne ne sont pas affichés.","Les numéros de ligne sont affichés en nombre absolu.","Les numéros de ligne sont affichés sous la forme de distance en lignes à la position du curseur.","Les numéros de ligne sont affichés toutes les 10 lignes.","Contrôle l’affichage des numéros de ligne. Les valeurs possibles sont 'on', 'off', 'relative' et 'interval'.","Afficher les règles verticales après un certain nombre de caractères à espacement fixe. Utiliser plusieurs valeurs pour plusieurs règles. Aucune règle n'est dessinée si le tableau est vide","Caractères utilisés comme séparateurs de mots durant la navigation ou les opérations basées sur les mots","Le nombre d'espaces correspondant à une tabulation. Ce paramètre est remplacé en fonction du contenu du fichier quand 'editor.detectIndentation' est activé.","'number' attendu. Notez que la valeur \"auto\" a été remplacée par le paramètre 'editor.detectIndentation'.","Espaces insérés quand vous appuyez sur la touche Tab. Ce paramètre est remplacé en fonction du contenu du fichier quand 'editor.detectIndentation' est activé.","'boolean' attendu. Notez que la valeur \"auto\" a été remplacée par le paramètre 'editor.detectIndentation'.","Quand vous ouvrez un fichier, 'editor.tabSize' et 'editor.insertSpaces' sont détectés en fonction du contenu du fichier.","Contrôle si les sélections ont des angles arrondis","Contrôle si l'éditeur défile au-delà de la dernière ligne","Contrôle si l'éditeur défilera en utilisant une animation","Contrôle si la minicarte est affichée","Contrôle le côté où afficher la minicarte. Les valeurs possibles sont 'right' et 'left'","Contrôle si le curseur de la minicarte est automatiquement masqué. Les valeurs possibles sont 'always' et 'mouseover'","Afficher les caractères réels sur une ligne (par opposition aux blocs de couleurs)","Limiter la largeur de la minicarte pour afficher au maximum un certain nombre de colonnes","Contrôle si nous remplissons la chaîne à rechercher dans le Widget Recherche à partir de la sélection de l'éditeur","Contrôle si l'indicateur Rechercher dans la sélection est activé quand plusieurs caractères ou lignes de texte sont sélectionnés dans l'éditeur","Contrôle si le Widget Recherche doit lire ou modifier le presse-papiers partagé sur macOS","Le retour automatique à la ligne n'est jamais effectué.","Le retour automatique à la ligne s'effectue en fonction de la largeur de la fenêtre d'affichage.","Le retour automatique à la ligne s'effectue en fonction de 'editor.wordWrapColumn'.","Retour automatique à la ligne au minimum en fonction de la fenêtre d'affichage et de 'editor.wordWrapColumn'.","Contrôle le retour automatique à la ligne. Valeurs possibles :\n - 'off' (désactive le retour automatique à la ligne) ;\n - 'on' (retour automatique à la ligne dans la fenêtre d'affichage) ;\n - 'wordWrapColumn' (retour automatique à la ligne en fonction de 'editor.wordWrapColumn') ou ;\n - 'bounded' (retour automatique à la ligne au minimum en fonction de la fenêtre d'affichage et de 'editor.wordWrapColumn').","Contrôle la colonne de retour automatique à la ligne de l'éditeur quand 'editor.wordWrap' a la valeur 'wordWrapColumn' ou 'bounded'.","Contrôle le retrait des lignes renvoyées. La valeur peut être 'none', 'same' ou 'indent'.","Multiplicateur à utiliser pour le 'deltaX' et le 'deltaY' des événements de défilement de la roulette de la souris","Mappe vers 'Contrôle' dans Windows et Linux, et vers 'Commande' dans macOS.","Mappe vers 'Alt' dans Windows et Linux, et vers 'Option' dans macOS.","Le modificateur à utiliser pour ajouter plusieurs curseurs avec la souris. 'ctrlCmd' mappe vers 'Contrôle' dans Windows et Linux, et vers 'Commande' dans macOS. Les mouvements de souris Accéder à la définition et Ouvrir le lien s'adaptent pour ne pas entrer en conflit avec le modificateur multicurseur.","Activez les suggestions rapides dans les chaînes.","Activez les suggestions rapides dans les commentaires.","Activez les suggestions rapides en dehors des chaînes et des commentaires.","Contrôle si les suggestions doivent s'afficher automatiquement en cours de frappe","Contrôle le délai en ms au bout duquel les suggestions rapides s'affichent","Active la pop up qui affiche la documentation des paramètres et écrit de l'information pendant que vous écrivez","Contrôle si l'éditeur doit automatiquement fermer les crochets après les avoir ouverts","Contrôle si l'éditeur doit automatiquement mettre en forme la ligne après la saisie","Contrôle si l'éditeur doit automatiquement mettre en forme le contenu collé. Un formateur doit être disponible et doit pouvoir mettre en forme une plage dans un document.","Contrôle si l’éditeur doit ajuster automatiquement la mise en retrait lorsque les utilisateurs tapent, collent ou déplacent des lignes. Les règles de mise en retrait du language doivent être disponibles.","Contrôle si les suggestions doivent s'afficher automatiquement durant la saisie de caractères de déclenchement","Contrôle si les suggestions doivent être acceptées avec 'Entrée', en plus de 'Tab'. Cela permet d'éviter toute ambiguïté entre l'insertion de nouvelles lignes et l'acceptation de suggestions. La valeur 'smart' signifie que vous acceptez uniquement une suggestion avec Entrée quand elle applique une modification de texte","Contrôle si les suggestions doivent être acceptées avec des caractères de validation. Par exemple, en JavaScript, le point-virgule (';') peut être un caractère de validation qui permet d'accepter une suggestion et de taper ce caractère.","Afficher des suggestions d’extraits au-dessus d’autres suggestions.","Afficher des suggestions d’extraits en-dessous d’autres suggestions.","Afficher des suggestions d’extraits avec d’autres suggestions.","Ne pas afficher de suggestions d’extrait de code.","Contrôle si les extraits de code s'affichent en même temps que d'autres suggestions, ainsi que leur mode de tri.","Contrôle si la copie sans sélection permet de copier la ligne actuelle.","Contrôle si la saisie semi-automatique doit être calculée en fonction des mots présents dans le document.","Sélectionnez toujours la première suggestion.","Sélectionnez les suggestions récentes à moins qu'une saisie ultérieure en sélectionne un, par exemple 'console.| -> console.log' parce que `log` a été complété récemment.","Sélectionnez des suggestions basées sur des préfixes précédents qui ont complété ces suggestions, par exemple `co -> console` et `con -> const`.","Contrôle comment les suggestions sont pré-sélectionnés lors de l’affichage de la liste de suggestion.","Taille de police du widget de suggestion","Hauteur de ligne du widget de suggestion","Détermine si l'éditeur doit surligner les correspondances similaires à la sélection","Contrôle si l'éditeur doit mettre en surbrillance les occurrences de symboles sémantiques","Contrôle le nombre d'ornements pouvant s'afficher à la même position dans la règle d'aperçu","Contrôle si une bordure doit être dessinée autour de la règle d'aperçu.","Contrôle le style d'animation du curseur. Valeurs possibles : 'blink', 'smooth', 'phase', 'expand' et 'solid'","Agrandir ou réduire la police de l'éditeur quand l'utilisateur fait tourner la roulette de la souris tout en maintenant la touche Ctrl enfoncée","Contrôle le style du curseur. Les valeurs acceptées sont 'block', 'block-outline', 'line', 'line-thin', 'underline' et 'underline-thin'","Contrôle la largeur du curseur quand editor.cursorStyle est à 'line'","Active les ligatures de police","Contrôle si le curseur doit être masqué dans la règle d'aperçu.","Contrôle la façon dont l'éditeur affiche les espaces blancs. Il existe trois options possibles : 'none', 'boundary' et 'all'. L'option 'boundary' n'affiche pas les espaces uniques qui séparent les mots.","Contrôle si l'éditeur doit afficher les caractères de contrôle","Contrôle si l'éditeur doit afficher les repères de mise en retrait","Contrôle la façon dont l'éditeur doit afficher la surbrillance de la ligne active. Les différentes possibilités sont 'none', 'gutter', 'line' et 'all'.","Contrôle si l'éditeur affiche les indicateurs CodeLens","Contrôle si le pliage de code est activé dans l'éditeur","Définit si les contrôles de réduction sur la bordure sont cachés automatiquement","Met en surbrillance les crochets correspondants quand l'un d'eux est sélectionné.","Contrôle si l'éditeur doit afficher la marge de glyphes verticale. La marge de glyphes sert principalement au débogage.","L'insertion et la suppression d'un espace blanc suit les taquets de tabulation","Supprimer l'espace blanc de fin inséré automatiquement","Garder les éditeurs d'aperçu ouverts même si l'utilisateur double-clique sur son contenu ou appuie sur la touche Échap.","Contrôle si l'éditeur autorise le déplacement des sélections par glisser-déplacer.","L'éditeur utilise les API de la plateforme pour détecter si un lecteur d'écran est attaché.","L'éditeur est optimisé en permanence pour une utilisation avec un lecteur d'écran.","L'éditeur n'est jamais optimisé pour une utilisation avec un lecteur d'écran.","Contrôle si l'éditeur doit s'exécuter dans un mode optimisé pour les lecteurs d'écran.","Contrôle si l'éditeur doit détecter les liens et les rendre cliquables","Contrôle si l'éditeur doit afficher les éléments décoratifs de couleurs inline et le sélecteur de couleurs.","Active l'ampoule d'action de code","Contrôle si le presse-papiers primaire Linux doit être pris en charge.","Contrôle si l'éditeur de différences affiche les différences en mode côte à côte ou inline","Contrôle si l'éditeur de différences affiche les changements liés aux espaces blancs de début ou de fin comme des différences","Contrôle si l'éditeur de différences affiche les indicateurs +/- pour les modifications ajoutées/supprimées"],
"vs/editor/common/config/editorOptions":["L'éditeur n'est pas accessible pour le moment. Appuyez sur Alt+F1 pour connaître les options.","Contenu d'éditeur"],"vs/editor/common/controller/cursor":["Exception inattendue pendant l'exécution de la commande."],"vs/editor/common/modes/modesRegistry":["Texte brut"],"vs/editor/common/services/modelServiceImpl":["[{0}]\n{1}","[{0}] {1}"],
"vs/editor/common/view/editorColorRegistry":["Couleur d'arrière-plan de la mise en surbrillance de la ligne à la position du curseur.","Couleur d'arrière-plan de la bordure autour de la ligne à la position du curseur.","Couleur d'arrière-plan des plages mises en surbrillance, par exemple par les fonctionnalités d'ouverture rapide et de recherche. La couleur ne doit pas être opaque pour ne pas masquer les décorations sous-jacentes.","Couleur d'arrière-plan de la bordure autour des plages mises en surbrillance.","Couleur du curseur de l'éditeur.","La couleur de fond du curseur de l'éditeur. Permet de personnaliser la couleur d'un caractère survolé par un curseur de bloc.","Couleur des espaces blancs dans l'éditeur.","Couleur des repères de retrait de l'éditeur.","Couleur des numéros de ligne de l'éditeur.","Couleur des numéros de lignes actives de l'éditeur","Couleur des règles de l'éditeur","Couleur pour les indicateurs CodeLens","Couleur d'arrière-plan pour les accolades associées","Couleur pour le contour des accolades associées","Couleur de la bordure de la règle d'apperçu.","Couleur de fond pour la bordure de l'éditeur. La bordure contient les marges pour les symboles et les numéros de ligne.","Couleur de premier plan de la ligne ondulée marquant les erreurs dans l'éditeur.","Couleur de bordure de la ligne ondulée marquant les erreurs dans l'éditeur.","Couleur de premier plan de la ligne ondulée marquant les avertissements dans l'éditeur.","Couleur de bordure de la ligne ondulée marquant les avertissements dans l'éditeur.","Couleur de premier plan de la ligne ondulée marquant les informations dans l'éditeur.","Couleur de bordure de la ligne ondulée marquant les informations dans l'éditeur.","Couleur du marqueur de la règle d'aperçu pour la mise en évidence de plage.","Couleur du marqueur de la règle d'aperçu pour les erreurs.","Couleur du marqueur de la règle d'aperçu pour les avertissements.","Couleur du marqueur de la règle d'aperçu pour les informations."],
"vs/editor/contrib/bracketMatching/bracketMatching":["Couleur du marqueur de la règle d'aperçu pour rechercher des parenthèses.","Atteindre le crochet","Select to Bracket"],"vs/editor/contrib/caretOperations/caretOperations":["Déplacer le point d'insertion vers la gauche","Déplacer le point d'insertion vers la droite"],"vs/editor/contrib/caretOperations/transpose":["Transposer les lettres"],"vs/editor/contrib/clipboard/clipboard":["Couper","Copier","Coller","Copier avec la coloration syntaxique"],"vs/editor/contrib/comment/comment":["Activer/désactiver le commentaire de ligne","Ajouter le commentaire de ligne","Supprimer le commentaire de ligne","Activer/désactiver le commentaire de bloc"],"vs/editor/contrib/contextmenu/contextmenu":["Afficher le menu contextuel de l'éditeur"],
"vs/editor/contrib/find/findController":["Rechercher","Rechercher","Rechercher suivant","Rechercher précédent","Sélection suivante","Sélection précédente","Remplacer","Afficher le terme de recherche suivant","Afficher le terme de recherche précédent"],"vs/editor/contrib/find/findWidget":["Rechercher","Rechercher","Correspondance précédente","Correspondance suivante","Rechercher dans la sélection","Fermer","Remplacer","Remplacer","Remplacer","Tout remplacer","Changer le mode de remplacement","Seuls les {0} premiers résultats sont mis en évidence, mais toutes les opérations de recherche fonctionnent sur l’ensemble du texte.","{0} sur {1}","Aucun résultat"],"vs/editor/contrib/folding/folding":["Déplier","Déplier de manière récursive","Plier","Plier de manière récursive","Replier tous les commentaires de bloc","Replier toutes les régions","Déplier toutes les régions","Plier tout","Déplier tout","Niveau de pliage {0}"],
"vs/editor/contrib/format/formatActions":["1 modification de format effectuée à la ligne {0}","{0} modifications de format effectuées à la ligne {1}","1 modification de format effectuée entre les lignes {0} et {1}","{0} modifications de format effectuées entre les lignes {1} et {2}","Il n’y a aucun formateur installé pour les fichiers '{0}'.","Mettre en forme le document","Mettre en forme la sélection"],"vs/editor/contrib/goToDeclaration/goToDeclarationCommands":["Définition introuvable pour '{0}'","Définition introuvable"," – {0} définitions","Atteindre la définition","Ouvrir la définition sur le côté","Aperçu de définition","Implémentation introuvable pour '{0}'","Implémentation introuvable","– Implémentations {0}","Accéder à l'implémentation","Aperçu de l'implémentation","Définition de type introuvable pour '{0}'","Définition de type introuvable"," – Définitions de type {0}","Atteindre la définition de type","Aperçu de la définition du type"],
"vs/editor/contrib/goToDeclaration/goToDeclarationMouse":["Cliquez pour afficher {0} définitions."],"vs/editor/contrib/gotoError/gotoError":["({0}/{1})","Aller au problème suivant (Erreur, Avertissement, Info)","Aller au problème précédent (Erreur, Avertissement, Info)","Couleur d'erreur du widget de navigation dans les marqueurs de l'éditeur.","Couleur d'avertissement du widget de navigation dans les marqueurs de l'éditeur.","Couleur d’information du widget de navigation du marqueur de l'éditeur.","Arrière-plan du widget de navigation dans les marqueurs de l'éditeur."],"vs/editor/contrib/hover/hover":["Afficher par pointage"],"vs/editor/contrib/hover/modesContentHover":["Chargement..."],"vs/editor/contrib/inPlaceReplace/inPlaceReplace":["Remplacer par la valeur précédente","Remplacer par la valeur suivante"],
"vs/editor/contrib/linesOperations/linesOperations":["Copier la ligne en haut","Copier la ligne en bas","Déplacer la ligne vers le haut","Déplacer la ligne vers le bas","Trier les lignes dans l'ordre croissant","Trier les lignes dans l'ordre décroissant","Découper l'espace blanc de fin","Supprimer la ligne","Mettre en retrait la ligne","Ajouter un retrait négatif à la ligne","Insérer une ligne au-dessus","Insérer une ligne sous","Supprimer tout ce qui est à gauche","Supprimer tout ce qui est à droite","Joindre les lignes","Transposer les caractères autour du curseur","Transformer en majuscule","Transformer en minuscule"],
"vs/editor/contrib/links/links":["Commande + clic pour suivre le lien","Ctrl + clic pour suivre le lien","Cmd + clic pour exécuter la commande","Ctrl + clic pour exécuter la commande","Alt + clic pour suivre le lien","Alt + clic pour exécuter la commande","Échec de l'ouverture de ce lien, car il n'est pas bien formé : {0}","Échec de l'ouverture de ce lien, car sa cible est manquante.","Ouvrir le lien"],"vs/editor/contrib/multicursor/multicursor":["Ajouter un curseur au-dessus","Ajouter un curseur en dessous","Ajouter des curseurs à la fin des lignes","Ajouter la sélection à la correspondance de recherche suivante","Ajouter la sélection à la correspondance de recherche précédente","Déplacer la dernière sélection vers la correspondance de recherche suivante","Déplacer la dernière sélection à la correspondance de recherche précédente","Sélectionner toutes les occurrences des correspondances de la recherche","Modifier toutes les occurrences"],
"vs/editor/contrib/parameterHints/parameterHints":["Indicateurs des paramètres Trigger"],"vs/editor/contrib/parameterHints/parameterHintsWidget":["{0}, conseil"],"vs/editor/contrib/quickFix/quickFixCommands":["Afficher les correctifs ({0})","Afficher les correctifs","Correctif rapide","Refactoriser"],"vs/editor/contrib/referenceSearch/peekViewWidget":["Fermer"],"vs/editor/contrib/referenceSearch/referenceSearch":[" – {0} références","Rechercher toutes les références"],"vs/editor/contrib/referenceSearch/referencesController":["Chargement..."],"vs/editor/contrib/referenceSearch/referencesModel":["symbole dans {0} sur la ligne {1}, colonne {2}","1 symbole dans {0}, chemin complet {1}","{0} symboles dans {1}, chemin complet {2}","Résultats introuvables","1 symbole dans {0}","{0} symboles dans {1}","{0} symboles dans {1} fichiers"],
"vs/editor/contrib/referenceSearch/referencesWidget":["Échec de la résolution du fichier.","{0} références","{0} référence","aperçu non disponible","Références","Aucun résultat","Références","Couleur d'arrière-plan de la zone de titre de l'affichage d'aperçu.","Couleur du titre de l'affichage d'aperçu.","Couleur des informations sur le titre de l'affichage d'aperçu.","Couleur des bordures et de la flèche de l'affichage d'aperçu.","Couleur d'arrière-plan de la liste des résultats de l'affichage d'aperçu.","Couleur de premier plan des noeuds de lignes dans la liste des résultats de l'affichage d'aperçu.","Couleur de premier plan des noeuds de fichiers dans la liste des résultats de l'affichage d'aperçu.","Couleur d'arrière-plan de l'entrée sélectionnée dans la liste des résultats de l'affichage d'aperçu.","Couleur de premier plan de l'entrée sélectionnée dans la liste des résultats de l'affichage d'aperçu.","Couleur d'arrière-plan de l'éditeur d'affichage d'aperçu.","Couleur d'arrière-plan de la bordure de l'éditeur d'affichage d'aperçu.","Couleur de mise en surbrillance d'une correspondance dans la liste des résultats de l'affichage d'aperçu.","Couleur de mise en surbrillance d'une correspondance dans l'éditeur de l'affichage d'aperçu."],
"vs/editor/contrib/rename/rename":["Aucun résultat.","'{0}' renommé en '{1}'. Récapitulatif : {2}","Échec de l'exécution du renommage.","Renommer le symbole"],"vs/editor/contrib/rename/renameInputField":["Renommez l'entrée. Tapez le nouveau nom et appuyez sur Entrée pour valider."],"vs/editor/contrib/smartSelect/smartSelect":["Développer la sélection","Réduire la sélection"],"vs/editor/contrib/suggest/suggestController":["L'acceptation de '{0}' a inséré le texte suivant : {1}","Suggestions pour Trigger"],
"vs/editor/contrib/suggest/suggestWidget":["Couleur d'arrière-plan du widget de suggestion.","Couleur de bordure du widget de suggestion.","Couleur de premier plan du widget de suggestion.","Couleur d'arrière-plan de l'entrée sélectionnée dans le widget de suggestion.","Couleur de la surbrillance des correspondances dans le widget de suggestion.","En savoir plus...{0}","{0}, suggestion, avec détails","{0}, suggestion","En savoir moins...{0}","Chargement...","Pas de suggestions.","{0}, accepté","{0}, suggestion, avec détails","{0}, suggestion"],"vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode":["Activer/désactiver l'utilisation de la touche Tab pour déplacer le focus"],
"vs/editor/contrib/wordHighlighter/wordHighlighter":["Couleur d'arrière-plan d'un symbole durant l'accès en lecture, par exemple la lecture d'une variable. La couleur ne doit pas être opaque pour ne pas masquer les décorations sous-jacentes.","Couleur d'arrière-plan d'un symbole durant l'accès en écriture, par exemple l'écriture dans une variable. La couleur ne doit pas être opaque pour ne pas masquer les décorations sous-jacentes.","Couleur de bordure d'un symbole durant l'accès en lecture, par exemple la lecture d'une variable.","Couleur de bordure d'un symbole durant l'accès en écriture, par exemple l'écriture dans une variable.","Couleur du marqueur de la règle d'aperçu pour la mise en évidence de symbole.","Couleur du marqueur de la règle d'aperçu la mise en évidence de symbole d’accès en écriture.","Aller à la prochaine mise en évidence de symbole","Aller à la mise en évidence de symbole précédente"],
"vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp":["No selection","Line {0}, Column {1} ({2} selected)","Line {0}, Column {1}","{0} selections ({1} characters selected)","{0} selections","Now changing the setting `accessibilitySupport` to 'on'.","Now opening the Editor Accessibility documentation page."," in a read-only pane of a diff editor."," in a pane of a diff editor."," in a read-only code editor"," in a code editor","To configure the editor to be optimized for usage with a Screen Reader press Command+E now.","To configure the editor to be optimized for usage with a Screen Reader press Control+E now.","The editor is configured to be optimized for usage with a Screen Reader.","The editor is configured to never be optimized for usage with a Screen Reader, which is not the case at this time.","Pressing Tab in the current editor will move focus to the next focusable element. Toggle this behavior by pressing {0}.","Pressing Tab in the current editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.","Pressing Tab in the current editor will insert the tab character. Toggle this behavior by pressing {0}.","Pressing Tab in the current editor will insert the tab character. The command {0} is currently not triggerable by a keybinding.","Press Command+H now to open a browser window with more information related to editor accessibility.","Press Control+H now to open a browser window with more information related to editor accessibility.","You can dismiss this tooltip and return to the editor by pressing Escape or Shift+Escape.","Show Accessibility Help"],
"vs/editor/standalone/browser/inspectTokens/inspectTokens":["Developer: Inspect Tokens"],"vs/editor/standalone/browser/quickOpen/gotoLine":["Go to line {0} and character {1}","Go to line {0}","Type a line number between 1 and {0} to navigate to","Type a character between 1 and {0} to navigate to","Go to line {0}","Type a line number, followed by an optional colon and a character number to navigate to","Go to Line..."],"vs/editor/standalone/browser/quickOpen/quickCommand":["{0}, commands","Type the name of an action you want to execute","Command Palette"],"vs/editor/standalone/browser/quickOpen/quickOutline":["{0}, symbols","Type the name of an identifier you wish to navigate to","Go to Symbol...","symbols ({0})","modules ({0})","classes ({0})","interfaces ({0})","methods ({0})","functions ({0})","properties ({0})","variables ({0})","variables ({0})","constructors ({0})","calls ({0})"],
"vs/editor/standalone/browser/standaloneCodeEditor":["Editor content","Press Ctrl+F1 for Accessibility Options.","Press Alt+F1 for Accessibility Options."],"vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast":["Toggle High Contrast Theme"],"vs/platform/configuration/common/configurationRegistry":["Substitutions de configuration par défaut","Configurez les paramètres d'éditeur à remplacer pour le langage {0}.","Configurez les paramètres d'éditeur à remplacer pour un langage.","Impossible d'inscrire '{0}'. Ceci correspond au modèle de propriété '\\\\[.*\\\\]$' permettant de décrire les paramètres d'éditeur spécifiques à un langage. Utilisez la contribution 'configurationDefaults'.","Impossible d'inscrire '{0}'. Cette propriété est déjà inscrite."],"vs/platform/keybinding/common/abstractKeybindingService":["Touche ({0}) utilisée. En attente de la seconde touche pour la pression simultanée...","La combinaison de touches ({0}, {1}) n'est pas une commande."],
"vs/platform/list/browser/listService":["Banc d'essai","Mappe vers 'Contrôle' dans Windows et Linux, et vers 'Commande' dans macOS.","Mappe vers 'Alt' dans Windows et Linux, et vers 'Option' dans macOS.","Le modificateur à utiliser pour ajouter un élément à une multi-sélection avec la souris (par exemple dans l’Explorateur, des éditeurs ouverts et scm view). 'ctrlCmd' mappe vers 'Contrôle' dans Windows et Linux, et vers 'Commande' dans macOS. Les mouvements de souris 'Ouvrir sur le côté', si supportés, s'adaptent pour ne pas entrer en conflit avec le modificateur multiselect.","Ouvre les éléments sur un simple clic de souris.","Ouvre les éléments sur un double clic de souris.","Contrôle l’ouverture des éléments dans les arbres et listes à l’aide de la souris (si pris en charge). Mettre la valeur `singleClick` pour ouvrir des éléments avec un simple clic de souris et `doubleClick` pour ouvrir uniquement via un double-clic de souris. Pour les parents ayant des enfants dans les arbres, ce paramètre contrôle si un simple clic développe le parent ou un double-clic. Notez que certains arbres et listes peuvent choisir d’ignorer ce paramètre, si ce n’est pas applicable. "],
"vs/platform/theme/common/colorRegistry":["Couleurs utilisées dans le banc d'essai.","Couleur de premier plan globale. Cette couleur est utilisée si elle n'est pas remplacée par un composant.","Couleur principale de premier plan pour les messages d'erreur. Cette couleur est utilisée uniquement si elle n'est pas redéfinie par un composant.","Couleur de premier plan du texte descriptif fournissant des informations supplémentaires, par exemple pour un label.","Couleur de bordure globale des éléments ayant le focus. Cette couleur est utilisée si elle n'est pas remplacée par un composant.","Bordure supplémentaire autour des éléments pour les séparer des autres et obtenir un meilleur contraste.","Bordure supplémentaire autour des éléments actifs pour les séparer des autres et obtenir un meilleur contraste.","La couleur d'arrière-plan des sélections de texte dans le banc d'essai (par ex., pour les champs d'entrée ou les zones de texte). Notez que cette couleur ne s'applique pas aux sélections dans l'éditeur et le terminal.","Couleur pour les séparateurs de texte.","Couleur des liens dans le texte.","Couleur des liens actifs dans le texte.","Couleur des segments de texte préformatés.","Couleur d'arrière-plan des citations dans le texte.","Couleur de bordure des citations dans le texte.","Couleur d'arrière-plan des blocs de code dans le texte.","Couleur de l'ombre des widgets, comme rechercher/remplacer, au sein de l'éditeur.","Arrière-plan de la zone d'entrée.","Premier plan de la zone d'entrée.","Bordure de la zone d'entrée.","Couleur de la bordure des options activées dans les champs d'entrée.","Couleur de premier plan de la zone d'entrée pour le texte d'espace réservé.","Couleur d'arrière-plan de la validation d'entrée pour la gravité des informations.","Couleur de bordure de la validation d'entrée pour la gravité des informations.","Couleur d'arrière-plan de la validation d'entrée pour l'avertissement sur les informations.","Couleur de bordure de la validation d'entrée pour la gravité de l'avertissement.","Couleur d'arrière-plan de la validation d'entrée pour la gravité de l'erreur.","Couleur de bordure de la validation d'entrée pour la gravité de l'erreur. ","Arrière-plan de la liste déroulante.","Arrière-plan de la liste déroulante.","Premier plan de la liste déroulante.","Bordure de la liste déroulante.","Couleur d'arrière-plan de la liste/l'arborescence pour l'élément ayant le focus quand la liste/l'arborescence est active. Une liste/aborescence active peut être sélectionnée au clavier, elle ne l'est pas quand elle est inactive.","Couleur de premier plan de la liste/l'arborescence pour l'élément ayant le focus quand la liste/l'arborescence est active. Une liste/aborescence active peut être sélectionnée au clavier, elle ne l'est pas quand elle est inactive.","Couleur d'arrière-plan de la liste/l'arborescence de l'élément sélectionné quand la liste/l'arborescence est active. Une liste/arborescence active peut être sélectionnée au clavier, elle ne l'est pas quand elle est inactive.","Couleur de premier plan de la liste/l'arborescence pour l'élément sélectionné quand la liste/l'arborescence est active. Une liste/aborescence active peut être sélectionnée au clavier, elle ne l'est pas quand elle est inactive.","Couleur d'arrière-plan de la liste/l'arborescence pour l'élément sélectionné quand la liste/l'arborescence est inactive. Une liste/aborescence active peut être sélectionnée au clavier, elle ne l'est pas quand elle est inactive.","Couleur de premier plan de la liste/l'arborescence pour l'élément sélectionné quand la liste/l'arborescence est active. Une liste/aborescence active peut être sélectionnée au clavier, elle ne l'est pas quand elle est inactive.","Couleur d'arrière-plan de la liste/l'arborescence pour l'élément sélectionné quand la liste/l'arborescence est inactive. Une liste/aborescence active peut être sélectionnée au clavier, elle ne l'est pas quand elle est inactive.","Couleur de premier plan de la liste/l'arborescence pour l'élément sélectionné quand la liste/l'arborescence est active. Une liste/aborescence active peut être sélectionnée au clavier, elle ne l'est pas quand elle est inactive.","Arrière-plan de la liste/l'arborescence pendant le pointage sur des éléments avec la souris.","Premier plan de la liste/l'arborescence pendant le pointage sur des éléments avec la souris.","Arrière-plan de l'opération de glisser-déplacer dans une liste/arborescence pendant le déplacement d'éléments avec la souris.","Couleur de premier plan dans la liste/l'arborescence pour la surbrillance des correspondances pendant la recherche dans une liste/arborescence.","Couleur de premier plan de liste/arbre pour les éléments non valides, par exemple une racine non résolue dans l’Explorateur.","Couleur du sélecteur rapide pour les étiquettes de regroupement.","Couleur du sélecteur rapide pour les bordures de regroupement.","Couleur de premier plan du bouton.","Couleur d'arrière-plan du bouton.","Couleur d'arrière-plan du bouton pendant le pointage.","Couleur de fond des badges. Les badges sont de courts libelés d'information, ex. le nombre de résultats de recherche.","Couleur des badges. Les badges sont de courts libelés d'information, ex. le nombre de résultats de recherche.","Ombre de la barre de défilement pour indiquer que la vue défile.","Couleur de fond du curseur de la barre de défilement.","Couleur de fond du curseur de la barre de défilement lors du survol.","Couleur de fond du curseur de la barre de défilement en utilisation.","Couleur de fond pour la barre de progression qui peut s'afficher lors d'opérations longues.","Couleur d'arrière-plan de l'éditeur.","Couleur de premier plan par défaut de l'éditeur.","Couleur d'arrière-plan des gadgets de l'éditeur tels que rechercher/remplacer.","Couleur de bordure des widgets de l'éditeur. La couleur est utilisée uniquement si le widget choisit d'avoir une bordure et si la couleur n'est pas remplacée par un widget.","Couleur de la sélection de l'éditeur.","Couleur du texte sélectionné pour le contraste élevé.","Couleur de sélection dans un éditeur inactif. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Couleur des régions avec le même contenu que la sélection. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Couleur de bordure des régions dont le contenu est identique à la sélection.","Couleur du résultat de recherche actif.","Couleur des autres résultats de recherche correspondants. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Couleur de la plage limitant la recherche. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Couleur de bordure du résultat de recherche actif.","Couleur de bordure des autres résultats de recherche.","La couleur de bordure définit l'étendue de la recherche. La couleur doit ne pas être opaque pour ne pas masquer les décorations du dessous. ","Mettre en surbrillance ci-dessous le mot pour lequel un survol est affiché. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Couleur d'arrière-plan du pointage de l'éditeur.","Couleur de bordure du pointage de l'éditeur.","Couleur des liens actifs.","Couleur de fond pour le texte qui est inséré. La couleur ne doit pas être opaque pour ne pas masquer les décorations du dessous.","Couleur de fond pour le texte qui est retiré. La couleur doit ne pas être opaque pour ne pas masquer les décorations du dessous. ","Couleur de contour du texte inséré.","Couleur de contour du texte supprimé.","Arrière-plan de l'en-tête en cours dans les conflits de fusion inline. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Arrière-plan du contenu en cours dans les conflits de fusion inline. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Arrière-plan de l'en-tête qui arrive dans les conflits de fusion inline. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Arrière-plan du contenu qui arrive dans les conflits de fusion inline. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Arrière-plan de l'en-tête de l'ancêtre commun dans les conflits de fusion inline. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Arrière-plan du contenu de l'ancêtre commun dans les conflits de fusion inline. La couleur doit ne pas être opaque afin de ne pas masquer les décorations sous-jacentes.","Couleur de bordure des en-têtes et du séparateur dans les conflits de fusion inline.","Premier plan de la règle d'aperçu actuelle pour les conflits de fusion inline.","Premier plan de la règle d'aperçu entrante pour les conflits de fusion inline.","Arrière-plan de la règle d'aperçu de l'ancêtre commun dans les conflits de fusion inline.","Couleur du marqueur de la règle d'aperçu pour rechercher des correspondances.","Couleur du marqueur de la règle d'aperçu pour la mise en évidence de la sélection."],
"vs/platform/workspaces/common/workspaces":["Espace de travail de code","Sans titre(Espace de travail)","{0} (Espace de travail)","{0} (Espace de travail)"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.fr.js.map