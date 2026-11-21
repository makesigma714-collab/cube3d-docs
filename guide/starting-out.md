# Starting out

```lua
local Players = game:GetService("Players")
local World = game:GetService("World")

Players.PlayerAdded:Connect(function(player)
	print(player.Name .. " joined")
	player:SendMessage("Welcome!")
end)

local pad = World:CreatePart()
pad.Name = "Pad"
pad.Position = Vector3.new(0, 1, 0)
pad.Size = Vector3.new(6, 1, 6)
pad.Color = Color3.fromRGB(0, 200, 100)
pad.Touched:Connect(function(player)
	player:Respawn()
end)
```

