import { defineConfig } from "vitepress";
export default defineConfig({
  "title": "Cube3D Docs",
  "description": "Studio and Lua scripting documentation for Cube3D.",
  "base": "/cube3d-docs/",
  "cleanUrls": false,
  "lastUpdated": true,
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "href": "/cube3d-docs/logo.png"
      }
    ]
  ],
  "themeConfig": {
    "logo": "/logo.png",
    "siteTitle": "Cube3D Docs",
    "nav": [
      {
        "text": "Guide",
        "link": "/guide/introduction"
      },
      {
        "text": "API reference",
        "link": "/reference/"
      },
      {
        "text": "Play Cube3D",
        "link": "https://cube2d.net"
      }
    ],
    "search": {
      "provider": "local"
    },
    "sidebar": [{"text": "Tutorials", "collapsed": false, "items": [{"text": "Common Things to Use", "link": "/guide/tutorial-common-things-to-use"}, {"text": "First Script", "link": "/guide/tutorial-first-script"}, {"text": "NPCs", "link": "/guide/tutorial-npcs"}, {"text": "Physics, Welds and Explosions", "link": "/guide/tutorial-physics-welds-and-explosions"}, {"text": "Saving Data Between Visits", "link": "/guide/tutorial-saving-data-between-visits"}, {"text": "Should I use Server or Client?", "link": "/guide/tutorial-should-i-use-server-or-client"}, {"text": "Sprinting", "link": "/guide/tutorial-sprinting"}, {"text": "Studio Tips", "link": "/guide/tutorial-studio-tips"}, {"text": "Things You Will Likely Get Wrong", "link": "/guide/tutorial-things-you-will-likely-get-wrong"}, {"text": "Tools That Aim", "link": "/guide/tutorial-tools-that-aim"}]},
      {
        "text": "Getting started",
        "items": [
          {
            "text": "Introduction",
            "link": "/guide/introduction"
          }
        ]
      },
      {
        "text": "Guides",
        "collapsed": false,
        "items": [
          {
            "text": "The runtime",
            "link": "/guide/the-runtime"
          },
          {
            "text": "Server scripts and client scripts",
            "link": "/guide/server-scripts-and-client-scripts"
          },
          {
            "text": "Starting out",
            "link": "/guide/starting-out"
          },
          {
            "text": "Values",
            "link": "/guide/values"
          },
          {
            "text": "Timers",
            "link": "/guide/timers"
          },
          {
            "text": "game",
            "link": "/guide/game"
          },
          {
            "text": "Events",
            "link": "/guide/events"
          },
          {
            "text": "Players (server)",
            "link": "/guide/players-server"
          },
          {
            "text": "Player (server)",
            "link": "/guide/player-server"
          },
          {
            "text": "World and parts (server)",
            "link": "/guide/world-and-parts-server"
          },
          {
            "text": "Welds (server)",
            "link": "/guide/welds-server"
          },
          {
            "text": "Models (server)",
            "link": "/guide/models-server"
          },
          {
            "text": "Humanoids and NPCs (server)",
            "link": "/guide/humanoids-and-npcs-server"
          },
          {
            "text": "Teams (server)",
            "link": "/guide/teams-server"
          },
          {
            "text": "Tools (server)",
            "link": "/guide/tools-server"
          },
          {
            "text": "States, sitting and leaderboards (server)",
            "link": "/guide/states-sitting-and-leaderboards-server"
          },
          {
            "text": "Part types (server)",
            "link": "/guide/part-types-server"
          },
          {
            "text": "Remote",
            "link": "/guide/remote"
          },
          {
            "text": "State",
            "link": "/guide/state"
          },
          {
            "text": "Client only",
            "link": "/guide/client-only"
          },
          {
            "text": "Input (client)",
            "link": "/guide/input-client"
          },
          {
            "text": "Shift to sprint",
            "link": "/guide/shift-to-sprint"
          },
          {
            "text": "Windows (client)",
            "link": "/guide/windows-client"
          },
          {
            "text": "Effects (client)",
            "link": "/guide/effects-client"
          },
          {
            "text": "Tools (client)",
            "link": "/guide/tools-client"
          },
          {
            "text": "Build (client)",
            "link": "/guide/build-client"
          },
          {
            "text": "Working in Studio",
            "link": "/guide/working-in-studio"
          },
          {
            "text": "World files",
            "link": "/guide/world-files"
          },
          {
            "text": "Studio additions",
            "link": "/guide/studio-additions"
          }
        ]
      },
      {
        "text": "Server API",
        "collapsed": true,
        "items": [
          {
            "text": "Vec3",
            "link": "/reference/server-vec3"
          },
          {
            "text": "Col3",
            "link": "/reference/server-col3"
          },
          {
            "text": "Connection",
            "link": "/reference/server-connection"
          },
          {
            "text": "Event",
            "link": "/reference/server-event"
          },
          {
            "text": "ScriptObject",
            "link": "/reference/server-script-object"
          },
          {
            "text": "GameRoot",
            "link": "/reference/server-game-root"
          },
          {
            "text": "PlayersService",
            "link": "/reference/server-players-service"
          },
          {
            "text": "Character",
            "link": "/reference/server-character"
          },
          {
            "text": "PlayerObject",
            "link": "/reference/server-player-object"
          },
          {
            "text": "WorldService",
            "link": "/reference/server-world-service"
          },
          {
            "text": "ModelObject",
            "link": "/reference/server-model-object"
          },
          {
            "text": "WeldObject",
            "link": "/reference/server-weld-object"
          },
          {
            "text": "HumanoidObject",
            "link": "/reference/server-humanoid-object"
          },
          {
            "text": "PartObject",
            "link": "/reference/server-part-object"
          },
          {
            "text": "ValueObject",
            "link": "/reference/server-value-object"
          },
          {
            "text": "StorageService",
            "link": "/reference/server-storage-service"
          },
          {
            "text": "StoredObject",
            "link": "/reference/server-stored-object"
          },
          {
            "text": "TeamsService",
            "link": "/reference/server-teams-service"
          },
          {
            "text": "TeamObject",
            "link": "/reference/server-team-object"
          },
          {
            "text": "ToolsService",
            "link": "/reference/server-tools-service"
          },
          {
            "text": "ToolObject",
            "link": "/reference/server-tool-object"
          },
          {
            "text": "SpawnObject",
            "link": "/reference/server-spawn-object"
          },
          {
            "text": "RemoteService",
            "link": "/reference/server-remote-service"
          },
          {
            "text": "StateService",
            "link": "/reference/server-state-service"
          },
          {
            "text": "DataStoreService",
            "link": "/reference/server-data-store-service"
          },
          {
            "text": "StoreObject",
            "link": "/reference/server-store-object"
          }
        ]
      },
      {
        "text": "Client API",
        "collapsed": true,
        "items": [
          {
            "text": "GameRoot",
            "link": "/reference/client-game-root"
          },
          {
            "text": "ClientTool",
            "link": "/reference/client-client-tool"
          },
          {
            "text": "ClientPlayer",
            "link": "/reference/client-client-player"
          },
          {
            "text": "PlayersService",
            "link": "/reference/client-players-service"
          },
          {
            "text": "ClientPart",
            "link": "/reference/client-client-part"
          },
          {
            "text": "WorldService",
            "link": "/reference/client-world-service"
          },
          {
            "text": "ClientTeam",
            "link": "/reference/client-client-team"
          },
          {
            "text": "TeamsService",
            "link": "/reference/client-teams-service"
          },
          {
            "text": "RemoteService",
            "link": "/reference/client-remote-service"
          },
          {
            "text": "StateService",
            "link": "/reference/client-state-service"
          },
          {
            "text": "UiService",
            "link": "/reference/client-ui-service"
          },
          {
            "text": "EffectsService",
            "link": "/reference/client-effects-service"
          },
          {
            "text": "InputService",
            "link": "/reference/client-input-service"
          },
          {
            "text": "MouseTarget",
            "link": "/reference/client-mouse-target"
          },
          {
            "text": "ToolsService",
            "link": "/reference/client-tools-service"
          },
          {
            "text": "BuildService",
            "link": "/reference/client-build-service"
          }
        ]
      }
    ],
    "socialLinks": [
      {
        "icon": "github",
        "link": "https://github.com/makesigma714-collab/cube3d-docs"
      }
    ],
    "editLink": {
      "pattern": "https://github.com/makesigma714-collab/cube3d-docs/edit/main/:path"
    },
    "outline": [
      2,
      3
    ]
  }
});
