# Build (client)

In a Personal Server, `Build:Place(center, size, options)`, `Build:Remove(part)` and `Build:Press(part)`
ask the server to do something. It checks the player's rank and the part every time, so a script can't
get around it. Also here are `Build.CanBuild`, `Build.Rank`, `Build.RankChanged`, `Build.Refused`,
`Build.Saved`, `Build:Materials()`, `Build:Footprint(size, rotation)` and `Build:Fits(center, size, rotation)`.

The Stamper and Delete tools are built from all of this. Their scripts are `client/core/stamper.lua` and
`client/core/personal_server.lua`, which make a good example.

