import * as vscode from "vscode";

export class CustomCodeJumpProvider implements vscode.DefinitionProvider {
  provideDefinition(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Definition | vscode.LocationLink[]> {
    const targetText = document.getText();
    const editor = vscode.window.activeTextEditor;

    const selection = document.getWordRangeAtPosition(
      editor?.selection.active ?? new vscode.Position(0, 0)
    );
    const selectedText = document.getText(selection);

    return new Promise((resolve, reject) => {
      this.searchFile(selectedText)
        .then((uri) => {
          if (uri) {
            resolve(new vscode.Location(uri, new vscode.Position(0, 0)));
          } else {
            resolve(null);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  private async searchFile(
    selectedText: string
  ): Promise<vscode.Uri | undefined> {
    const parts = selectedText.split("-");

    const capitalize = (str: string) =>
      str.charAt(0).toUpperCase() + str.slice(1);
    const componentName = parts[0];
    const folderName = parts.slice(1).map(capitalize).join("");

    const files = await vscode.workspace.findFiles(
      `**/*.vue`,
      "**/node_modules/**"
    );
    let t: vscode.Uri | undefined;
    for (const v of files) {
      const path = v.path;
      if (path.includes(componentName)) {
        if (path.includes(`/${folderName}/`)) {
          return v;
        } else if (path.includes(folderName)) {
          t = v;
        }
      }
    }
    return t;
  }
}
