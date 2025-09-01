// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const highlight = async (command: string) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            // If no editor is active, just execute the command (for terminal)
            await vscode.commands.executeCommand(command);
            return;
        }

        const selections = editor.selections;

        // Get configuration settings
        const config = vscode.workspace.getConfiguration('copyHighlight');
        const backgroundColor = config.get<string>('backgroundColor', '#ffff00');
        const transparency = config.get<number>('transparency', 0.4);
        const duration = config.get<number>('duration', 300);

        // Convert hex color to rgba with transparency
        const rgbaColor = hexToRgba(backgroundColor, transparency);

        const decoration = vscode.window.createTextEditorDecorationType({
            backgroundColor: rgbaColor,
        });

        editor.setDecorations(decoration, selections);
        await vscode.commands.executeCommand(command);

        // Remove highlight after configured duration
        setTimeout(() => {
            decoration.dispose();
        }, duration);
    };

    // Helper function to convert hex to rgba
    const hexToRgba = (hex: string, alpha: number): string => {
        // Remove # if present
        hex = hex.replace('#', '');

        // Parse hex values
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // Register copy command
    const copyDisposable = vscode.commands.registerCommand(
        "copyHighlight.copy",
        () => highlight("editor.action.clipboardCopyAction")
    );

    context.subscriptions.push(copyDisposable);
}

export function deactivate() { }
