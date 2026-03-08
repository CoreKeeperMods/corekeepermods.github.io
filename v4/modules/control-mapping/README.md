# Control Mapping Submodule

> The Control Mapping Submodule contains features to add keyboard/mouse/controller shortcuts more easily.

## Usage
To load this submodule, add the following code to your `IMod` class within the `EarlyInit()` function.
<!-- tabs:start -->

<!-- tab:Copy Code -->
```csharp
CoreLibMod.LoadSubmodule(typeof(ControlMappingModule));
```

<!-- tab:*MyMod.cs* Example -->
```csharp
using CoreLib;
using CoreLib.Submodule.ControlMapping;
using PugMod;
using UnityEngine;

namespace MyNamespace
{
	public class MyMod : IMod
	{
		public void EarlyInit()
		{
            //Before the submodule is loaded
			CoreLibMod.LoadSubmodule(typeof(ControlMappingModule));
            //The submodule is now loaded
		}
		
		public void Init() { }

		public void Shutdown() { }

		public void ModObjectLoaded(Object obj) { }

		public void Update() { }
	}
}
```

<!-- tabs:end -->

## Methods
These methods are available once the submodule is loaded. All methods go in your `EarlyInit()` function.
- [`AddNewCategory`](#addnewcategory)
- [`AddKeyboardBind`](#addkeyboardbind)
- [`AddMouseBind`](#addmousebind)
- [`AddControllerBind`](#addcontrollerbind)

## ```AddNewCategory```
> Adds a new category for keybinds, allowing for organized grouping of related keybindings within the application.

<!-- tabs:start -->
<!-- tab: Parameters -->
- **`categoryName`** (`string`):
	- Description: The unique name ID of the category to be created.
<!-- tab: Returns -->
- **`int`**:
	- Description: The ID of the newly created category.
<!-- tab: Examples -->
```csharp
int newCategoryId = AddNewCategory("MyCategory");
```
<!-- tabs:end -->

## `AddKeyboardBind`
> Adds a new keyboard keybind with the specified parameters, allowing for customizable keyboard shortcuts in the application.

<!-- tabs:start -->
<!-- tab: Parameters -->
- **`keyBindName`** (`string`):
	- Description: The unique name to identify the keybind.
	- Default Value: `""` (empty string).
- **`defaultKeyCode`** (`KeyboardKeyCode`):
	- Description: The default keyboard key code associated with the keybind.
	- Default Value: `KeyboardKeyCode.None`.
- **`modifier`** (`ModifierKey`):
	- Description: The first modifier key that has to be held down for the keybind to activate.
	- Default Value: `ModifierKey.None`.
- **`modifier2`** (`ModifierKey`):
	- Description: The second modifier key for additional functionality.
	- Default Value: `ModifierKey.None`.
- **`modifier3`** (`ModifierKey`):
	- Description: The third modifier key for advanced configurations.
	- Default Value: `ModifierKey.None`.
- **`categoryId`** (`int`):
	- Description: An identifier for categorizing the keybind, helping to organize related shortcuts.
	- Default Value: `-1` (default to Mod Category).

<!-- tab: Examples -->
#### w/o Category Example
```csharp
AddKeyboardBind("Action1", KeyboardKeyCode.S, ModifierKey.Control);
```
#### w/ Category Example
```csharp
int categoryID = AddNewCategory("MyCategory");
AddKeyboardBind("Action1", KeyboardKeyCode.A, categoryId: categoryID);
```
<!-- tabs:end -->

## `AddMouseBind`
> Adds a new mouse keybind with the specified parameters.

<!-- tabs:start -->
<!-- tab: Parameters -->
- **`keyBindName`** (`string`):
	- Description: The unique name to identify the keybind.
	- Default Value: `""` (empty string).
- **`elementId`** (`int`):
	- Description: The mouse button element ID associated with the keybind.
	- Default Value: `-1`
- **`categoryId`** (`int`):
	- Description: An identifier for categorizing the keybind, helping to organize related shortcuts.
	- Default Value: `-1` (default to Mod Category).
<!-- tabs:end -->

## `AddControllerBind`
> Adds a new controller keybind with the specified parameters.

<!-- tabs:start -->
<!-- tab: Parameters -->
- **`keyBindName`** (`string`):
	- Description: The unique name to identify the keybind.
	- Default Value: `""` (empty string).
- **`elementId`** (`int`):
	- Description: The default controller button element ID associated with the keybind.
	- Default Value: `-1`
- **`elementType`** (`ControllerElementType`):
	- Description: The type of Controller Element associated with the keybind.
	- Default Value: `ControllerElementType.Button`.
- **`axisRange`** (`AxisRange`):
	- Description: The range of axis values for the keybind.
	- Default Value: `AxisRange.Full`.
- **`inverted`** (`bool`):
	- Description: Whether the axis value should be inverted.
	- Default Value: `false`.
- **`axisContribution`** (`Pole`):
	- Description: The contribution of the axis value to the overall input.
	- Default Value: `Pole.Positive`.
- **`categoryId`** (`int`):
	- Description: An identifier for categorizing the keybind, helping to organize related shortcuts.
    - Default Value: `-1` (default to Mod Category).
<!-- tabs:end -->