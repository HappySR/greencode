{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
  };
  outputs =
    { flake-parts, ... }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "x86_64-linux"
        "x86_64-darwin"
        "aarch64-linux"
        "aarch64-darwin"
      ];
      perSystem =
        { pkgs, ... }:
        {
          devShells.default = pkgs.mkShellNoCC {
            name = "greencode";
            packages = [
              pkgs.deno
              pkgs.mkcert
              pkgs.nodejs-slim_24
              pkgs.pnpm
              pkgs.pocketbase
              pkgs.svelte-language-server
              pkgs.typescript-language-server
              pkgs.tailwindcss-language-server
            ];
          };
        };
    };
}
