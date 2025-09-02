import * as vscode from "vscode";
import { hexToRgba } from "../utils/colorUtils";

// Main highlight functionality
export const highlight = async (command: string) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const selections = editor.selections;

    // Get configuration settings
    const config = vscode.workspace.getConfiguration('copyHighlight');
    const backgroundColor = config.get<string>('backgroundColor', '#ffff00');
    const transparency = config.get<number>('transparency', 0.3);
    const duration = config.get<number>('duration', 200);

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
