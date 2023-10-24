import * as vscode from "vscode";
import { CustomCodeJumpProvider } from "./CustomCodeJumpProvider";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerDefinitionProvider(
      [
        { scheme: "file", language: "vue" },
        { scheme: "file", language: "typescript" },
      ],
      new CustomCodeJumpProvider()
    )
  );
}

export function deactivate() {}
