# Shift to sprint

Client script (Runs on: Each player)

```lua
local Input = game:GetService("Input")
local Remote = game:GetService("Remote")

Input.KeyDown:Connect(function(key)
	if key == "Shift" then Remote:FireServer("Sprint", true) end
end)
Input.KeyUp:Connect(function(key)
	if key == "Shift" then Remote:FireServer("Sprint", false) end
end)
```

Server script (Runs on: Server)

```lua
local Remote = game:GetService("Remote")

Remote.OnServerEvent:Connect(function(player, name, sprinting)
	if name == "Sprint" and type(sprinting) == "boolean" then
		player.Character.WalkSpeed = sprinting and 24 or 16
	end
end)
```

