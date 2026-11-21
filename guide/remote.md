# Remote

Only numbers, text, true/false, nil and `Vector3` can cross the network. Clients can send 30 events a
second, each with up to 16 values.

- Server: `Remote:FireClient(player, name, ...)`, `Remote:FireAllClients(name, ...)`, `Remote.OnServerEvent` (player, name, ...)
- Client: `Remote:FireServer(name, ...)`, `Remote.OnClientEvent` (name, ...)

