# Audio Submodule

?> This documentation is a work in progress.

> The Audio Submodule contains features to add music and sound effects.
> 
> *_Be sure you have added your desired audio files to your Unity Project Mod folder._

## Usage
To load this submodule, add the following code to your `IMod` class within the `EarlyInit()` function.
<!-- tabs:start -->

<!-- tab:Copy Code -->
```csharp
CoreLibMod.LoadSubmodule(typeof(AudioModule);
```

<!-- tab:*MyMod.cs* Example -->
```csharp
using CoreLib;
using CoreLib.Submodule.Audio;
using PugMod;
using UnityEngine;

namespace MyNamespace
{
	public class MyMod : IMod
	{
		public void EarlyInit()
		{
            //Before the submodule is loaded
			CoreLibMod.LoadSubmodule(typeof(AudioModule);
            //The submodule is now loaded
		}
		
		public void Init() { }

		public void Shutdown() { }

		public void ModObjectLoaded(Object obj) { }

		public void Update() { }
		}
	}
}
```

<!-- tabs:end -->

## Methods
These methods are available once the submodule is loaded. All methods go in your `EarlyInit()` function.
- [`IsVanilla`](#IsVanilla)
- [`AddCustomRoster`](#AddCustomRoster),
- [`AddMusicToRoster`](#AddMusicToRoster),
- [`AddEffect`](#AddEffect),
- [`AddSoundEffect`](#AddSoundEffect).

### `IsVanilla`
> Checks whether a roster type is part of vanilla content.

<!-- tabs:start -->
<!-- tab: Parameters -->
- **`rosterType`** (`MusicRosterType`):
	- Description: The MusicRosterType to check.
<!-- tab: Returns -->
- **`bool`**:
	- Description: Boolean indicating whether the roster is vanilla or not.
<!-- tab: Examples -->
```csharp
MusicRosterType roster = MusicRosterType.DEFAULT;
bool isVanillaRoster = IsVanilla(roster);
```
<!-- tabs:end -->

### `AddCustomRoster`
> Creates and registers a new custom music roster identifier.

<!-- tabs:start -->
<!-- tab: Returns -->
- **`MusicRosterType`**:
	- Description: The MusicRosterType of the newly created roster (int).
<!-- tab: Examples -->
```csharp
MusicRosterType roster = MusicRosterType.DEFAULT;
bool isVanillaRoster = IsVanilla(roster);
```
<!-- tabs:end -->
### `AddMusicToRoster`

### `AddEffect`

### `AddSoundEffect`

## Add Custom Music

In your mod `EarlyInit()` method write:
```csharp
//You can add your own roster or use existing ones
MusicManager.MusicRosterType roster = AudioModule.AddCustomRoster();

//Now add music clip to a roster
var clipRef = "Assets/MyMod/Music/myEpicMusic".AsAddress<AudioClip>();
AudioModule.AddMusicToRoster(roster, clipRef);
```
To play the music you can use `AudioManager` class methods as usual.
```csharp
Manager.music.SetNewMusicPlaylist(roster);
```

## Add Custom Sound Effects

```csharp
// After adding the sound effect make sure to remember the SfxID
var clip = CoreLib.LoadAsset<AudioClip>("Assets/myamazingmod/Music/my-sound-effect");
SfxID soundEffect = AudioModule.AddSoundEffect(clip);
```
To play your sound effect you can use `EffectsManager` class methods as usual.
```csharp
AudioManager.Sfx(soundEffect, position);
```