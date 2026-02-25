# Tileset Submodule

?> This documentation is a work in progress.

> The Tileset Submodule contains features to add/modify tilesets more easily.

## Usage Example
Make sure to call `CoreLibMod.LoadSubmodule(typeof(TileSetModule));` to in your mod `EarlyInit()` function, before using the module. This will load the submodule.

In your mod folder create Tileset asset, using `CoreLib/New ModTileset` create menu. Specify all tileset properties as desired. You can use placeholder layer objects provided with the submodule. They will be replaced at runtime.

Now in your mod `ModObjectLoaded(Object obj)` method write:
```cs
if (obj is ModTileset tileset)
{
    TileSetModule.AddCustomTileset(tileset);
    return;
}
```

In your tile items use `ModTileCDAuthoring` authoring component, instead of `TileAuthoring`. You will be able to select your mod tileset there.