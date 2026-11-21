# Teams (server)

- `Teams:GetTeams()`, `Teams:FindFirstChild(name)`
- `Teams:CreateTeam({Name, Color, Description, MaxPlayers, AutoAssignable, FriendlyFire, ShowScore, Visible})`
- `Teams:CreateSpawn({Position, Team, Neutral})`, `Teams:GetSpawns()`
- `Teams:Balance()` evens out automatic teams
- `Teams:CanDamage(attacker, victim)`
- `Teams.AllowSwitching`

Team: `.Name .Color .Score .FriendlyFire .MaxPlayers`, `:GetPlayers()`, `:GetPlayerCount()`,
`:AddScore(n)`, `:Destroy()`, `.PlayerAdded`, `.PlayerRemoved`.

TeamSpawn: `.Position .Team .Neutral .Enabled`.

Scores last for the life of a game server and aren't saved. There is no built-in game mode: team
deathmatch, capture the flag, team obbies and king of the hill are all made from these parts, with
win conditions written in Lua.

Spawns: a player appears at a random enabled spawn of their team. With none, they use the world
spawn, or a neutral spawn if the world's fallback is set to that. Players with no team use neutral
spawns. The server always chooses.

