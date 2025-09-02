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

Currently known issues can be seen here https://github.com/aryatsriv/vscode-copy-higlight/issues
Please report any issues on https://github.com/aryatsriv/vscode-copy-higlight.

## Release Notes

### 1.0.1

-   Enhanced configuration options
-   Better error handling

**Enjoy!**
