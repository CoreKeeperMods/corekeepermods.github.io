?> This document is a work in progress.

# `CoreLib.Submodule.LootDrop.Component` Namespace

> Authoring components for loot table integration.

## Summary

| Type  | Name                                      | Description                                                                                                                                                                                                                                                                                                                                                                             |
|-------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Class | `ModDropsFromLootTableAuthoring`          | The ModDropsFromLootTableAuthoring class is a MonoBehaviour representing an authoring component that links a game object to a specific loot table ID.                                                                                                                                                                                                                                   |
| Class | `ModDropsFromLootTableAuthoringConverter` | A converter responsible for transforming ModDropsFromLootTableAuthoring authoring components into corresponding runtime component data used in the entity component system (ECS). This converter retrieves the loot table ID from the authoring component and assigns it to the runtime component `DropsLootFromLootTableCD`. The loot table ID is resolved using the DropTablesModule. |
