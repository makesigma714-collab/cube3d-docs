# PartObject

**Context:** Server scripts.

## Properties and events

| Member | Access | Runtime value |
| --- | --- | --- |
| `ClassName` | Read only | `String` |
| `Name` | Read/write | `String` |
| `Position` | Read/write | `Vec3` |
| `Size` | Read/write | `Vec3` |
| `Rotation` | Read/write | `Vec3` |
| `Color` | Read/write | `Col3` |
| `Material` | Read/write | `String` |
| `Transparency` | Read/write | `float` |
| `CanCollide` | Read/write | `bool` |
| `Anchored` | Read/write | `bool` |
| `Velocity` | Read/write | `Vec3` |
| `Mass` | Read only | `float` |
| `Density` | Read/write | `float` |
| `Friction` | Read/write | `float` |
| `Elasticity` | Read/write | `float` |
| `Parent` | Read/write | `Variant` |
| `Touched` | Read only | `Event` |
| `Type` | Read/write | `Variant` |
| `Damage` | Read/write | `int` |
| `Pressed` | Read only | `Event` |

## Methods

- `ApplyImpulse()`
- `Destroy()`
- `Clone()`
- `FindFirstChild()`
- `GetChildren()`

Use colon syntax when calling object methods. The names above identify available members; they do not imply that every method takes zero arguments. See the relevant guide for arguments and examples.

## Source

This inventory was checked against the current Cube3D runtime, not Roblox API documentation. Cube3D supports its own API subset.
