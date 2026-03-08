# `BaseSubmodule` Class

?> This document is a work in progress.

## Namespace
`CoreLib`

---

## Class Declaration
```csharp
public abstract class BaseSubmodule
```


Base abstract class for all CoreLib submodules. Provides core functionality for module lifecycle management, dependency handling, and load state validation.

---

## Class Hierarchy
```
System.Object
  └── CoreLib.BaseSubmodule
```


**Direct Known Subclasses:**
- `EntityModule`
- `TileSetModule`
- `LocalizationModule`
- `UserInterfaceModule`
- `EquipmentSlotModule`
- `RewiredExtensionModule`
- `LootDropModule`

---

## Description

The `BaseSubmodule` class serves as the foundation for all modular components within the CoreLib framework. It implements a standardized lifecycle pattern with hooks for initialization, loading, and cleanup. Submodules can declare dependencies on other submodules, ensuring proper load order and availability of required functionality.

This class provides:
- Lifecycle management through virtual methods
- Dependency declaration and optional dependency support
- Load state tracking and validation
- Version, build, and identification information
- Logging capabilities through a shared logger instance

**Since:** CoreLib 4.0.0

---

## Field Summary

| Modifier and Type                     | Field                    | Description                                              |
|---------------------------------------|--------------------------|----------------------------------------------------------|
| `private const string`                | `DefaultID`              | Default identifier for the CoreLib module ("CoreLib")    |
| `private const string`                | `DefaultName`            | Default display name for the CoreLib module ("Core Lib") |
| `private const string`                | `DefaultVersion`         | Default version string for CoreLib ("4.0.0")             |
| `private static readonly GameVersion` | `DefaultBuild`           | Default game build version information (1.1.2.0 "7da5")  |
| `private const string`                | `NotLoadedMessageFormat` | Format string for the "not loaded" error message         |

---

## Property Summary

| Modifier and Type              | Property       | Description                                                     |
|--------------------------------|----------------|-----------------------------------------------------------------|
| `public bool`                  | `Loaded`       | Gets or sets whether the submodule has been successfully loaded |
| `internal static Logger`       | `Log`          | Gets the shared logger instance for all submodules              |
| `internal virtual GameVersion` | `Build`        | Gets the game build version this submodule was compiled against |
| `internal virtual string`      | `ID`           | Gets the unique identifier for this submodule                   |
| `internal virtual string`      | `Name`         | Gets the display name for this submodule                        |
| `internal virtual string`      | `Version`      | Gets the version string for this submodule                      |
| `internal virtual Type[]`      | `Dependencies` | Gets the array of required dependency types for this submodule  |

---

## Constructor Summary

| Constructor                 | Description                                           |
|-----------------------------|-------------------------------------------------------|
| `protected BaseSubmodule()` | Initializes a new instance of the BaseSubmodule class |

---

## Method Summary

| Modifier and Type         | Method                      | Description                                                           |
|---------------------------|-----------------------------|-----------------------------------------------------------------------|
| `internal void`           | `ThrowIfNotLoaded()`        | Validates that the submodule is loaded and throws an exception if not |
| `internal virtual void`   | `SetHooks()`                | Called to set up any required hooks or patches for the submodule      |
| `internal virtual void`   | `Load()`                    | Called to perform the main loading logic for the submodule            |
| `internal virtual void`   | `PostLoad()`                | Called after all loading is complete for final initialization         |
| `internal virtual void`   | `Unload()`                  | Called to clean up resources when the submodule is being unloaded     |
| `internal virtual void`   | `UnsetHooks()`              | Called to remove any hooks or patches set up by the submodule         |
| `internal virtual bool`   | `LoadCheck()`               | Performs a pre-load validation check                                  |
| `internal virtual Type[]` | `GetOptionalDependencies()` | Returns an array of optional dependency types                         |

---

## Field Details

### DefaultID
```csharp
private const string DefaultID = "CoreLib"
```

Default identifier used when a submodule doesn't override the `ID` property. This serves as the base module identifier for the CoreLib framework.

---

### DefaultName
```csharp
private const string DefaultName = "Core Lib"
```

Default display name used when a submodule doesn't override the `Name` property. This is the human-readable name shown in logs and UI.

---

### DefaultVersion
```csharp
private const string DefaultVersion = "4.0.0"
```

Default version string for the CoreLib framework. Represents the current major.minor.patch version.

---

### DefaultBuild
```csharp
private static readonly GameVersion DefaultBuild = new(1, 1, 2, 0, "7da5")
```

Default game build version information used for compatibility checking. Represents the target game version that CoreLib was built against.

---

### NotLoadedMessageFormat
```csharp
private const string NotLoadedMessageFormat = "{0} is not loaded. Please use `CoreLibMod.LoadSubmodule(typeof({0}))` to load the module!"
```

Format string template for generating error messages when attempting to use an unloaded submodule. The placeholder `{0}` is replaced with the submodule's class name.

---

## Property Details

### Loaded
```csharp
public bool Loaded { get; internal set; }
```

Indicates whether this submodule has been successfully loaded and initialized. This property is set internally by the `SubmoduleHandler` during the loading process.

**Returns:** `true` if the submodule is loaded; otherwise, `false`.

**Access:**
- **Get:** Public - Can be checked by any code
- **Set:** Internal - Only set by CoreLib infrastructure

---

### Log
```csharp
internal static Logger Log { get; } = new(DefaultName)
```

Provides access to the shared logger instance used by all submodules for logging messages, warnings, and errors. The logger is initialized with the DefaultName.

**Returns:** The shared `Logger` instance.

**Usage:** Use this for logging from within BaseSubmodule or when a submodule doesn't define its own logger.

---

### Build
```csharp
internal virtual GameVersion Build => DefaultBuild
```

Gets the game build version that this submodule was compiled against. Override this property in derived classes to specify a different build version for compatibility checking.

**Returns:** The `GameVersion` this submodule targets.

**Default Value:** Returns `DefaultBuild` (1.1.2.0 "7da5")

---

### ID
```csharp
internal virtual string ID => DefaultID
```

Gets the unique identifier for this submodule. Override this property in derived classes to provide a custom identifier that distinguishes the submodule.

**Returns:** The submodule identifier string.

**Default Value:** Returns `DefaultID` ("CoreLib")

**Example:**
```csharp
public new const string ID = "CoreLibLocalization";
internal override string ID => ID;
```


---

### Name
```csharp
internal virtual string Name => DefaultName
```

Gets the human-readable display name for this submodule. Override this property in derived classes to provide a custom name for logging and display purposes.

**Returns:** The submodule display name.

**Default Value:** Returns `DefaultName` ("Core Lib")

**Example:**
```csharp
public new const string Name = "Core Lib Localization";
internal override string Name => Name;
```


---

### Version
```csharp
internal virtual string Version => DefaultVersion
```

Gets the version string for this submodule. Override this property in derived classes to specify the submodule version independently from CoreLib's version.

**Returns:** The version string in semantic versioning format.

**Default Value:** Returns `DefaultVersion` ("4.0.0")

---

### Dependencies
```csharp
internal virtual Type[] Dependencies => Type.EmptyTypes
```

Gets the array of required dependency types that must be loaded before this submodule. The `SubmoduleHandler` ensures all dependencies are loaded in the correct order.

**Returns:** An array of `Type` objects representing required dependencies. Returns an empty array if no dependencies are required.

**Default Value:** Returns `Type.EmptyTypes` (no dependencies)

**Example:**
```csharp
internal override Type[] Dependencies => new[] { typeof(EntityModule), typeof(ResourceModule) };
```


---

## Method Details

### ThrowIfNotLoaded
```csharp
internal void ThrowIfNotLoaded()
```

Validates that the submodule has been loaded. If the submodule is not loaded, throws an `InvalidOperationException` with a formatted message that includes the module name and instructions on how to properly load it.

**Throws:**
- `InvalidOperationException` - If the submodule is not loaded (when `Loaded` is `false`).

**Implementation Details:**
- Returns immediately if `Loaded` is `true`
- Retrieves the submodule's type name via reflection
- Formats the error message using `NotLoadedMessageFormat`
- Throws exception with detailed instructions

**Usage:**
This method should be called at the beginning of any public API method to ensure the submodule is properly initialized before use.

**Example:**
```csharp
public static void AddCustomEntity(EntityData data)
{
    Instance.ThrowIfNotLoaded();
    // ... rest of implementation
}
```


---

### SetHooks
```csharp
internal virtual void SetHooks()
```

Called during the loading process to set up any required Harmony patches, event handlers, or other hooks. Override this method in derived classes to implement module-specific hooks.

**Default Implementation:** Empty method body (no operation).

**Call Order:** Called by `SubmoduleHandler` before `Load()`.

**Example:**
```csharp
internal override void SetHooks()
{
    CoreLibMod.Patch(typeof(MyModulePatch));
    EntityModule.MaterialSwapReady += OnMaterialSwapReady;
}
```


---

### Load
```csharp
internal virtual void Load()
```

Called to perform the main loading and initialization logic for the submodule. Override this method to implement module-specific loading behavior such as loading assets, initializing data structures, or registering handlers.

**Default Implementation:** Empty method body (no operation).

**Call Order:** Called by `SubmoduleHandler` after `SetHooks()` and after all dependencies are loaded.

**Example:**
```csharp
internal override void Load()
{
    ResourceModule.RefreshModuleBundles();
    InitializeDataStructures();
    Log.LogInfo($"Loaded {Name} successfully");
}
```


---

### PostLoad
```csharp
internal virtual void PostLoad()
```

Called after the main `Load()` method completes successfully and `Loaded` is set to `true`. Use this for any final initialization that requires the module to be fully loaded, such as cross-module interactions or final configuration.

**Default Implementation:** Empty method body (no operation).

**Call Order:** Called by `SubmoduleHandler` after `Load()` and after `Loaded` is set to `true`.

**Example:**
```csharp
internal override void PostLoad()
{
    // Interact with other modules that are now loaded
    EntityModule.Instance.RegisterCustomBehavior();
}
```


---

### Unload
```csharp
internal virtual void Unload()
```

Called when the submodule is being unloaded. Override this method to perform cleanup operations such as releasing resources, unsubscribing from events, or disposing of objects.

**Default Implementation:** Empty method body (no operation).

**Call Order:** Called during module shutdown or reload.

**Example:**
```csharp
internal override void Unload()
{
    CleanupResources();
    UnsubscribeFromEvents();
    CustomData.Clear();
}
```


---

### UnsetHooks
```csharp
internal virtual void UnsetHooks()
```

Called to remove any hooks, patches, or event handlers set up by the `SetHooks()` method. Override this to implement proper cleanup of module-specific hooks.

**Default Implementation:** Empty method body (no operation).

**Call Order:** Called during module shutdown, typically after `Unload()`.

**Example:**
```csharp
internal override void UnsetHooks()
{
    // Unpatch Harmony patches if needed
    EntityModule.MaterialSwapReady -= OnMaterialSwapReady;
}
```


---

### LoadCheck
```csharp
internal virtual bool LoadCheck()
```

Performs a preload validation check to determine if the submodule can be loaded successfully. Override this method to implement custom validation logic, such as checking for required files or dependencies.

**Returns:** `true` if the submodule can be loaded; otherwise, `false`.

**Default Implementation:** Always returns `true`.

**Call Order:** Called by `SubmoduleHandler` before attempting to load the module.

**Example:**
```csharp
internal override bool LoadCheck()
{
    if (!System.IO.File.Exists(RequiredConfigFile))
    {
        Log.LogError($"Required config file not found: {RequiredConfigFile}");
        return false;
    }
    return true;
}
```


---

### GetOptionalDependencies
```csharp
internal virtual Type[] GetOptionalDependencies()
```

Returns an array of optional dependency types. Unlike required dependencies (from the `Dependencies` property), failure to load optional dependencies will not prevent this submodule from loading.

**Returns:** An array of `Type` objects representing optional dependencies. Returns an empty array if no optional dependencies exist.

**Default Implementation:** Returns `Type.EmptyTypes`.

**Usage:** Optional dependencies are loaded if available but won't cause load failure if unavailable. Useful for integration with modules that may or may not be present.

**Example:**
```csharp
internal override Type[] GetOptionalDependencies()
{
    return new[] { typeof(OptionalFeatureModule) };
}
```


---

## Usage Example

```csharp
namespace CoreLib.Submodule.MyFeature
{
    public class MyFeatureModule : BaseSubmodule
    {
        #region Public Interface
        
        public new const string ID = "CoreLibMyFeature";
        public new const string Name = "Core Lib My Feature";
        public new const string Version = "1.0.0";
        
        internal static MyFeatureModule Instance => 
            CoreLibMod.GetModuleInstance<MyFeatureModule>();
        
        public static void AddFeatureData(string data)
        {
            Instance.ThrowIfNotLoaded();
            // Process feature data
            CustomData.Add(data);
            Log.LogInfo($"Added feature data: {data}");
        }
        
        #endregion
        
        #region Private Implementation
        
        internal override string ID => ID;
        internal override string Name => Name;
        internal override string Version => Version;
        
        internal override Type[] Dependencies => 
            new[] { typeof(EntityModule) };
        
        internal override void SetHooks()
        {
            CoreLibMod.Patch(typeof(MyFeaturePatch));
        }
        
        internal override void Load()
        {
            Log.LogInfo($"Loading {Name}");
            InitializeFeature();
        }
        
        internal override bool LoadCheck()
        {
            // Validate prerequisites
            return CheckRequirements();
        }
        
        private static List<string> CustomData = new List<string>();
        
        private void InitializeFeature()
        {
            // Implementation
        }
        
        private bool CheckRequirements()
        {
            // Validation logic
            return true;
        }
        
        #endregion
    }
}
```


---

## Lifecycle Flow

The typical lifecycle of a `BaseSubmodule` follows this sequence:

1. **Construction** - Module instance created by `SubmoduleHandler`
2. **LoadCheck()** - Pre-load validation (optional)
3. **SetHooks()** - Harmony patches and event handlers set up
4. **Load()** - Main initialization logic executed
5. **Loaded = true** - Load state set by `SubmoduleHandler`
6. **PostLoad()** - Final initialization after load complete
7. *(module active and usable)*
8. **Unload()** - Cleanup when shutting down
9. **UnsetHooks()** - Remove patches and handlers

---

## Thread Safety

The `BaseSubmodule` class is **not thread-safe**. All module operations should be performed on the main Unity thread.

---

## See Also
- `SubmoduleHandler` - Manages submodule lifecycle and dependencies
- `CoreLibMod` - Main mod class for CoreLib
- `GameVersion` - Represents game version information
- `Logger` - Logging utility class
- `LocalizationModule` - Example submodule implementation
- `TileSetModule` - Example submodule with dependencies
- `LootDropModule` - Example submodule with custom data management

---

## Version History
- **4.0.0** - Initial documentation with refactored error message handling