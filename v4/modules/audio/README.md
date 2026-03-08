# Audio Submodule

> The Audio Submodule contains features to add music and sound effects.
> 
> *_Be sure you have added your desired audio files to your Unity Project Mod folder._

## Usage
To load this submodule, add the following code to your `IMod` class within the `EarlyInit()` function.
<!-- tabs:start -->

<!-- tab:Copy Code -->
```csharp
CoreLibMod.LoadSubmodule(typeof(AudioModule));
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
			CoreLibMod.LoadSubmodule(typeof(AudioModule));
            //The submodule is now loaded
		}
		
		public void Init() { }

		public void Shutdown() { }

		public void ModObjectLoaded(Object obj) { }

		public void Update() { }
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
bool isVanillaRoster = AudioModule.IsVanilla(roster);
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
MusicRosterType roster = AudioModule.AddCustomRoster();
```
<!-- tabs:end -->

### `AddMusicToRoster`
> Adds an audio clip to a custom music roster.

<!-- tabs:start -->
<!-- tab: Parameters -->
- **`rosterType`**(`MusicRosterType`):
	- Description: The MusicRosterType of the newly created roster (int).
- **`music`** (`AssetReferenceT<AudioClip>`):
	- Description: The address reference of the audio clip to add.
- **`intro`** (`AssetReferenceT<AudioClip>`):
	- Description: The address reference of the intro clip to add.
<!-- tab: Examples -->
```csharp
MusicRosterType roster = AudioModule.AddCustomRoster();
//'this' is an `IMod` Interface.
LoadedMod modInfo = this.GetModInfo();
AudioClip[] audiofiles = modInfo.LoadAudioFiles();
AudioClip music = audiofiles.First(x => x.name == "myEpicMusic");
AudioModule.AddMusicToRoster(roster, music);
```
<!-- tabs:end -->

### `AddEffect`
> Registers a new custom effect (based on the `IEffect` interface) to CoreLib.

<!-- tabs:start -->
<!-- tab: Parameters -->
- **`effect`**(`IEffect`):
	- Description: The new effect to register based on the `IEffect` interface.
<!-- tab: Returns -->
- **`EffectID`**:
	- Description: The EffectID of the newly created effect.
<!-- tabs:end -->

### `AddSoundEffect`
> Registers a new custom sound effect (based on the `AudioClip` class) to CoreLib.

<!-- tabs:start -->
<!-- tab: Parameters -->
- **`effectClip`**(`AudioClip`):
	- Description: The audio clip to register as a sound effect.
<!-- tab: Returns -->
- **`SfxID`**:
	- Description: The SfxID of the newly created sound effect.
<!-- tab: Examples -->
```csharp
//'this' is an `IMod` Interface.
LoadedMod modInfo = this.GetModInfo();
AudioClip[] audiofiles = modInfo.LoadAudioFiles();
AudioClip clip = audiofiles.First(x => x.name == "my-sound-effect");
SfxID soundEffect = AudioModule.AddSoundEffect(clip);
```
<!-- tabs:end -->

## Add Custom Music

In your mod's `EarlyInit()` method write:
```csharp
//You can add your own roster or use existing ones
MusicManager.MusicRosterType roster = AudioModule.AddCustomRoster();

//Now add music clip to a roster
//'this' is an `IMod` Interface.
LoadedMod modInfo = this.GetModInfo();
AudioClip[] audiofiles = modInfo.LoadAudioFiles();
AudioClip music = audiofiles.First(x => x.name == "myEpicMusic");
AudioModule.AddMusicToRoster(roster, music);
```
To play the music you can use `AudioManager` class methods as usual.
```csharp
Manager.music.SetNewMusicPlaylist(roster);
```

## Add Custom Sound Effects

In your mod's `EarlyInit()` method write:
```csharp
// After adding the sound effect make sure to remember the SfxID
// 'this' is an `IMod` Interface.
LoadedMod modInfo = this.GetModInfo();
var clip = modInfo.LoadAsset<AudioClip>("mySoundEffect");
SfxID soundEffect = AudioModule.AddSoundEffect(clip);
```
To play your sound effect you can use `EffectsManager` class methods as usual.
```csharp
AudioManager.Sfx(soundEffect, position);
//or
Manager.audio.PlaySfx(soundEffect, position);
```