# The runtime

Lua runs on a small virtual machine written in GDScript (`client/src/lua`), and it follows Lua 5.4
syntax. The runtime exposes the Cube3D API rather than operating-system or filesystem access. Each script gets its own globals, CPU share and memory limit.

**Not available:** `goto`, `<close>`, `coroutine`, `load`, `loadstring`, `dofile`, `require`, `io`,
`debug`, `package`, `os.execute` and compiled Lua. Use `task.spawn` and `task.wait` in place of
coroutines. Strings count characters, not bytes.

Available libraries are `string`, `table`, `math`, `os.time`, `os.clock`, plus `print`, `warn`,
`error`, `assert`, `pcall`, `xpcall`, `pairs`, `ipairs`, `next`, `select`, `type`, `typeof`,
`tostring`, `tonumber`, `rawget`, `rawset`, `rawequal`, `rawlen`, `getmetatable` and `setmetatable`.

### Limits

| What | Limit |
| --- | --- |
| CPU for all scripts | 5 ms in each 33 ms game tick (2 ms on a client) |
| A task running without waiting | stopped after 1 second of CPU |
| A script that keeps doing that | shut down after 3 stops |
| Memory per script | 16 MB |
| All scripts on a server | stopped together past 384 MB |
| Running tasks per script | 512 |
| Event connections per script | 2048 |
| Call depth | 180 |
| Text in one string | 1 MiB |
| Total parts in a world | 20,000; scripts have no separate 2,000-part allowance in the next server update |
| Log lines | 40 a second per script |

A loop with no `task.wait` can slow its own script down, but it can't hold up the game. Other
scripts and the players carry on, and the owner sees the error when they join.

Script errors go to the server log and to the game's owner, never to other players.

