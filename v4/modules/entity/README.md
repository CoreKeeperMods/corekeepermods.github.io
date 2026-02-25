# Entity Submodule

> The Entity Submodule contains features to add/modify/remove entities more easily.

## Usage
To load this submodule, add the following code to your `IMod` class within the `EarlyInit()` function.
<!-- tabs:start -->

<!-- tab:Copy Code -->
```csharp
CoreLibMod.LoadSubmodule(typeof(EntityModule);
```

<!-- tab:*MyMod.cs* Example -->
```csharp
using CoreLib;
using CoreLib.Submodule.Entity;
using PugMod;
using UnityEngine;

namespace MyNamespace
{
	public class MyMod : IMod
	{
		public void EarlyInit()
		{
            //Before the submodule is loaded
			CoreLibMod.LoadSubmodule(typeof(EntityModule);
            //The submodule is now loaded
		}
		
		public void Init() { }

		public void Shutdown() { }

		public void ModObjectLoaded(Object obj) { }

		public void Update() { }
		}
	}
}
```

<!-- tabs:end -->

## Components

- [`ModCraftingAuthoring`](#modcraftingauthoring)
- [`ModCraftingUISetting`](#modcraftinguisetting)
- [`ModRefreshCraftingBuildingTitles`](#modrefreshcraftingbuildingtitles)
- [`ModReskinCondition`](#modreskincondition)
- [`ModWideWorkbenchBuilding`](#modwideworkbenchbuilding)
- [`ModWorkbenchBuilding`](#modworkbenchbuilding)
- [`RuntimeMaterial`](#runtimematerial)
- [`SupportsCoreLib`](#supportscorelib)
- [`SupportsPooling`](#supportspooling)

### `ModCraftingAuthoring`
> **Usage**: Entity
> 
> A component that allows the authoring of crafting recipes.

![Mod Crafting Authoring](pics/mod-crafting-authoring-1.png ':size=45%')

### `ModCraftingUISetting`
> **Usage**: Entity
> 
> A component that allows the customization of the crafting UI Window Titles for this Entity's graphical prefab.

![Mod Crafting UI Setting](pics/mod-crafting-ui-setting-1.png ':size=45%')

### `ModRefreshCraftingBuildingTitles`
> **Usage**: Entity
> 
> A component that allows the refreshing of crafting building titles for this Entity's graphical prefab.

![Mod Refresh Crafting Building Titles](pics/mod-refresh-crafting-building-titles-1.png ':size=45%')

### `ModReskinCondition`
> **Usage**: Entity
> 
> A component that allows the reskinning of crafting buildings.
> 
> **This component is reliant on `ObjectAuthoring`'s or `EntityMonoBehaviourData`'s graphical prefab.

![Mod Reskin Condition](pics/mod-reskin-condition-1.png ':size=45%')

### `ModWideWorkbenchBuilding`
> **Usage**: Graphical Entity
> 
> An `EntityMonoBehaviour`component that allows the creation of a wide crafting workbench.

![Mod Wide Workbench Building](pics/mod-wide-workbench-building-1.png ':size=45%')

### `ModWorkbenchBuilding`
> **Usage**: Graphical Entity
> 
> An `EntityMonoBehaviour`component that allows the creation of a crafting workbench.

![Mod Workbench Building](pics/mod-workbench-building-1.png ':size=45%')

### `RuntimeMaterial`
> **Usage**: Graphical Entity
> 
> A component that allows the modification for the material of a Graphical Entity's `Renderer` or `SpriteObject`.

![Runtime Material](pics/runtime-material-1.png ':size=45%')

### `SupportsCoreLib`
> **Usage**: Entity
> 
> A component that registers the entity to be used by CoreLib.

![Supports CoreLib](pics/supports-corelib-1.png ':size=45%')

### `SupportsPooling`
> **Usage**: Graphical Entity
> 
> A component that registers the graphical entity to be pooled by CoreLib.

![Supports Pooling](pics/supports-pooling-1.png ':size=45%')

## Scriptable Objects

- [`WorkbenchDefinition`](#workbenchdefinition)

### `WorkbenchDefinition`
> A scriptable object that defines a crafting workbench.

![Workbench Definition](pics/workbench-definition-1.png ':size=45%')

<!-- tabs: start -->
<!-- tab: Workbench Definition -->
| Name                             | Display                   | Options                                                                             | Default | Desc                                                   |
|:---------------------------------|---------------------------|-------------------------------------------------------------------------------------|---------|--------------------------------------------------------|
| Workbench Type                   | List                      | Simple, Wide                                                                        | Simple  | A list of Workbench Types                              |
| Item ID                          | Text                      | `<Mod ID>:<Item ID>`                                                                | N/A     | The ID of the Workbench                                |
| Rarity                           | List                      | Poor, Common, Uncommon, Rare, Epic, Legendary                                       | Common  | The rarity of the Workbench                            |
| Big Icon                         | Sprite/PNG                | 16x16 PNG                                                                           | N/A     | The large icon for the Workbench                       |
| Small Icon                       | Sprite/PNG                | 10x10 sprite within a 16x16 PNG                                                     | N/A     | The small icon for the Workbench                       |
| Asset Reference                  | SpriteAssetSkin DataBlock | `Default/Up`: 16x16 (Simple) 32x16 (Wide) `Side/Side2`: 16x20 (Simple) 16x32 (Wide) | N/A     | The description of the Workbench                       |
| Bind To Root Workbench           | Checkbox                  | true, false                                                                         | false   | Bind to CoreLib's Root Workbench                       |
| Recipe                           | Item List                 |                                                                                     | N/A     | The list of items to make the Workbench                |
| Can Craft                        | Item List                 |                                                                                     | N/A     | The list of items the Workbench can create             |
| Related Workbenches              | Item List                 |                                                                                     | N/A     | Show the craftable items from this list of Workbenches |
| Refresh Related Workbench Titles | Checkbox                  | true, false                                                                         | false   | Show the titles from the list of Related Workbenches   |
| Titles                           | LocalizedString List      |                                                                                     | N/A     | The list of titles for this Workbench                  |
| Skin                             | List                      | Wood, Stone, Merchant, Upgraded Forge, Dangerous Usage                              | Wood    | The visual look of the Workbench                       |
<!-- tabs: end -->


## Additional Notes
?> The scripts that were required in the method `ModObjectLoaded()` for version 3.x are now automatically loaded by the submodule by finding the scriptable objects and components.