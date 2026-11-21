# Tools (server)

- `Tools:GetTools()`, `Tools:FindFirstChild(name)`
- Tool: `.Name`, and the events `.Equipped`, `.Unequipped` and `.Activated`, which each pass the player
- `tool.Activated` fires once per accepted left-click of that place tool. The callback receives the player who used it and the point they were aiming at with the mouse (a Vector3, or `nil` if there wasn't one). Use a server script to check range and apply damage.

A player can only hold a tool that's in their backpack. Tools in the starter pack are given at every
spawn, and anything else is lost when the player dies. A backpack holds 16 tools. What a tool does is
entirely up to your script, and the server checks every equip and click.

A sword spawner:

```lua
local Tools = game:GetService("Tools")
local Players = game:GetService("Players")
local World = game:GetService("World")
local sword = Tools:FindFirstChild("Sword")

World:FindFirstChild("SwordPad").Touched:Connect(function(player)
	player:GiveTool(sword)
end)

sword.Activated:Connect(function(player)
	for _, other in ipairs(Players:GetPlayers()) do
		local gap = other.Character.Position - player.Character.Position
		if other ~= player and gap.Magnitude < 8 then
			other:TakeDamage(25, player)
		end
	end
end)
```

