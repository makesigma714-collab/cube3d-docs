# Character

**Context:** Server scripts.

## Properties and events

| Member | Access | Runtime value |
| --- | --- | --- |
| `Name` | Read only | `String` |
| `Position` | Read/write | `Vec3` |
| `LookVector` | Read only | `Vec3` |
| `WalkSpeed` | Read/write | `float` |
| `Health` | Read only | `int` |
| `State` | Read only | `String` |
| `Humanoid` | Read only | `HumanoidObject` |

## Methods

- `FindFirstChild()`
- `GetChildren()`
- `Sit()`
- `Stand()`

Use colon syntax when calling object methods. The names above identify available members; they do not imply that every method takes zero arguments. See the relevant guide for arguments and examples.

## Source

This inventory was checked against the current Cube3D runtime, not Roblox API documentation. Cube3D supports its own API subset.
