{ pkgs }: {
  deps = [
    pkgs.sudo
    pkgs.nodejs
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}
