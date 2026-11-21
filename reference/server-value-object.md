# ValueObject

**Context:** Server scripts.

::: warning Local development
See [Studio additions](/guide/studio-additions) for availability.
:::

## Properties and events

| Member | Access | Runtime value |
| --- | --- | --- |
| `ClassName` | Read only | `String` |
| `Name` | Read only | `String` |
| `Value` | Read/write | `Variant` |
| `Changed` | Read only | `Event` |
| `Parent` | Read/write | `Variant` |

## Methods

- `FindFirstChild()`
- `GetChildren()`
- `Destroy()`

Use colon syntax when calling object methods. The names above identify available members; they do not imply that every method takes zero arguments. See the relevant guide for arguments and examples.

## Source

This inventory was checked against the current Cube3D runtime, not Roblox API documentation. Cube3D supports its own API subset.
