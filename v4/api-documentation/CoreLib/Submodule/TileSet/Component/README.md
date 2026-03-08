?> This document is a work in progress.

# `CoreLib.Submodule.TileSet.Component` Namespace

> Authoring components and converters for mod tiles and pseudo-tiles.

## Summary

| Type  | Name                     | Description                                                                                                                                                                                                                                                                                                                                                 |
|-------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Class | `ModTileAuthoring`       | ModTileAuthoring allows the user to define metadata for a specific tile by associating a tileset and tile type. The class is typically used in Unity's authoring workflows to define tile properties for conversion into runtime tile entities.                                                                                                             |
| Class | `ModTileConverter`       | ModTileConverter handles the conversion of ModTileAuthoring components into TileCD components within the ECS world. This allows for the runtime representation of tile entities based on authoring data provided in Unity.                                                                                                                                  |
| Class | `ModPseudoTileAuthoring` | The ModPseudoTileAuthoring class represents an authoring component for specifying tile metadata such as the tileset and tile type that can be converted into runtime components. This class provides a structure for configuring tile-related data to be later used in the Unity entity conversion process for procedural or modifiable tile functionality. |
| Class | `ModPseudoTileConverter` | The ModPseudoTileConverter class is responsible for converting data from a ModPseudoTileAuthoring instance into a PseudoTileCD data structure and adding it as a component. This class extends the SingleAuthoringComponentConverter to handle the conversion of authoring components to runtime data during the Unity entity conversion process.           |
