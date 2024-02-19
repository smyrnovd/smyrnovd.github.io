---
title: VSCode folder structure in a project
pubDate: 2023-08-16
author: Dmitry
description: VSCode workspace config for feature slice design
math: true
draft: false
tags:
  - vscode
  - workspace
  - feature slice design
  - architecture
---

First create in a root directory file with .code-workspace extension
for example `custom.code-workspace`
and add this code for Feature slice design

```
{
	"folders":  [

			{
			"name":  "original code structure",
			"path":  "./"
			},

			{
			"path":  "./src/app"
			},

			{
			"path":  "./src/pages"
			},

			{
			"path":  "./src/widgets"
			},

			{
			"path":  "./src/features"
			},

			{
			"path":  "./src/entities"
			},

			{
			"path":  "./src/shared"
			},
	]
}
```

Save it and open project like `code ./custom.code-workspace`
