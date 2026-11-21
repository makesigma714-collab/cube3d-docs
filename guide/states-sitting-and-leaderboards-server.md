# States, sitting and leaderboards (server)

- `character.State` is `Standing`, `Walking`, `Jumping`, `Falling`, `Sitting` or `Dead`
- `player.StateChanged` fires with the new state
- `character:Sit()`, `character:Stand()`
- `player:SetStat(name, value)` shows a value beside the player's name on the leaderboard, up to 4 stats
- `player.Rank` is `Owner`, `Admin`, `Builder` or `Visitor`, and scripts can read it but never change it
- `Players.RankChanged` fires with the player

Players can also type `/sit` in chat, and jumping gets them up.

