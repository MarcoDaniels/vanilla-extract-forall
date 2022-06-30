let
  pkgs = import (fetchTarball {
    name = "NixOS-unstable-23-01-2022";
    url = "https://github.com/NixOS/nixpkgs/archive/30daa988f10.tar.gz";
    sha256 = "0zh3rbmzyv8d57fn22vfzi8b1di5daqwdrd6j1ayd5p1rh2vk59m";
  }) { };

  build = pkgs.writeScriptBin "build" ''
  '';

  start = pkgs.writeScriptBin "start" ''
  '';

in pkgs.mkShell {
  buildInputs = [
    pkgs.nixfmt
    pkgs.nodejs-16_x
    pkgs.yarn

    build
    start
  ];
}
