const COLORS = {
  // Base colors
  black: '#181a1f',
  darkGray: '#21252b',
  mediumGray: '#282c34',
  lightGray: '#2c313a',
  veryLightGray: '#383e4a',

  // UI colors
  border: '#80808059',
  text: '#d7dae0',
  secondaryText: '#9da5b4',
  mutedText: '#6b717d',

  // Syntax colors
  red: '#e06c75',
  brightRed: '#f44747',
  darkRed: '#c24038',
  green: '#98c379',
  yellow: '#e5c07b',
  blue: '#61afef',
  brightBlue: '#528bff',
  magenta: '#c678dd',
  brightMagenta: '#7e0097',
  purple: '#ab63f2',
  cyan: '#56b6c2',

  // Editor specific
  comment: '#676f7d',
  white: '#f8f8f0',
  offWhite: '#abb2bf',
  selectionBlue: '#42557b',

  // Alphas
  blackAlpha: '#000000c0',
  cyanAlpha: '#56b6c2a0',
  greenAlpha: '#00809b33',
} as const;

export function generateTheme({
  name,
  italic,
}: {
  name?: string;
  italic?: boolean;
} = {}) {
  return {
    name: name ?? 'One Monokai Python',
    type: 'dark',
    semanticHighlighting: true,
    colors: {
      'activityBar.background': '#2f333d',
      'activityBar.foreground': COLORS.text,
      'activityBarBadge.background': COLORS.brightBlue,
      'activityBarBadge.foreground': '#f8fafd',
      'button.background': COLORS.brightBlue,
      'debugToolBar.background': '#2F333D',
      'diffEditor.insertedTextBackground': COLORS.greenAlpha,
      'dropdown.background': '#1d1f23',
      'dropdown.border': COLORS.black,
      'editor.background': COLORS.mediumGray,
      'editor.findMatchBackground': COLORS.selectionBlue,
      'editor.lineHighlightBackground': COLORS.veryLightGray,
      'editor.selectionBackground': '#3e4451',
      'editorCursor.foreground': COLORS.white,
      'editorError.foreground': COLORS.darkRed,
      'editorGroup.border': COLORS.black,
      'editorGroup.emptyBackground': COLORS.black,
      'editorGroupHeader.tabsBackground': COLORS.darkGray,
      'editorHoverWidget.background': COLORS.darkGray,
      'editorHoverWidget.border': COLORS.black,
      'editorIndentGuide.background1': '#3b4048',
      'editorLineNumber.foreground': '#495162',
      'editorRuler.foreground': '#484848',
      'editorSuggestWidget.background': COLORS.darkGray,
      'editorSuggestWidget.border': COLORS.black,
      'editorSuggestWidget.selectedBackground': COLORS.lightGray,
      'editorUnnecessaryCode.opacity': COLORS.blackAlpha,
      'editorWhitespace.foreground': '#484a50',
      'editorWidget.background': COLORS.darkGray,
      'input.background': '#1d1f23',
      'list.activeSelectionBackground': COLORS.lightGray,
      'list.activeSelectionForeground': COLORS.text,
      'list.focusBackground': COLORS.veryLightGray,
      'list.highlightForeground': '#c5c5c5',
      'list.hoverBackground': '#292d35',
      'list.inactiveSelectionBackground': COLORS.lightGray,
      'list.inactiveSelectionForeground': COLORS.text,
      'notifications.background': COLORS.darkGray,
      'panel.background': COLORS.darkGray,
      'scrollbarSlider.activeBackground': '#747d9180',
      'scrollbarSlider.background': '#4e566680',
      'scrollbarSlider.hoverBackground': '#5a637580',
      'sideBar.background': COLORS.darkGray,
      'sideBar.border': COLORS.border,
      'sideBarSectionHeader.background': COLORS.mediumGray,
      'statusBar.background': COLORS.darkGray,
      'statusBar.border': COLORS.border,
      'statusBar.debuggingBackground': COLORS.darkGray,
      'statusBar.foreground': COLORS.secondaryText,
      'statusBar.noFolderBackground': COLORS.darkGray,
      'statusBarItem.hoverBackground': COLORS.lightGray,
      'tab.activeBackground': COLORS.veryLightGray,
      'tab.border': COLORS.black,
      'tab.inactiveBackground': COLORS.darkGray,
      'terminal.ansiBlack': '#2d3139',
      'terminal.ansiBlue': COLORS.brightBlue,
      'terminal.ansiBrightBlack': '#7f848e',
      'terminal.ansiBrightBlue': COLORS.brightBlue,
      'terminal.ansiBrightCyan': COLORS.cyan,
      'terminal.ansiBrightGreen': COLORS.green,
      'terminal.ansiBrightMagenta': COLORS.brightMagenta,
      'terminal.ansiBrightRed': COLORS.brightRed,
      'terminal.ansiBrightWhite': COLORS.text,
      'terminal.ansiBrightYellow': COLORS.yellow,
      'terminal.ansiCyan': COLORS.cyan,
      'terminal.ansiGreen': COLORS.green,
      'terminal.ansiMagenta': COLORS.magenta,
      'terminal.ansiRed': COLORS.red,
      'terminal.ansiWhite': COLORS.text,
      'terminal.ansiYellow': COLORS.yellow,
      'terminal.foreground': COLORS.offWhite,
      'titleBar.activeBackground': COLORS.mediumGray,
      'titleBar.activeForeground': COLORS.secondaryText,
      'titleBar.inactiveBackground': COLORS.mediumGray,
      'titleBar.inactiveForeground': COLORS.mutedText,
    },
    tokenColors: [
      {
        scope: ['comment', 'string.comment'],
        settings: {
          foreground: COLORS.comment,
        },
      },
      {
        scope: ['string', 'string.template'],
        settings: {
          foreground: COLORS.yellow,
        },
      },
      {
        scope: 'constant.numeric',
        settings: {
          foreground: COLORS.magenta,
        },
      },
      {
        scope: [
          'string.embedded.begin',
          'string.embedded.end',
          'punctuation.definition.template-expression',
          'punctuation.section.embedded',
        ],
        settings: {
          foreground: COLORS.magenta,
        },
      },
      {
        scope: [
          'punctuation.section.embedded.begin.js',
          'punctuation.section.embedded.end.js',
          'punctuation.section.embedded.begin.erb',
          'punctuation.section.embedded.end.erb',
          'source.elixir.embedded',
          'punctuation.separator',
          'punctuation.accessor',
          'meta.brace',
        ],
        settings: {
          foreground: COLORS.offWhite,
        },
      },
      {
        scope: 'constant.language',
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: ['constant.character', 'constant.other'],
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: 'variable.language',
        settings: {
          foreground: COLORS.red,
        },
      },
      {
        scope: [
          'keyword',
          'keyword.operator.logical',
          'keyword.operator.constructor',
        ],
        settings: {
          foreground: COLORS.red,
        },
      },
      {
        scope: 'keyword.operator',
        settings: {
          foreground: COLORS.red,
        },
      },
      {
        scope: 'storage',
        settings: {
          foreground: COLORS.red,
        },
      },
      {
        scope: [
          'entity.name.class',
          'entity.name.module',
          'entity.name.type',
          'storage.identifier',
          'support.class',
          'meta.import',
          'entity.name.function.target.makefile',
        ],
        settings: {
          foreground: COLORS.blue,
        },
      },
      {
        scope: [
          'variable.other.object',
          'variable.other.constant',
          'variable.other.global',
          'variable.other.readwrite.class',
          'variable.other.readwrite.instance',
          'variable.other.readwrite.batchfile',
          'variable.readwrite',
          'variable.readwrite.other.block',
        ],
        settings: {
          foreground: COLORS.blue,
        },
      },
      {
        scope: [
          'entity.other.inherited-class',
          'text.tex.latex support.function',
        ],
        settings: {
          foreground: COLORS.green,
        },
      },
      {
        scope: ['storage.modifier.import', 'storage.modifier.package'],
        settings: {
          foreground: COLORS.blue,
        },
      },
      {
        scope: [
          'variable.parameter',
          'entity.name.variable.parameter',
          'parameter.variable',
        ],
        settings: {
          foreground: '#D19A66',
          fontStyle: 'italic',
        },
      },
      {
        scope: 'entity.name.function-call',
        settings: {
          foreground: COLORS.offWhite,
        },
      },
      {
        scope: [
          'function.support.builtin',
          'function.support.core',
          'support.function.command',
        ],
        settings: {
          foreground: COLORS.green,
        },
      },
      {
        scope: ['entity.name.tag', 'entity.name.tag.class.js'],
        settings: {
          foreground: COLORS.red,
        },
      },
      {
        scope: ['entity.name.tag.class', 'entity.name.tag.id'],
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: COLORS.green,
        },
      },
      {
        scope: 'support.constant',
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: [
          'support.type',
          'support.variable',
          'variable.other.normal.fish',
          'variable.other.normal.shell',
        ],
        settings: {
          foreground: COLORS.blue,
        },
      },
      {
        scope: 'support.dictionary.json',
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: [
          'support.type.property-name.css',
          'support.type.property-name.scss',
          'support.type.property-name.less',
          'support.type.property-name.sass',
        ],
        settings: {
          foreground: COLORS.offWhite,
        },
      },
      {
        scope: [
          'entity.other.attribute-name.pseudo-class.css',
          'entity.other.attribute-name.pseudo-class.scss',
          'entity.other.attribute-name.pseudo-class.less',
          'entity.other.attribute-name.pseudo-class.sass',
          'entity.other.attribute-name.pseudo-element.css',
          'entity.other.attribute-name.pseudo-element.scss',
          'entity.other.attribute-name.pseudo-element.less',
          'entity.other.attribute-name.pseudo-element.sass',
        ],
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: [
          'support.constant.css',
          'support.constant.scss',
          'support.constant.less',
          'support.constant.sass',
        ],
        settings: {
          foreground: COLORS.green,
        },
      },
      {
        scope: [
          'variable.css',
          'variable.scss',
          'variable.less',
          'variable.sass',
        ],
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: [
          'variable.css.string',
          'variable.scss.string',
          'variable.less.string',
          'variable.sass.string',
        ],
        settings: {
          foreground: COLORS.yellow,
        },
      },
      {
        scope: ['unit.css', 'unit.scss', 'unit.less', 'unit.sass'],
        settings: {
          foreground: COLORS.magenta,
        },
      },
      {
        scope: [
          'function.css',
          'function.scss',
          'function.less',
          'function.sass',
        ],
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: 'support.other.variable',
        settings: {
          fontStyle: '',
        },
      },
      {
        scope: 'invalid',
        settings: {
          foreground: COLORS.white,
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          foreground: COLORS.white,
        },
      },
      {
        scope: 'support.type.property-name.json',
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: 'string.detected-link',
        settings: {
          foreground: COLORS.blue,
        },
      },
      {
        scope: ['meta.diff', 'meta.diff.header'],
        settings: {
          foreground: '#75715E',
        },
      },
      {
        scope: 'markup.deleted',
        settings: {
          foreground: COLORS.red,
        },
      },
      {
        scope: 'markup.inserted',
        settings: {
          foreground: COLORS.green,
        },
      },
      {
        scope: 'markup.changed',
        settings: {
          foreground: COLORS.yellow,
        },
      },
      {
        scope: 'constant.numeric.line-number.find-in-files - match',
        settings: {
          foreground: COLORS.cyanAlpha,
        },
      },
      {
        scope: 'entity.name.filename.find-in-files',
        settings: {
          foreground: COLORS.yellow,
        },
      },
      {
        scope: 'markup.italic, markup.italic.markdown',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        scope: [
          'punctuation.definition.italic.markdown',
          'punctuation.definition.bold.markdown',
          'punctuation.definition.heading.markdown',
        ],
        settings: {
          foreground: COLORS.comment,
        },
      },
      {
        scope: 'punctuation.definition.italic.markdown',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        scope: 'markup.underline.link.markdown',
        settings: {
          foreground: COLORS.blue,
        },
      },
      {
        scope: 'markup.bold.markdown',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        scope: 'markup.heading.markdown',
        settings: {
          foreground: COLORS.red,
          fontStyle: 'bold',
        },
      },
      {
        scope: 'markup.quote.markdown',
        settings: {
          foreground: COLORS.green,
        },
      },
      {
        scope: 'meta.separator.markdown',
        settings: {
          foreground: COLORS.magenta,
          fontStyle: 'bold',
        },
      },
      {
        scope: ['markup.inline.raw', 'markup.raw.block.markdown'],
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: 'punctuation.definition.list_item.markdown',
        settings: {
          foreground: '#FFFFFF',
          fontStyle: 'bold',
        },
      },
      {
        scope: [
          'punctuation.definition.decorator',
          'entity.name.function.decorator',
          'meta.decorator',
          'meta.decorator entity.name.function',
        ],
        settings: {
          foreground: COLORS.cyan,
        },
      },
      {
        scope: [
          'storage.type.class',
          'storage.type.function',
          'punctuation.separator.key-value.ini',
          'entity.name.section.group-title.ini',
        ],
        settings: {
          foreground: COLORS.red,
        },
      },
      {
        scope: ['variable.other.env', 'keyword.other.definition.ini'],
        settings: {
          foreground: COLORS.blue,
        },
      },
      {
        scope: ['meta.function-call'],
        settings: {
          foreground: COLORS.green,
        },
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: '#6796E6',
        },
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: '#CD9731',
        },
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: COLORS.brightRed,
        },
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: '#B267E6',
        },
      },
      {
        scope: 'variable.language.this',
        settings: {
          foreground: COLORS.purple,
          fontStyle: 'italic',
        },
      },
    ],
    semanticTokenColors: {
      'variable:javascript': COLORS.text,
      'variable:typescript': COLORS.text,
      module: COLORS.text,
      method: COLORS.green,
      'function.declaration': COLORS.green,
      selfParameter: COLORS.purple,
      magicFunction: {
        foreground: COLORS.green,
        italic: italic ?? true,
      },
      '*.decorator': COLORS.cyan,
      'method.decorator': COLORS.text,
      // "variable.local.readonly": COLORS.blue,
    },
  };
}
