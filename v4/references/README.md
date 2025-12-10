# Reference Documentation

!> **Note:** This documentation is a work in progress.
> - If you have any questions or suggestions regarding this documentation,
> please feel free to open an issue on our GitHub repository:
> [https://github.com/corekeepermods/github.io/issues](https://github.com/corekeepermods/CoreLib//issues).
> - For more detailed information on each class, method, and property,
> refer to the individual reference pages linked below.

## Namespace: `CoreLib`

### Description
The root namespace containing the main mod entry point and core functionality.

### Class Summary

| Class                                          | Description                                                                                                                                                                                          |
|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`CoreLibMod`](references/CoreLibMod.md)       | Entry point implementing `IMod` interface. Manages mod lifecycle, version checking, and module loading. Provides static methods `LoadModule(Type)` and `LoadModules(Type[])` for loading submodules. |
| [`BaseSubmodule`](references/BaseSubmodule.md) | Abstract base class for all CoreLib modules. Defines module lifecycle methods and dependency management.                                                                                             |
| `SubmoduleHandler`                             | Manages module loading, initialization order, and dependency resolution between modules.                                                                                                             |
| `GameVersion`                                  | Represents and compares game version numbers for compatibility checking.                                                                                                                             |

---

## Namespace: `CoreLib.Util`

### Description
General utility classes and helpers.

### Class Summary

| Class                      | Description                                                                              |
|----------------------------|------------------------------------------------------------------------------------------|
| `GameManagers`             | Provides static access to game manager singleton instances.                              |
| `Logger`                   | Logging functionality for mods with level filtering and formatted output.                |
| `Players`                  | Utilities for player entity management, queries, and operations.                         |
| `State`                    | Game state management utilities for tracking and responding to game mode changes.        |
| `CollectionUtils`          | Extension methods for collection operations including LINQ-style queries.                |
| `GeneralExtensions`        | General-purpose extension methods for common types and operations.                       |
| `ModExtensions`            | Mod-specific extension methods for CoreLib and PugMod integration.                       |
| `ObjectDataExtensions`     | Extension methods for game object data manipulation and queries.                         |
| `ReflectionUtil`           | Utilities for reflection operations including private member access and type inspection. |
| `TopologicalSortExtension` | Extension methods for topological sorting used in dependency resolution.                 |

---

## Namespace: `CoreLib.Util.Data`

### Description
Configuration file system based on BepInEx ConfigFile for mod settings management.

### Class Summary

| Class                     | Description                                                                                 |
|---------------------------|---------------------------------------------------------------------------------------------|
| `ConfigFile`              | Main configuration file manager for reading, writing, and managing TOML-based config files. |
| `ConfigEntryBase`         | Base class for configuration entries with type-agnostic operations.                         |
| `ConfigDefinition`        | Defines configuration entry metadata including section and key.                             |
| `ConfigDescription`       | Contains configuration entry description, acceptable values, and additional metadata.       |
| `ConfigScope`             | Enumeration defining configuration visibility scope (global, per-save, etc.).               |
| `AcceptableValueBase`     | Abstract base class for validating configuration values.                                    |
| `AcceptableValueList`     | Validates configuration values against a predefined list of acceptable options.             |
| `AcceptableValueRange`    | Validates configuration values within a specified numeric range.                            |
| `TomlTypeConverter`       | Handles conversion between C# types and TOML file format.                                   |
| `TypeConverter`           | Generic type converter for configuration value serialization.                               |
| `SettingChangedEventArgs` | Event arguments passed when configuration settings are modified.                            |
| `IdBind`                  | Binds game object identifiers to configuration entries for dynamic ID assignment.           |
| `IdBindConfigFile`        | Specialized configuration file for managing ID bindings and allocation.                     |

---

## Namespace: `CoreLib.Submodule.Audio`

### Description
Provides audio management capabilities including custom music and sound effects.


### Class Summary

| Class         | Description                                                                                                              |
|---------------|--------------------------------------------------------------------------------------------------------------------------|
| `AudioModule` | Main module handling audio asset registration and management. Manages custom music rosters and audio effect integration. |
| `MusicInfo`   | Contains music track metadata and playback settings.                                                                     |

### Interface Summary

| Interface | Description                                      |
|-----------|--------------------------------------------------|
| `IEffect` | Interface for implementing custom audio effects. |

---

## Namespace: `CoreLib.Submodule.Command`

### Description
Implements a command system for client and server-side commands with RPC support.

### Class Summary

| Class                         | Description                                                                |
|-------------------------------|----------------------------------------------------------------------------|
| `CommandModule`               | Manages command registration and execution for both client and server.     |
| `CommandMessageRPC`           | RPC message structure for transmitting commands between client and server. |
| `CommandModuleSettings`       | Configuration settings for the command module.                             |
| `CommandOutput`               | Represents the results and output of command execution.                    |
| `CommandPair`                 | Pairs commands with their corresponding handlers.                          |
| `DirectMessageCommandHandler` | Handles direct message commands sent between players.                      |
| `HelpCommandHandler`          | Implements help command functionality to display available commands.       |
| `ConditionIDParser`           | Parses condition identifiers from command arguments.                       |
| `ObjectIDParser`              | Parses object identifiers from command arguments.                          |
| `SkillIDParser`               | Parses skill identifiers from command arguments.                           |
| `CommandCommSystem`           | ECS system for command communication and processing.                       |
| `LoadItemDictSystem`          | Loads item dictionaries for use in command parsing and execution.          |
| `CommandUtil`                 | Helper utilities for command processing and validation.                    |

### Interface Summary

| Interface               | Description                                                                                        |
|-------------------------|----------------------------------------------------------------------------------------------------|
| `IClientCommandHandler` | Interface for implementing client-side command handlers. Processes commands locally on the client. |
| `IServerCommandHandler` | Interface for implementing server-side command handlers. Processes commands with server authority. |
| `ICommandInfo`          | Provides metadata about commands including name, description, and usage information.               |

---

## Namespace: `CoreLib.Submodule.Entity`

### Description
Handles entity modifications, prefab management, and custom crafting systems.

### Class Summary

| Class                  | Description                                                                      |
|------------------------|----------------------------------------------------------------------------------|
| `EntityModule`         | Manages entity registration, prefab modifications, and entity lifecycle.         |
| `CraftingData`         | Defines crafting recipes, requirements, and output items.                        |
| `WorkbenchDefinition`  | Defines custom workbench properties, behavior, and available recipes.            |
| `PrefabCrawler`        | Utility for traversing and modifying Unity prefab hierarchies.                   |
| `MonoBehaviourUtils`   | Helper utilities for MonoBehaviour component operations.                         |
| `EntityPrefabOverride` | Component for overriding entity prefab properties at runtime.                    |
| `ModCDAuthoringBase`   | Base class for mod component data authoring in Unity's DOTS conversion pipeline. |
| `ModCraftingAuthoring` | Authoring component for defining custom crafting behavior on entities.           |
| `ModWorkbenchBuilding` | Component defining custom workbench building properties and functionality.       |
| `PoolSettings`         | Configuration for object pooling to optimize entity instantiation.               |
| `PugTextStyle`         | Defines text styling options for in-game UI elements.                            |
| `RuntimeMaterial`      | Manages material properties that can be modified at runtime.                     |
| `SupportsPooling`      | Marker component indicating an entity supports object pooling.                   |
| `TemplateObject`       | Template definition for creating new entity instances.                           |

### Interface Summary

| Interface             | Description                                                        |
|-----------------------|--------------------------------------------------------------------|
| `IDynamicItemHandler` | Handles dynamic item behavior for items with custom runtime logic. |

### Annotation Types Summary

| Annotation Type               | Description                                                             |
|-------------------------------|-------------------------------------------------------------------------|
| `EntityModificationAttribute` | Marks methods that modify entity definitions during initialization.     |
| `PrefabModificationAttribute` | Marks methods that modify Unity prefabs during the mod loading process. |

---

## Namespace: `CoreLib.Submodule.EquipmentSlot`

### Description
Provides custom equipment slot functionality and placement logic.

### Class Summary

| Class                      | Description                                                                   |
|----------------------------|-------------------------------------------------------------------------------|
| `EquipmentSlotModule`      | Manages registration and lifecycle of custom equipment slots.                 |
| `SlotInfo`                 | Contains information about equipment slot properties, types, and constraints. |
| `ModObjectTypeAuthoring`   | Authoring component for defining custom object types in the equipment system. |
| `ModEquipmentChangeSystem` | ECS system that processes equipment slot changes and updates.                 |
| `ModEquipmentSystem`       | Main ECS system for managing equipment state and interactions.                |

### Interface Summary

| Interface           | Description                                                                                                                                                                                                                     |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `IEquipmentLogic`   | Defines equipment behavior logic including usage conditions and state updates. Provides methods for `CreateLookups(ref SystemState)` and `Update(...)` along with properties like `CanUseWhileSitting` and `CanUseWhileOnBoat`. |
| `IModEquipmentSlot` | Interface for implementing custom equipment slot types with specific behavior.                                                                                                                                                  |
| `IPlacementLogic`   | Defines object placement validation logic. Implements `CanPlaceObjectAtPosition(...)` to determine if an object can be placed at specified coordinates based on game rules and environmental constraints.                       |

---

## Namespace: `CoreLib.Submodule.Localization`

### Description
Provides localization support for multi-language text.

### Class Summary

| Class                   | Description                                                                            |
|-------------------------|----------------------------------------------------------------------------------------|
| `LocalizationModule`    | Manages localization resources and language switching.                                 |
| `LocalizationExtension` | Extension methods for localization operations including text retrieval and formatting. |

---

## Namespace: `CoreLib.Submodule.LootDrop`

### Description
Enables modification and creation of custom loot tables.

### Class Summary

| Class                            | Description                                                                   |
|----------------------------------|-------------------------------------------------------------------------------|
| `LootDropModule`                 | Manages registration and modification of loot tables.                         |
| `CustomLootTableData`            | Defines structure for custom loot tables including drop rates and item pools. |
| `DropTableModificationData`      | Data structure for modifying existing loot drop tables.                       |
| `ModDropsFromLootTableAuthoring` | Authoring component for entities that drop items from custom loot tables.     |

---

## Namespace: `CoreLib.Submodule.Resource`

### Description
Manages resource loading through Unity's Addressables system.

### Class Summary

| Class                 | Description                                                                        |
|-----------------------|------------------------------------------------------------------------------------|
| `ResourceModule`      | Handles registration and loading of mod resources through the Addressables system. |
| `ModResourceLocator`  | Locates mod resources within the Unity Addressables asset management system.       |
| `ModResourceProvider` | Provides mod resources to the Addressables system for loading and management.      |
| `ResourcesExtension`  | Extension methods for resource loading, unloading, and management operations.      |
| `TextureUtil`         | Utilities for texture operations including loading, conversion, and manipulation.  |

---

## Namespace: `CoreLib.Submodule.RewiredExtension`

### Description
Extends Rewired input system with custom keybinding support.

### Class Summary

| Class                    | Description                                                                                    |
|--------------------------|------------------------------------------------------------------------------------------------|
| `RewiredExtensionModule` | Manages registration and lifecycle of custom input bindings.                                   |
| `KeyBindData`            | Data structure containing keybinding information including action mappings and input contexts. |
| `RewiredExtensions`      | Extension methods for Rewired input system functionality and keybinding operations.            |

---

## Namespace: `CoreLib.Submodule.Tileset`

### Description
Provides custom tileset creation and management.

### Class Summary

| Class                    | Description                                                                              |
|--------------------------|------------------------------------------------------------------------------------------|
| `TileSetModule`          | Manages registration and lifecycle of custom tilesets.                                   |
| `ModTileset`             | ScriptableObject defining custom tileset properties, tile mappings, and visual data.     |
| `ModPseudoTileAuthoring` | Authoring component for pseudo-tiles that simulate tile behavior without full tile data. |
| `ModTileAuthoring`       | Authoring component for defining custom tile properties and conversion to ECS.           |

### Annotation Types Summary

| Annotation Type       | Description                                                             |
|-----------------------|-------------------------------------------------------------------------|
| `ModTilesetAttribute` | Marks classes as custom tileset definitions for automatic registration. |

---

## Namespace: `CoreLib.Submodule.UserInterface`

### Description
Provides custom UI creation and management capabilities.

### Class Summary

| Class                   | Description                                                                        |
|-------------------------|------------------------------------------------------------------------------------|
| `UserInterfaceModule`   | Manages registration and lifecycle of custom UI elements.                          |
| `LinkToPlayerInventory` | Component that links UI elements to player inventory for automatic updates.        |
| `ModUIAuthoring`        | Authoring component for defining custom UI behavior and properties.                |
| `PixelSnap`             | Component ensuring pixel-perfect alignment of UI elements.                         |
| `ModUIExtensions`       | Extension methods for UI operations including creation, styling, and manipulation. |

### Interface Summary

| Interface | Description                                                                     |
|-----------|---------------------------------------------------------------------------------|
| `IModUI`  | Interface for implementing custom UI windows and panels with lifecycle methods. |