# Tools That Aim

<p><code>tool.Activated</code> gives you the player and the point they aimed at with the mouse. Make a tool called Wand, give it to players, and this makes an explosion wherever they click. The <b>RPG</b> in the Toolbox fires a rocket at that point instead.</p>

```lua
local Tools = game:GetService("Tools")
local World = game:GetService("World")
local wand = Tools:FindFirstChild("Wand")

wand.Activated:Connect(function(player, aim)
	if aim then
		World:Explode(aim, 6)
	end
end)
```


