# Humanoids and NPCs (server)

A Humanoid gives a model health and lets it walk. Put a Humanoid in a model together with parts named
`Head`, `Torso`, `Larm`, `Rarm`, `Lleg` and `Rleg`, and the model becomes an NPC: in game it shows as a
character with a nametag showing the model's name, walks with the same animations as players, and its body
parts follow it. A decal on the front of `Head` becomes its face. The NPC model in the Toolbox is set up
this way.

- `.Health`, `.MaxHealth` (up to 1000), `.WalkSpeed` (0 to 64), `.JumpPower` (0 to 100, default 36)
- `:MoveTo(position)` walks there. It jumps over small steps, and gives up after 8 seconds
- `.MoveToFinished` fires with `true` when it arrives, or `false` when it gave up
- `.WalkToPoint` is where it is walking to
- `:TakeDamage(amount)`, and `.Died` fires when health reaches 0
- `npc.Torso.Position` and the other body parts' positions follow the NPC as it walks

```lua
local npc = script.Parent
local humanoid = npc:FindFirstChild("Humanoid")
local home = npc:FindFirstChild("Torso").Position

while humanoid.Health > 0 do
	humanoid:MoveTo(home + Vector3.new(math.random(-12, 12), 0, math.random(-12, 12)))
	humanoid.MoveToFinished:Wait()
	task.wait(2)
end
```

Players have a Humanoid too, at `player.Character.Humanoid`. Its `WalkSpeed`, `JumpPower`, `MaxHealth`
(up to 255), `Health`, `TakeDamage` and `Died` work the same way, but `MoveTo` only works on NPCs.

