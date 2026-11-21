# HumanoidObject

**Context:** Server scripts.

## Properties and events

| Member | Access | Runtime value |
| --- | --- | --- |
| `ClassName` | Read only | `String` |
| `Name` | Read only | `String` |
| `Parent` | Read only | `Variant` |
| `Health` | Read/write | `float` |
| `MaxHealth` | Read/write | `float` |
| `WalkSpeed` | Read/write | `float` |
| `JumpPower` | Read/write | `float` |
| `WalkToPoint` | Read only | `Vec3` |
| `Died` | Read only | `Event` |
| `MoveToFinished` | Read only | `Event` |

## Methods

- `MoveTo()`
- `GetChildren()`
- `FindFirstChild()`
- `Destroy()`
- `TakeDamage()`

Use colon syntax when calling object methods. The names above identify available members; they do not imply that every method takes zero arguments. See the relevant guide for arguments and examples.

## Source

This inventory was checked against the current Cube3D runtime, not Roblox API documentation. Cube3D supports its own API subset.
