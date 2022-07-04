let
  pkgs = import (fetchTarball {
    name = "NixOS-unstable-23-01-2022";
    url = "https://github.com/NixOS/nixpkgs/archive/30daa988f10.tar.gz";
    sha256 = "0zh3rbmzyv8d57fn22vfzi8b1di5daqwdrd6j1ayd5p1rh2vk59m";
  }) { };

  start = pkgs.writeScriptBin "start" ''
    ${pkgs.concurrently}/bin/concurrently "cd svelte && yarn start --port 9000" "cd react && yarn start --port 9001" "cd elm && yarn start --port 9002" "cd html && yarn start --port 9003" "cd vue && yarn start --port 9004"
  '';

in pkgs.mkShell {
  buildInputs = [
    pkgs.nixfmt

    pkgs.nodejs-16_x
    pkgs.yarn
    pkgs.concurrently

    pkgs.elmPackages.elm
    pkgs.elmPackages.elm-format

    start
  ];
}
