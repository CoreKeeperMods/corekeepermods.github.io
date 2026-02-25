# Main Module

?> This documentation is a work in progress.

> The main CoreLib module contains a lot of utility features to make modding easier.

## Namespaces
- `CoreLib`
- `CoreLib.Data`
- `CoreLib.Data.Configuration`
- `CoreLib.Util`
- `CoreLib.Util.Extension`
- `CoreLib.Editor`
- `CoreLib.Submodule.Audio`
- `CoreLib.Submodule.Command`
- `CoreLib.Submodule.ControlMapping`
- `CoreLib.Submodule.Entity`
- `CoreLib.Submodule.EquipmentSlot`
- `CoreLib.Submodule.Localization`
- `CoreLib.Submodule.LootDrop`
- `CoreLib.Submodule.Tileset`
- `CoreLib.Submodule.UserInterface`

## Public Methods

- [`LoadSubmodule`](#LoadSubmodule)

### `LoadSubmodule`

<!-- tabs:start -->
<!-- tab: Parameters -->
- **`moduleTypes`** (`Type[]`) [**_params_**]:
	- Description: The List of submodule types to load.
<!-- tab: Examples -->
#### Single Submodule
```csharp
CoreLibMod.LoadSubmodule(typeof(AudioModule));
```

#### Multiple Submodules
```csharp
CoreLibMod.LoadSubmodule(typeof(AudioModule), typeof(CommandModule));
```
<!-- tabs:end -->

## Submodules
- [<b>Audio Submodule</b>](modules/audio/ ':class=specialLink')
- [<b>Command Submodule</b>](modules/command/ ':class=specialLink')
- [<b>Control Mapping Submodule</b>](modules/control-mapping/ ':class=specialLink')
- [<b>Entity Submodule</b>](modules/entity/ ':class=specialLink')
- [<b>Equipment Slot Submodule</b>](modules/equipment-slot/ ':class=specialLink')
- [<b>Localization Submodule</b>](modules/localization/ ':class=specialLink')
- [<b>Loot Drop Submodule</b>](modules/loot-drop/ ':class=specialLink')
- [<b>Tileset Submodule</b>](modules/tileset/ ':class=specialLink')
- [<b>User Interface Submodule</b>](modules/user-interface/ ':class=specialLink')