# Part types (server)

- `part.Type` is `Kill`, `Damage`, `Seat`, `Spawn`, `Light`, `Door`, `Button`, `Trigger` or nil
- `part.Damage` is how much a `Damage` part takes each time it hurts someone, every half a second
- `part.Pressed` fires with the player who clicks a `Button` part from up to 18 studs away

```lua
local lava = game:GetService("World"):FindFirstChild("Lava")
lava.Type = "Kill"
```

The same settings are in Studio's Properties, under Type and Damage, and neither needs a script.

