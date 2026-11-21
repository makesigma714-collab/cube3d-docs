# State

Values every client can read. Server scripts write them and everyone is kept up to date.

- Server: `State:Set(key, value)`, `State:Get(key)`, `State.Changed`
- Client: `State:Get(key)`, `State.Changed`

