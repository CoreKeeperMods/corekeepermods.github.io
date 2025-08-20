# CoreLib
![CoreLib](../corelib-bg.png)
> A modding library for Core Keeper. Provides features that makes modding Core Keeper easier.

!> **WARNING!** Version 3.0.0 contains breaking changes.

## List of Features
- Custom items, blocks, enemies, NPC, etc.
- Easier access to Rewired input system, localization
- Custom chat commands
- And much more!

## Developing w/ CoreLib
To develop with CoreLib, you will need to install CoreLib package into your mod SDK project.

## Preparation
CoreLib packages use git packages, this means you **MUST** install [git](https://git-scm.com/download/win) and add it to your PATH environment variable.

> Note:
> - After installing git make sure to close Unity and Unity hub completely!
> - Unity Hub does not close when you close the window and needs to be exited from the Windows Notification Area

## Installation
Navigate to your mod SDK project root, and open `Packages` folder. And edit `manifest.json` file with your favorite text editor.

Add following lines at the beginning:
```json
"ck.modding.corelib": "https://github.com/CoreKeeperMods/CoreLib.git?path=/Assets/CoreLibPackage#main",
"ck.modding.sdk-extensions": "https://github.com/CoreKeeperMods/CoreLib.git?path=/Assets/SDKExtensions#main",
"ck.modding.markdig": "https://github.com/CoreKeeperMods/CoreLib.git?path=/Assets/Markdig#main",
```

If you want to install latest version of CoreLib use `#main` at the end of every line. However it is highly recommended that you lock your version, and update it manually. To do that replace `#main` with `#tag`. For example `#3.0.1`.

Please note that the CoreLibPackage version is separate from CoreLib submodules version on Mod IO. This is mainly because the package combines all submodules, and other tools.

To find out the correct version to target read the release notes for Core Lib Package

## Done
Now you can open your project and you will have Core Lib ready to be used.

You can access CoreLib documentation from within your editor, by navigating to CoreLib package folder and viewing `README.md`

### Utilities
With Core Lib also comes a package called `SDK Extensions`. This package adds a few useful editors:

- Select dependencies from a dropdown (Including CoreLib)
- Updating asmdef file accordingly to your dependency declaration
- Building Burst assembly with your mod

**Note:** some of these features require manual changes to mod SDK project. Reference [my fork](https://github.com/kremnev8/CoreKeeperModSDK) of mod SDK project to see what changes you need.

## Mod.io Links:
- [Audio Submodule](https://mod.io/g/corekeeper/m/corelibaudio ':class=specialLink')
- [Commands Submodule](https://mod.io/g/corekeeper/m/corelibcommands ':class=specialLink')
- [Drops Submodule](https://mod.io/g/corekeeper/m/corelibdrops ':class=specialLink')
- [Entity Submodule](https://mod.io/g/corekeeper/m/corelibentity ':class=specialLink')
- [Equipment Submodule](https://mod.io/g/corekeeper/m/corelibequipment ':class=specialLink')
- [Localization Submodule](https://mod.io/g/corekeeper/m/coreliblocalization ':class=specialLink')
- [Resources Submodule](https://mod.io/g/corekeeper/m/corelibresources ':class=specialLink')
- [RewiredExtension Submodule](https://mod.io/g/corekeeper/m/corelibrewiredextension ':class=specialLink')
- [Tilesets Submodule](https://mod.io/g/corekeeper/m/corelibtilesets ':class=specialLink')
- [User Interface Submodule](https://mod.io/g/corekeeper/m/corelib-userinterface ':class=specialLink')