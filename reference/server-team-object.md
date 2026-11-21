# TeamObject

**Context:** Server scripts.

## Properties and events

| Member | Access | Runtime value |
| --- | --- | --- |
| `PlayerAdded` | Read only | `Event` |
| `PlayerRemoved` | Read only | `Event` |
| `Name` | Read only | `String` |
| `Color` | Read/write | `Col3` |
| `Score` | Read/write | `int` |
| `FriendlyFire` | Read/write | `bool` |
| `MaxPlayers` | Read only | `int` |

## Methods

- `AddScore()`
- `GetPlayers()`
- `GetPlayerCount()`
- `Destroy()`

Use colon syntax when calling object methods. The names above identify available members; they do not imply that every method takes zero arguments. See the relevant guide for arguments and examples.

## Source

This inventory was checked against the current Cube3D runtime, not Roblox API documentation. Cube3D supports its own API subset.
