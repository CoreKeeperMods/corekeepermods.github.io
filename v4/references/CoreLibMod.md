Based on the context attachment, here's the comprehensive documentation for CoreLibMod.cs:

# CoreLibMod Class Documentation

## Namespace
`CoreLib`

---

## Class Declaration
```csharp
public class CoreLibMod : IMod
```


The main entry point and central coordinator for the Core Library mod. Implements the `IMod` interface to provide mod lifecycle management, version compatibility checking, and submodule orchestration.

---

## Class Hierarchy
```
System.Object
  └── CoreLib.CoreLibMod
```


**Implemented Interfaces:**
- `PugMod.IMod`

---

## Description

The `CoreLibMod` class serves as the primary initialization and management layer for the CoreLib framework. It handles:
- Mod initialization and metadata management
- Game version compatibility verification
- Submodule loading and coordination through `SubmoduleHandler`
- Harmony patch application
- Configuration directory management
- Centralized logging

This class is automatically instantiated by the PugMod loader and provides static methods for other mods and submodules to interact with CoreLib functionality.

**Since:** CoreLib 4.0.0

---

## Field Summary

| Modifier and Type                    | Field              | Description                                       |
|--------------------------------------|--------------------|---------------------------------------------------|
| `public const string`                | `ID`               | The unique identifier for CoreLib ("CoreLib")     |
| `public const string`                | `Name`             | The display name for CoreLib ("Core Library")     |
| `public const string`                | `ConfigFolder`     | The configuration folder path ("CoreLib/Config/") |
| `public const string`                | `Version`          | The current CoreLib version ("4.0.0")             |
| `public static readonly GameVersion` | `BuildFor`         | The target game version CoreLib was built for     |
| `internal static LoadedMod`          | `ModInfo`          | Metadata about the loaded CoreLib mod             |
| `internal static readonly Logger`    | `Log`              | Centralized logger instance for CoreLib           |
| `internal static SubmoduleHandler`   | `SubmoduleHandler` | Manages submodule lifecycle and dependencies      |

---

## Constructor Summary

| Constructor           | Description                                     |
|-----------------------|-------------------------------------------------|
| `public CoreLibMod()` | Default constructor called by the PugMod loader |

---

## Method Summary

### IMod Interface Methods

| Modifier and Type | Method                    | Description                                     |
|-------------------|---------------------------|-------------------------------------------------|
| `public void`     | `EarlyInit()`             | Called during early mod initialization phase    |
| `public void`     | `Init()`                  | Called during standard mod initialization phase |
| `public void`     | `Shutdown()`              | Called when the mod is being shut down          |
| `public void`     | `ModObjectLoaded(Object)` | Called when a mod object is loaded              |
| `public void`     | `Update()`                | Called every frame                              |

### Public Static Methods

| Modifier and Type    | Method                         | Description                              |
|----------------------|--------------------------------|------------------------------------------|
| `public static void` | `LoadSubmodule(params Type[])` | Requests loading of specified submodules |

### Internal Static Methods

| Modifier and Type      | Method                           | Description                             |
|------------------------|----------------------------------|-----------------------------------------|
| `internal static void` | `VerifyGameVersion(GameVersion)` | Verifies game version compatibility     |
| `internal static T`    | `GetModuleInstance<T>()`         | Retrieves a specific submodule instance |
| `internal static void` | `Patch(Type)`                    | Applies a Harmony patch                 |

---

## Field Details

### ID
```csharp
public const string ID = "CoreLib"
```

The unique identifier used to reference CoreLib in the mod system. This ID is used for mod registration, dependency resolution, and API calls.

**Value:** `"CoreLib"`

---

### Name
```csharp
public const string Name = "Core Library"
```

The human-readable display name for CoreLib, used in logs and user interfaces.

**Value:** `"Core Library"`

---

### ConfigFolder
```csharp
public const string ConfigFolder = "CoreLib/Config/"
```

The base path for CoreLib configuration files. Submodules typically use this as a prefix for their configuration file paths.

**Value:** `"CoreLib/Config/"`

**Usage:**
```csharp
string configPath = $"{CoreLibMod.ConfigFolder}MyModule.cfg";
```


---

### Version
```csharp
public const string Version = "4.0.0"
```

The current version of CoreLib in semantic versioning format (MAJOR.MINOR.PATCH).

**Value:** `"4.0.0"`

---

### BuildFor
```csharp
public static readonly GameVersion BuildFor = new(1, 1, 2, 0, "7da5")
```

The target game version that this build of CoreLib was compiled against. Used for compatibility checking during initialization.

**Value:** GameVersion(1, 1, 2, 0, "7da5")

---

### ModInfo
```csharp
internal static LoadedMod ModInfo
```

Contains metadata about the loaded CoreLib mod, including mod ID, version, and file paths. Populated during `EarlyInit()`.

**Type:** `PugMod.LoadedMod`

**Access:** Internal - Available to CoreLib submodules

---

### Log
```csharp
internal static readonly Logger Log = new(Name)
```

The centralized logger instance for CoreLib. Provides logging functionality for the main mod class and is separate from `BaseSubmodule.Log`.

**Type:** `CoreLib.Util.Logger`

**Access:** Internal - Available to CoreLib submodules

---

### SubmoduleHandler
```csharp
internal static SubmoduleHandler SubmoduleHandler { get; set; }
```

Manages the lifecycle, dependencies, and loading of all CoreLib submodules. Instantiated during `EarlyInit()`.

**Type:** `CoreLib.SubmoduleHandler`

**Access:** Internal - Available to CoreLib submodules

---

## Method Details

### EarlyInit
```csharp
public void EarlyInit()
```

Called during the early initialization phase of mod loading. This is the first method invoked by the PugMod loader.

**Implementation:**
1. Retrieves and validates mod metadata
2. Extracts current game version from Unity's Application.version
3. Verifies game version compatibility
4. Logs initialization message
5. Instantiates the `SubmoduleHandler`
6. Handles and logs any initialization errors

**Throws:**
- `InvalidOperationException` - If mod metadata cannot be retrieved

**Usage:** Automatically called by PugMod loader; do not call manually.

**Example Output:**
```
[Core Library] Loading Core Library version 4.0.0!
[Core Library] Running under game version "1.1.2.0-7da5".
```


---

### Init
```csharp
public void Init()
```

Called during the standard initialization phase, after `EarlyInit()` completes for all mods.

**Default Implementation:** Empty method body (no operation).

**Usage:** Automatically called by PugMod loader; do not call manually.

---

### Shutdown
```csharp
public void Shutdown()
```

Called when the mod is being shut down or unloaded.

**Default Implementation:** Empty method body (no operation).

**Usage:** Automatically called by PugMod loader; do not call manually.

---

### ModObjectLoaded
```csharp
public void ModObjectLoaded(Object obj)
```

Called when a Unity object associated with the mod is loaded.

**Parameters:**
- `obj` - The Unity Object that was loaded

**Default Implementation:** Empty method body (no operation).

**Usage:** Automatically called by PugMod loader; do not call manually.

---

### Update
```csharp
public void Update()
```

Called every frame by the PugMod system.

**Default Implementation:** Empty method body (no operation).

**Usage:** Automatically called by PugMod loader; do not call manually.

---

### LoadSubmodule
```csharp
public static void LoadSubmodule(params Type[] moduleTypes)
```

Requests loading of one or more submodules. Filters out null types and delegates to the `SubmoduleHandler` for actual loading.

**Parameters:**
- `moduleTypes` - Array of submodule types to load

**Type Constraints:**
- Each type must inherit from `BaseSubmodule`

**Behavior:**
- Null types are automatically filtered out
- Null array is handled gracefully
- Submodules are loaded in the order provided
- Dependencies are resolved automatically by `SubmoduleHandler`

**Example:**
```csharp
CoreLibMod.LoadSubmodule(
    typeof(EntityModule),
    typeof(LocalizationModule),
    typeof(TileSetModule)
);
```


**Example (Single Module):**
```csharp
CoreLibMod.LoadSubmodule(typeof(AudioModule));
```


---

### VerifyGameVersion
```csharp
internal static void VerifyGameVersion(GameVersion buildId)
```

Verifies that CoreLib is compatible with the current game version and logs appropriate messages.

**Parameters:**
- `buildId` - The current game version

**Behavior:**
- Logs the current game version
- Returns immediately if version is `GameVersion.Zero` (development build)
- Checks compatibility using `BuildFor.CompatibleWith(buildId)`
- Logs warning if versions are incompatible but allows execution to continue

**Log Output Examples:**
```
[Core Library] Running under game version "1.1.2.0-7da5".
```


**Warning Output:**
```
[Core Library] CoreLib built for 1.1.2.0-7da5, running on 1.1.3.0-8ab2
```


**Access:** Internal - Called during `EarlyInit()`

---

### GetModuleInstance
```csharp
internal static T GetModuleInstance<T>() where T : BaseSubmodule
```

Retrieves a specific submodule instance by type.

**Type Parameters:**
- `T` - The type of submodule to retrieve, must inherit from `BaseSubmodule`

**Returns:** The submodule instance of type `T`, or `null` if not found or not loaded.

**Access:** Internal - Used by submodules to get singleton instances

**Example:**
```csharp
LocalizationModule instance = CoreLibMod.GetModuleInstance<LocalizationModule>();
```


**Usage Pattern (in submodules):**
```csharp
internal static LocalizationModule Instance => 
    CoreLibMod.GetModuleInstance<LocalizationModule>();
```


---

### Patch
```csharp
internal static void Patch(Type type)
```

Applies a Harmony patch to the game using CoreLib's mod ID.

**Parameters:**
- `type` - The type containing Harmony patch methods (annotated with `[HarmonyPatch]`)

**Behavior:**
- Delegates to PugMod's `ApplyHarmonyPatch` with CoreLib's mod ID
- Automatically handles patch registration and conflict resolution

**Access:** Internal - Used by submodules during `SetHooks()`

**Example:**
```csharp
internal override void SetHooks()
{
    CoreLibMod.Patch(typeof(MyModulePatch));
    CoreLibMod.Patch(typeof(AnotherPatch));
}
```


**Requirements:**
- Patch class must have proper `[HarmonyPatch]` attributes
- Must be called during submodule initialization (typically in `SetHooks()`)

---

## Usage Examples

### Basic Mod Integration
```csharp
using CoreLib;
using PugMod;

public class MyMod : IMod
{
    public void EarlyInit()
    {
        // Load required CoreLib modules
        CoreLibMod.LoadSubmodule(
            typeof(LocalizationModule),
            typeof(EntityModule)
        );
    }
    
    public void Init()
    {
        // Use CoreLib functionality
        LocalizationModule.AddTerm("MyMod/Item", "My Item", "我的物品");
    }
}
```


### Accessing CoreLib Information
```csharp
// Check CoreLib version
string version = CoreLibMod.Version; // "4.0.0"

// Get CoreLib mod info
LoadedMod info = CoreLibMod.ModInfo;
string modId = info.ModId;

// Use CoreLib logger
CoreLibMod.Log.LogInfo("Using CoreLib features");
```


### Conditional Module Loading
```csharp
public void EarlyInit()
{
    List<Type> modulesToLoad = new List<Type>();
    
    // Always load these
    modulesToLoad.Add(typeof(EntityModule));
    
    // Conditional loading
    if (needsLocalization)
    {
        modulesToLoad.Add(typeof(LocalizationModule));
    }
    
    if (hasCustomTiles)
    {
        modulesToLoad.Add(typeof(TileSetModule));
    }
    
    CoreLibMod.LoadSubmodule(modulesToLoad.ToArray());
}
```


---

## Initialization Flow

The typical initialization sequence for CoreLibMod:

1. **Mod Loader Phase**
	- PugMod instantiates `CoreLibMod`
	- Discovers CoreLib in mod directory

2. **EarlyInit() Phase**
	- Retrieves mod metadata (`ModInfo`)
	- Gets current game version
	- Verifies compatibility (`VerifyGameVersion`)
	- Creates `SubmoduleHandler`
	- Logs initialization status

3. **Submodule Discovery**
	- `SubmoduleHandler` scans for submodule types
	- Registers all discovered submodules

4. **Init() Phase**
	- Standard initialization (currently unused)

5. **On-Demand Loading**
	- Mods call `LoadSubmodule()` to load specific modules
	- Dependencies are resolved automatically
	- Submodule lifecycle executed (`SetHooks`, `Load`, `PostLoad`)

---

## Error Handling

### Initialization Errors
All exceptions during `EarlyInit()` are caught and logged:
```csharp
catch (Exception ex)
{
    Log.LogError($"CoreLib initialization failed: {ex.Message}\n{ex.StackTrace}");
}
```


### Version Compatibility
Incompatible versions log warnings but don't prevent execution:
```
[Core Library] CoreLib built for 1.1.2.0-7da5, running on 1.1.3.0-8ab2
```


### Null Safety
The `LoadSubmodule` method handles null gracefully:
```csharp
LoadSubmodule(null); // Safe - no exception thrown
LoadSubmodule(typeof(MyModule), null, typeof(OtherModule)); // Nulls filtered out
```


---

## Thread Safety

The `CoreLibMod` class is **not thread-safe**. All operations should be performed on the main Unity thread.

---

## Configuration Management

CoreLib uses a standardized configuration folder structure:

**Base Path:** `CoreLib/Config/`

**Example Paths:**
- `CoreLib/Config/CoreLib.TilesetID.cfg`
- `CoreLib/Config/CoreLib.EntityID.cfg`
- `CoreLib/Config/MyModule.cfg`

**Usage:**
```csharp
string configPath = $"{CoreLibMod.ConfigFolder}MySettings.cfg";
ConfigFile config = new ConfigFile(configPath, true, CoreLibMod.ModInfo);
```


---

## Best Practices

### 1. Load Modules Early
```csharp
public void EarlyInit()
{
    // Load during EarlyInit, not Init
    CoreLibMod.LoadSubmodule(typeof(EntityModule));
}
```


### 2. Check Module Availability
```csharp
var module = CoreLibMod.GetModuleInstance<LocalizationModule>();
if (module != null && module.Loaded)
{
    // Use module
}
```


### 3. Handle Dependencies
```csharp
// Let CoreLib handle dependencies automatically
CoreLibMod.LoadSubmodule(typeof(TileSetModule)); 
// EntityModule automatically loaded as dependency
```


### 4. Use Configuration Folder
```csharp
// Always use CoreLibMod.ConfigFolder for consistency
string path = $"{CoreLibMod.ConfigFolder}MyMod.cfg";
```


---

## See Also
- `BaseSubmodule` - Base class for all submodules
- `SubmoduleHandler` - Manages submodule lifecycle
- `GameVersion` - Version comparison and compatibility
- `Logger` - Logging functionality
- `IMod` - PugMod mod interface
- `LocalizationModule` - Example submodule usage
- `EntityModule` - Example submodule with dependencies

---

## Version History
- **4.0.0** - Current version with refactored error handling and improved submodule management