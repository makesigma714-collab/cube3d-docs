# Saving Data Between Visits

<h3>DataStore service (server-side scripts only)</h3><ul><li><code>DataStore:GetStore(name)</code> returns a store that has a <code>Name</code> property.</li><li><code>store:Load(player)</code> waits for the data from the save and then returns it as a table.</li><li><code>store:Get(player, field)</code>, <code>store:Set(player, field, value)</code>, <code>store:Increment(player, field, amount)</code> (amount is 1 by default and the function returns the updated value).</li><li><code>store:Remove(player, field)</code>, <code>store:Clear(player)</code>.</li><li><code>store:Save(player, {fields})</code> saves several fields at once, merging but not replacing the values.</li><li>Values must be numbers, text (up to 1000 characters long) or boolean.</li><li>The names are from 1 to 50 letters, numbers, spaces, dots, dashes and underscores.</li><li>Limits: 32 stores per game and 64 fields per player in each store.</li><li>Invalid parameters cause an error message.</li></ul><h3>DataStore saving</h3><ul><li>In game servers every 6 seconds, when a player exits and on shutdown.</li><li>In studio during test play all data stored in memory without saving anything.</li></ul>

```lua
local Players = game:GetService("Players")
local stats = game:GetService("DataStore"):GetStore("Leaderstats")

Players.PlayerAdded:Connect(function(player)
	local saved = stats:Load(player)
	player:SetStat("Coins", saved.Coins or 0)
end)

local function addCoin(player)
	local coins = stats:Increment(player, "Coins", 1)
	player:SetStat("Coins", coins)
end
```

<p>You can see, change, clear and export everyone&#x27;s saved data on your game&#x27;s Manage page under <b>DataStore</b>. The Toolbox has Saved Leaderstats, Saved Coin, Saved Win Pad and Visit Counter to start from.</p>
