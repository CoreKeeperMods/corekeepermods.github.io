# Localization Module
> Localization Module is a CoreLib submodule that allows to register new I2 localization strings.

## Usage Example
Make sure to call `CoreLibMod.LoadModules(typeof(LocalizationModule));` to in your mod `EarlyInit()` function, before using the module. This will load the submodule.

Now in your plugin `EarlyInit()` method write:
```cs
LocalizationModule.AddTerm("TermID", "English Translation", "Chinese Translation");
```
`TermID` must be a unique identifier, which was not already localized. Chinese translation parameter is optional. All other unspecified languages will default to English translation.

If you need to add more languages use verbose version:
```cs
AddTerm("TermID", new Dictionary<string, string> { { "en", "English Translation" }, { "zh-CN", "Chinese Translation" }, /*...*/ });
```

## Core Keeper Localizing
Core Keeper, by default, already allows custom localization terms using a `.csv` file. Place it in a `Localization` folder in root of your mod project.

The file is tab separated. This is the header for the file:
```csvtab
Key	Type	Desc	English	German	French (France)	Portuguese (Brazil)	Italian (Italy)	Japanese	Korean	Russian	Spanish	Ukrainian	Chinese (Simplified)	Chinese (Traditional)	Thai
```
