# Localization Bug

!> Localizaiton.csv files are the root of setting up the text of the game in different languages.
Unfortunately, there is a huge error occuring for mods.

<!-- tabs:start -->

<!-- tab:Bug -->

The bug surprisingly stems from the shorthand version fo the localization.csv files.
The game will generate its own csv in shorthand as well if this is the first mod to load.

```csv
Key	Type	Desc	English	German	Japanese	Korean	Spanish	Chinese (Simplified)	Thai
```

Then, when another mod uses a longform csv it will break the generated localization.csv file by just adding on to the new languages to the end of the shorthand version.

```csv
Key	Type	Desc	English	German	Japanese	Korean	Spanish	Chinese (Simplified)	Thai	French (France)	Portuguese (Brazil)	Italian (Italy)	Russian	Ukrainian	Chinese (Traditional)
```

Unfortunately, the only lines to update are the ones from the mod that had the new languages.
No other lines are updated and the game will then translate all blanks as 'English' due to not having a translation.
It also makes it so that all languages are out of order from what they are supposed to be.

<!-- tab:Fix -->

?> There is no actual fix for this right now as the developers would have to fix this, but there is a workaround. Always use the longform version for the localization.csv.

```csv
Key	Type	Desc	English	German	French (France)	Portuguese (Brazil)	Italian (Italy)	Japanese	Korean	Russian	Spanish	Ukrainian	Chinese (Simplified)	Chinese (Traditional)	Thai
```

> **Note To Developers:** The fix for this would be to always load that generated `Localization.csv` based on the `Localization Template.csv` first, instead of based on the first mod loaded.
> This would allow you to keep the order of languages as you see fit and not cause any unforeseen errors like this.
> Additionally, this would allow modders to use any form of shorthand for their own localization.csv files.
<!-- tabs:end -->