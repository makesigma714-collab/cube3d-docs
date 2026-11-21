# Server scripts and client scripts

**Server scripts** run on the game server, and players never receive their text. They can change
the game.

**Client scripts** run on each player's computer. They can read what a player can already see, show
approved UI and effects, and ask the server for things with `Remote`. They can't change parts, teams,
scores, health or anything else, so a modified client gains nothing from them. A server script that
handles `Remote.OnServerEvent` must treat what it receives as a request and check it.

New scripts in Studio are server scripts. Set **Runs on** to **Each player** in a script's Properties
to make it a client script. `Input`, `UI`, `Effects` and `Build` only exist in client scripts.

Scripts can't load pictures, models, sounds or web addresses. Everything players see comes from the
game's own server.

