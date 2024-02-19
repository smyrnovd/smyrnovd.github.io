---
title: Alacritty console
description: "Config and install nice terminal"
pubDate: 2023-08-28
author: Dmitry
math: true
draft: false
tags:
  - linux
  - terminal
  - config
---

```bash
sudo dnf install alacritty
```

Then create congif file

```bash
nano .config/alacritty/alacritty.toml
```

and paste this config for example:

```yml
[colors.bright]
black = "#5b6268"
blue = "#3071db"
cyan = "#46d9ff"
green = "#4db5bd"
magenta = "#a9a1e1"
red = "#da8548"
white = "#dfdfdf"
yellow = "#ecbe7b"

[colors.cursor]
cursor = "#528bff"
text = "CellBackground"

[colors.normal]
black = "#1c1f24"
blue = "#51afef"
cyan = "#5699af"
green = "#98be65"
magenta = "#c678dd"
red = "#ff6c6b"
white = "#202328"
yellow = "#da8548"

[colors.primary]
background = "#282c34"
foreground = "#bbc2cf"

[colors.selection]
background = "#3e4451"
text = "CellForeground"

[font]
size = 14

[[keyboard.bindings]]
action = "SpawnNewInstance"
key = "N"
mods = "Command"

[[keyboard.bindings]]
chars = " "
key = "Space"
mods = "Alt"

[[keyboard.bindings]]
chars = "\u0015"
key = "Back"
mods = "Super"

[[keyboard.bindings]]
chars = "\u001Bb"
key = "Left"
mods = "Alt"

[[keyboard.bindings]]
chars = "\u001Bf"
key = "Right"
mods = "Alt"

[[keyboard.bindings]]
chars = "\u001BOH"
key = "Left"
mode = "AppCursor"
mods = "Command"

[[keyboard.bindings]]
chars = "\u001BOF"
key = "Right"
mode = "AppCursor"
mods = "Command"

[[keyboard.bindings]]
chars = "\u001BR"
key = "R"
mods = "Command"

# [schemes.ayudark.bright]
# black = "0x686868"
# blue = "0x59C2FF"
# cyan = "0x95E6CB"
# green = "0xC2D94C"
# magenta = "0xFFEE99"
# red = "0xF07178"
# white = "0xFFFFFF"
# yellow = "0xFFB454"
#
# [schemes.ayudark.normal]
# black = "0x01060E"
# blue = "0x53BDFA"
# cyan = "0x90E1C6"
# green = "0x91B362"
# magenta = "0xFAE994"
# red = "0xEA6C73"
# white = "0xC7C7C7"
# yellow = "0xF9AF4F"
#
# [schemes.ayudark.primary]
# background = "0x0A0E14"
# foreground = "0xB3B1AD"
#
# [schemes.doom-one.bright]
# black = "#5b6268"
# blue = "#3071db"
# cyan = "#46d9ff"
# green = "#4db5bd"
# magenta = "#a9a1e1"
# red = "#da8548"
# white = "#dfdfdf"
# yellow = "#ecbe7b"
#
# [schemes.doom-one.cursor]
# cursor = "#528bff"
# text = "CellBackground"
#
# [schemes.doom-one.normal]
# black = "#1c1f24"
# blue = "#51afef"
# cyan = "#5699af"
# green = "#98be65"
# magenta = "#c678dd"
# red = "#ff6c6b"
# white = "#202328"
# yellow = "#da8548"
#
# [schemes.doom-one.primary]
# background = "#282c34"
# foreground = "#bbc2cf"
#
# [schemes.doom-one.selection]
# background = "#3e4451"
# text = "CellForeground"
#
# [schemes.dracula.colors.bright]
# black = "#4d4d4d"
# blue = "#caa9fa"
# cyan = "#9aedfe"
# green = "#5af78e"
# magenta = "#ff92d0"
# red = "#ff6e67"
# white = "#e6e6e6"
# yellow = "#f4f99d"
#
# [schemes.dracula.colors.cursor]
# cursor = "CellForeground"
# text = "CellBackground"
#
# [schemes.dracula.colors.dim]
# black = "#14151b"
# blue = "#4d5b86"
# cyan = "#59dffc"
# green = "#1ef956"
# magenta = "#ff46b0"
# red = "#ff2222"
# white = "#e6e6d1"
# yellow = "#ebf85b"
#
# [schemes.dracula.colors.line_indicator]
# background = "None"
# foreground = "None"
#
# [schemes.dracula.colors.normal]
# black = "#000000"
# blue = "#bd93f9"
# cyan = "#8be9fd"
# green = "#50fa7b"
# magenta = "#ff79c6"
# red = "#ff5555"
# white = "#bfbfbf"
# yellow = "#f1fa8c"
#
# [schemes.dracula.colors.primary]
# background = "#282a36"
# foreground = "#f8f8f2"
#
# [schemes.dracula.colors.search.bar]
# background = "#282a36"
# foreground = "#f8f8f2"
#
# [schemes.dracula.colors.search.focused_match]
# background = "#ffb86c"
# foreground = "#44475a"
#
# [schemes.dracula.colors.search.matches]
# background = "#50fa7b"
# foreground = "#44475a"
#
# [schemes.dracula.colors.selection]
# background = "#44475a"
# text = "CellForeground"
#
# [schemes.dracula.colors.vi_mode_cursor]
# cursor = "CellForeground"
# text = "CellBackground"
#
# [schemes.gruvbox-dark.colors.bright]
# black = "#3c3836"
# blue = "#7daea3"
# cyan = "#89b482"
# green = "#a9b665"
# magenta = "#d3869b"
# red = "#ea6962"
# white = "#d4be98"
# yellow = "#d8a657"
#
# [schemes.gruvbox-dark.colors.normal]
# black = "#3c3836"
# blue = "#7daea3"
# cyan = "#89b482"
# green = "#a9b665"
# magenta = "#d3869b"
# red = "#ea6962"
# white = "#d4be98"
# yellow = "#d8a657"

#[schemes.gruvbox-dark.colors.primary]
#background = "#282828"
# foreground = "#d4be98"

[window]
decorations = "full"
dynamic_padding = true
opacity = 0.93

[window.dimensions]
columns = 80
lines = 24

[window.padding]
x = 0
y = 0
```

Enjoy
