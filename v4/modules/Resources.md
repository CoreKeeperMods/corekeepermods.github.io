# Resources

?> This documentation is a work in progress.

> Resources is no longer a submodule, but a part of the base ModExtensions.

> The `LoadAsset` method can be used from either the `IMod` interface or `LoadedMod` class.

## Usage Example

```csharp
// GetModInfo in the EarlyInit method
var modInfo = GetModInfo(this);
var clip = modInfo.LoadAsset<AudioClip>("Assets/myamazingmod/Music/myEpicMusic.mp3");
```

Alternatively,

```csharp
this.LoadAsset<AudioClip>("Assets/myamazingmod/Music/myEpicMusic.mp3");
```

If you need an `AssetReference` to pass to some game method, you can do this:

```csharp
var clipRef = "Assets/myamazingmod/Music/myEpicMusic".AsAddress<AudioClip>();
```