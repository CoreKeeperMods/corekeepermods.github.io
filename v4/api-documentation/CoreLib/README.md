?> This document is a work in progress.

# `CoreLib` Namespace

> Core entry point and submodule framework for CoreLib. Provides mod initialization, versioning hooks, and submodule lifecycle orchestration.

## Summary

| Name                                                 | Type  | Description                                                                                                                                     |
|:-----------------------------------------------------|:-----:|:------------------------------------------------------------------------------------------------------------------------------------------------|
| `CoreLibMod`                                         | Class | Main entry point for the Core Library mod; integrates with the mod loader to provide initialization, version control, and submodule management. |
| `BaseSubmodule`                                      | Class | Abstract foundation class for all CoreLib submodules; standardizes lifecycle management, dependency handling, and loading checks.               |
| `GameVersion`                                        | Class | Represents the game version data used for build/runtime compatibility checks.                                                                   |
| `SubmoduleHandler`                                   | Class | Handles discovery, dependency management, initialization, and lifecycle control for all CoreLib submodules.                                     |