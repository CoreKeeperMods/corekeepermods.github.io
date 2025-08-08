# Gradient Maps Not Working

> Gradient Maps are an important part of modding if you want to color multiple object variants with the same Asset Skin, but different colorations.

<!-- tabs:start -->

<!-- tab:Bug -->

> Line 27 of `SpriteInstancingModBuilder.cs` is where the [bug](https://github.com/Pugstorm/CoreKeeperModSDK/blob/main/Assets/ModSDK/SDK/Editor/SpriteInstancingModBuilder.cs#L27) is located.
```cs
if (asset is Texture2D texture2D && path.StartsWith("gm_"))
```

<!-- tab:Fix -->

> Overwrite line 27 with this code.

```cs
if (asset is Texture2D texture2D && texture2D.name.StartsWith("gm_"))
```
<!-- tabs:end -->
