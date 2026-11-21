# First Script

<ol><li>Open your game up in Studio.</li><li>Click on <b>Script</b> in the toolbar (Insert tab).</li><li>Double-click on the script in the Explorer.</li><li>Paste the following code in and click <b>Play</b>.</li></ol>

```lua
local Players = game:GetService("Players")
local World = game:GetService("World")
local top = World:FindFirstChild("Part 6")

Players.PlayerAdded:Connect(function(player)
	player:SendMessage("Welcome! Climb the steps.")
end)

top.Touched:Connect(function(player)
	player:SetStat("Climbed", "Yes")
	player:SendMessage("You made it to the top!")
end)
```

<p>Climb up the stairs and you should get Climbed: Yes on the leaderboard. Part 6 is just the blue step at the end. The starter place doesn’t have any names on the parts. If you rename them, you must change the script too. When you’re done, click <b>Publish</b> so others can see it.</p>
