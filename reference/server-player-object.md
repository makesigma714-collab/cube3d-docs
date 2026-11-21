# PlayerObject

**Context:** Server scripts.

## Properties and events

| Member | Access | Runtime value |
| --- | --- | --- |
| `Name` | Read only | `String` |
| `Role` | Read only | `String` |
| `Rank` | Read only | `String` |
| `UserId` | Read only | `int` |
| `Character` | Read only | `Character` |
| `CharacterAdded` | Read only | `Event` |
| `Died` | Read only | `Event` |
| `TeamChanged` | Read only | `Event` |
| `Chatted` | Read only | `Event` |
| `Health` | Read/write | `int` |
| `Team` | Read/write | `Variant` |
| `EquippedTool` | Read only | `Variant` |

## Methods

- `SetStat()`
- `Kick()`
- `SetTeam()`
- `GetTeam()`
- `GiveTool()`
- `TakeTool()`
- `HasTool()`
- `GetTools()`
- `Respawn()`
- `Teleport()`
- `SendMessage()`
- `TakeDamage()`

Use colon syntax when calling object methods. The names above identify available members; they do not imply that every method takes zero arguments. See the relevant guide for arguments and examples.

## Source

This inventory was checked against the current Cube3D runtime, not Roblox API documentation. Cube3D supports its own API subset.
