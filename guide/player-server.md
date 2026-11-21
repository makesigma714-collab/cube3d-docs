# Player (server)

- `.Name`, `.UserId`, `.Character`, `.Health`, `.Team`
- `player.Character.LookVector` is the flat direction they are facing
- `player.Character.Humanoid` is the player's Humanoid (see below). `player.Character.WalkSpeed` still works too:
  it defaults to 16 studs per second, and server scripts can set a speed from 0 to 64.
- `:Respawn()`, `:Teleport(position)`, `:SendMessage(text)`
- `:SetTeam(team)`, `:GetTeam()`
- `:TakeDamage(amount, attacker)` goes through the friendly fire rules, and returns false if they stopped it
- `:GiveTool(tool)`, `:TakeTool(tool)`, `:HasTool(tool)`, `:GetTools()`, `.EquippedTool`
- `.CharacterAdded`, `.Died`, `.TeamChanged` (new team, old team)
- `.Chatted` (message) fires for each chat message they send, before the chat filter. Messages starting
  with `/` are commands and don't fire it.
- `:Kick(reason)` removes them from the server and shows them the reason

