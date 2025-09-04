import * as vscode from "vscode";
import { hexToRgba } from "../utils/colorUtils";

// Main highlight functionality
export const highlight = async (command: string) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    let selections = editor.selections;

    // If no text is selected, highlight the entire current line(s)
    const highlightRanges: vscode.Range[] = [];
    for (const selection of selections) {
        if (selection.isEmpty) {
            // No selection - highlight the entire line
            const line = editor.document.lineAt(selection.start.line);
            highlightRanges.push(line.range);
        } else {
            // Text is selected - highlight the selection
            highlightRanges.push(selection);
        }
    }

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

    editor.setDecorations(decoration, highlightRanges);
    await vscode.commands.executeCommand(command);

    // Remove highlight after configured duration
    setTimeout(() => {
        decoration.dispose();
    }, duration);
};
