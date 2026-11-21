# Physics, Welds and Explosions

<p>Untick <b>Anchored</b> on a part and it gets physics: it falls, bounces, slides and can be pushed around by players. Light parts move easily and heavy ones barely budge. Change <b>Density</b>, <b>Friction</b> and <b>Bounciness</b> in Properties.</p><p>To keep loose parts together, select them and click <b>Weld</b>, or drop the <b>Auto Weld</b> script from the Toolbox into a model. Welded parts move as one. If any of them is anchored, they all stay put.</p><p>Explosions break welds and throw parts around. Put this script in a part to make a mine that blows up when someone steps on it.</p>

```lua
local World = game:GetService("World")
local mine = script.Parent
local armed = true

mine.Touched:Connect(function(player)
	if armed then
		armed = false
		World:Explode(mine.Position, 12)
		mine:Destroy()
	end
end)
```


