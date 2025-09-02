# Copy Highlight

A VS Code extension that provides visual feedback when copying text by briefly highlighting the selected text.

## Features

-   **Visual Copy Feedback**: Highlights selected text when copying to provide instant visual confirmation
-   **Customizable Highlighting**: Configure background color, transparency, and duration
-   **Non-intrusive**: Highlight automatically disappears after a configurable duration
-   **Seamless Integration**: Works with the standard Ctrl+C (Cmd+C on Mac) keyboard shortcut

![Copy Highlight Demo](images/demo.gif)

> The extension briefly highlights selected text when you copy, making it clear what was copied to the clipboard.

## Requirements

-   VS Code 1.1.8 or higher

## Extension Settings

This extension contributes the following settings:

-   `copyHighlight.backgroundColor`: Background color for copy highlighting (hex color, default: `#ffff00`)
-   `copyHighlight.transparency`: Transparency level for copy highlighting (0-1, default: `0.3`)
-   `copyHighlight.duration`: Duration in milliseconds to show the highlight (100-5000ms, default: `200`)

## Usage

1. Select any text in the editor
2. Press `Ctrl+C` (or `Cmd+C` on Mac) to copy
3. The selected text will briefly highlight to confirm the copy operation

## Configuration

You can customize the highlight appearance by modifying these settings in your VS Code settings:

```json
{
    "copyHighlight.backgroundColor": "#00ff00",
    "copyHighlight.transparency": 0.5,
    "copyHighlight.duration": 300
}
```

## Known Issues

None currently known. Please report any issues on the [GitHub repository](https://github.com/aryatsriv/vscode-copy-higlight).

## Release Notes

### 1.0.1

-   Improved code organization with modular structure
-   Enhanced configuration options
-   Better error handling

### 1.0.0

Initial release with basic copy highlighting functionality.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

-   [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

-   Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
-   Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
-   Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

-   [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
-   [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
