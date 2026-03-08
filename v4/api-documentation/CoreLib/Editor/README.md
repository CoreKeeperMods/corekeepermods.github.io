?> This document is a work in progress.

# `CoreLib.Editor` Namespace

> Editor utilities for CoreLib workflows. Includes custom inspectors, property drawers, attributes, editor tooling menu items, and ScriptableObject-driven build/workflow helpers.

## Summary

| Type                    | Name                              | Description                                                                                                                                        |
|-------------------------|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Attribute               | `ModIOTagAttribute`               | Attribute enabling a multi-selectable dropdown populated by Mod.io tags relevant to Core Keeper (filterable by category).                          |
| Enum                    | `ModIOTagAttribute.TagKind`       | Tag category selector used by `ModIOTagAttribute` (e.g., GameVersion, Type, ApplicationType, AdminAction, AccessType).                             |
| Attribute               | `ClassReferenceDropdownAttribute` | Property attribute that populates a dropdown of types derived from a specified base type.                                                          |
| Property Drawer         | `ClassReferenceDropdown`          | Custom property drawer that renders the dropdown UI for `ClassReferenceDropdownAttribute`, including a filter.                                     |
| Static Class            | `RenderingFix`                    | Editor tool that sets the editor URP pipeline asset and updates materials using certain shaders to a target sprite shader.                         |
| Class                   | `AsyncWrapper<T>`                 | Wraps an Editor coroutine and exposes a typed `result` while the coroutine iterates.                                                               |
| Static Class (internal) | `ModNameHelper`                   | Editor helper that discovers mod names from project assets (builder settings and submodule builder assets).                                        |
| Static Class            | `SafeExtensions`                  | Reflection-based compatibility helpers for reading optional fields from `ModBuilderSettings` (e.g., burst/linux flags).                            |
| Static Class            | `ModIOExtensions`                 | Editor helpers for initializing Mod.io SDK and fetching tag categories once per session.                                                           |
| Static Class            | `ComponentExtensions`             | Inspector utilities to move a Unity component to the top or bottom of the component list.                                                          |
| Custom Editor           | `RuntimeMaterialV2Editor`         | Custom inspector for `RuntimeMaterial` providing actions to copy the current material name and reassign materials by name.                         |
| Custom Editor           | `ModBuilderSettingsEditor`        | Custom inspector for `ModBuilderSettings` with tooling to sync and open the `.asmdef` file.                                                        |
| Custom Editor           | `ModLocalizationMigrateEditor`    | Editor tool to migrate `localization.csv`/TSV into Core Keeper “Data Block” localization assets.                                                   |
| Custom Editor           | `SwapEntityMonoBehaviorEditor`    | Custom inspector that provides a “Swap Component” action for `EntityMonoBehaviour`-derived components.                                             |
| Editor Window           | `SwapEntityMonoBehaviorWindow`    | Editor window that swaps an `EntityMonoBehaviour` component to another derived type and copies matching fields.                                    |
| Custom Editor           | `EntityMonoBehaviourDataEditor`   | Custom inspector that migrates `EntityMonoBehaviourData` into `ObjectAuthoring` + `InventoryItemAuthoring` and transfers data.                     |
| Class                   | `SubmodulesBuilder`               | ScriptableObject that maintains a list of submodule/mod names and can refresh the list by scanning `ModBuilderSettings` assets.                    |
| Custom Editor           | `SubmodulesDataEditor`            | Inspector for `SubmodulesBuilder` adding an “Update” button to refresh the submodule name list.                                                    |
| Class                   | `BurstModBuilder`                 | Builder class for handling Burst compilation during the mod build process (implements `PugMod.IPugModBuilderProcessor`).                           |
| Property Drawer         | `ObjectIDDrawer`                  | Custom drawer for `ObjectID` that supports searching/filtering and selecting enum entries via dropdown, plus direct int editing.                   |
| Property Drawer         | `ReadOnlyDrawer`                  | Property drawer that renders fields disabled (read-only) when marked with `ReadOnlyAttribute`.                                                     |
| Property Drawer         | `ModTilesetDrawer`                | Drawer for `ModTilesetAttribute` that lets users type or pick from discovered `ModTileset` IDs; refreshes list when assets are created.            |
| Property Drawer         | `GameVersionDrawer`               | Drawer for `ModIOTagAttribute` that displays Mod.io tag categories/tags and stores selections as a semicolon-delimited string.                     |
| Property Drawer         | `ModDependencyDrawer`             | Drawer for `ModMetadata.Dependency` providing a foldout UI and a dropdown of known mod names for `modName`.                                        |
| Property Drawer         | `GoogleLanguageDropdownDrawer`    | Drawer for `GoogleLanguagesDropdownAttribute` that provides a language dropdown using I2 language lists.                                           |
| Class                   | `ModState`                        | Serializable build/fetch/sync state container used by Chain Builder workflows (includes selection toggles, version normalization, and tag fields). |
| Class                   | `ChainBuilder`                    | ScriptableObject storing a list of mods (`ModState[]`) and supporting bulk build/sync selection state for editor automation.                       |
| Custom Editor           | `ChainBuilderEditor`              | Inspector UI + coroutine-driven workflow runner for ChainBuilder (sync versions, fetch Mod.io data, build mods with progress UI).                  |