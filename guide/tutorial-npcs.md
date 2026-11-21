# NPCs

<p>An NPC is a model with a <b>Humanoid</b> and six parts named <code>Head</code>, <code>Torso</code>, <code>Larm</code>, <code>Rarm</code>, <code>Lleg</code> and <code>Rleg</code>. In game it shows up as a character with a nametag that says the model’s name, and it walks with the same animations as players. The easiest way to get one is the <b>NPC</b> model in the Toolbox.</p><p>Drag this script onto the NPC model and click <b>Play</b>. It walks to a random spot, waits, and does it again. The <b>Wandering NPC</b> in the Toolbox already has it.</p>

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

<p>A Humanoid has <code>Health</code>, <code>MaxHealth</code>, <code>WalkSpeed</code> and <code>JumpPower</code>, and you can change them in Properties or from a script. Players have one too, at <code>player.Character.Humanoid</code>.</p>
