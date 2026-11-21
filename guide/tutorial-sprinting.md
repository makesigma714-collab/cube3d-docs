# Sprinting

<p>This is a very common thing to do, so we’ll start with it. We’ll have two scripts. One will be a client script checking if we are holding Shift. The second will be a server script that will change our speed. The client script cannot change our speed, so we have to send it to the server.</p><ol><li>Click on <b>Script</b> in the toolbar twice, so we have two scripts.</li><li>Select the first one. In Properties, set <b>Runs on</b> to <b>Each player</b>. That makes it a client script. Double-click it and paste the Client code in.</li><li>Leave the second one on <b>Server</b>, double-click it and paste the Server code in.</li><li>Click <b>Play</b> and hold Shift while you walk.</li></ol><h3>Client</h3>

```lua
local Input = game:GetService("Input")
local Remote = game:GetService("Remote")

Input.KeyDown:Connect(function(key)
	if key == "Shift" then
		Remote:FireServer("Sprint", true)
	end
end)

Input.KeyUp:Connect(function(key)
	if key == "Shift" then
		Remote:FireServer("Sprint", false)
	end
end)
```

<h3>Server</h3>

```lua
local Remote = game:GetService("Remote")

Remote.OnServerEvent:Connect(function(player, name, sprinting)
	if name == "Sprint" and type(sprinting) == "boolean" then
		player.Character.WalkSpeed = sprinting and 24 or 16
	end
end)
```

<p>Make sure we do the type check. People will send random stuff to your server, and this will stop it from crashing.</p><p>If the Output says <code>Input only works in scripts that run on each player</code>, the first script is still set to Server. Change its <b>Runs on</b> to <b>Each player</b>.</p>
