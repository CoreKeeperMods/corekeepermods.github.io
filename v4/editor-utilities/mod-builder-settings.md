# Mod Builder Settings

![CoreLib Mod Builder Settings](pics/mod-builder-settings-1.png ':size=45%')&nbsp;
![CoreLib Mod Builder Settings](pics/mod-builder-settings-2.png ':size=45%')

## Dependencies Dropdown

> A dropdown has been added to the Dependencies.
> You can now search and select all `ModBuilderSettings` in your project via a combination of a text field and dropdown.

## Build Burst Boolean

> A boolean has been added to allow for building Burst Files **(.dll)**.
> If the boolean doesn't exist, a `Tutorial Link` and `Open Script` Button will appear.
> Use these and follow the instructions in the tutorial.

- [Burst Files](editor-utilities/burst-files.md ':class=specialLink')

## Sync Assembly Definition File [Button]

> The `Assembly Definition` asset **(.asmdef)** can be synced via a button.
> It uses the `Mod Path` string and the `Metadata.Name` to find the asset and update it with the dependencies automatically.
> **Ignores any Unity or ModSDK assemblies.*

## Open Assembly Definition File [Button]

> A button has been added to open the associated `Assembly Definition` asset file **(.asmdef)** in Unity.