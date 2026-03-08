?> This document is a work in progress.

# `CoreLib.Data.Configuration` Namespace

> Configuration system used by CoreLib and submodules (config file, entries, descriptions, type conversion, and acceptable value constraints).

## Summary

| Type         | Name                      | Description                                                                    |
|--------------|---------------------------|--------------------------------------------------------------------------------|
| Class        | `ConfigFile`              | Represents a configuration file container for binding and retrieving settings. |
| Class        | `ConfigEntry<T>`          | No summary available.                                                          |
| Class        | `ConfigEntryBase`         | Base type for a configuration entry bound to a section/key.                    |
| Class        | `ConfigDefinition`        | Defines a configuration entry identity (section + key).                        |
| Class        | `ConfigDescription`       | Provides descriptive metadata for configuration entries.                       |
| Class        | `ConfigScope`             | Defines scoping rules for config entries (e.g., where/how they apply).         |
| Class        | `TypeConverter`           | Converts config values to/from runtime types.                                  |
| Static Class | `TomlTypeConverter`       | TOML-focused conversion utilities used by the configuration system.            |
| Class        | `SettingChangedEventArgs` | Event arguments describing a configuration setting change.                     |
| Class        | `AcceptableValueBase`     | Base class for acceptable-value constraints.                                   |
| Class        | `AcceptableValueList<T>`  | Acceptable-value constraint restricting values to a predefined list.           |
| Class        | `AcceptableValueRange<T>` | Acceptable-value constraint restricting values to a numeric range.             |