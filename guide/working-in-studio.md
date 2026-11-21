# Working in Studio

Studio opens on your games. Everything else is in the editor once you open one.

- **Right-click** the Explorer, or the viewport without dragging, for New Part, Script, Team, Team Spawn
  and Tool. The Insert group on the toolbar does the same, and its **Part** button lets you pick a block,
  sphere, cylinder, wedge, corner wedge, ridge, truss or stairs.
- **Select** anything in the Explorer to edit it in Properties. World settings, teams and spawns all
  work this way, and team spawns show in the viewport as pads in their team's colour.
- **Group** puts the selected parts into a new model. Clicking a part in the viewport picks its whole
  model; hold Alt to pick just the part. Right-click a model for **New Humanoid**.
- **View** on the toolbar opens and closes the Explorer, Properties, Output and Toolbox. Studio remembers
  your layout.
- **Toolbox** (in View) has ready-made models: doors, teleporters, team bricks, checkpoints, NPCs, a sword,
  an RPG and givers for both, plus scripts like Sprint System, Leaderboard and Auto Weld. Click one to insert
  it where the camera is looking. Its scripts come inside it, and every entry says who made it.
- **Double-click** a script to open it. Each open script gets a tab beside the Viewport.
- **Drag** a part onto another part or a model to put it inside, or a script onto a part, model or
  Humanoid to put the script inside it.
- **Pick a Type** in Properties to make a part a seat, a kill brick or a damage brick, and a **Shape** or
  **Material** to change how it looks.
- **Move** with WASD, Q and E. Hold the right mouse button to look around, and scroll to zoom.

To make a tool, build it from parts, with the handle as the parent of the rest. Right-click the handle
and choose **Make Tool from This**. Set the hold point in Properties, where a character shows how it
sits in the hand, and tick **Starter pack** to give it to everyone. Untick **Swings when used** for tools
like guns that shouldn't swing. **Place in world to edit** turns a tool back into parts.

The Toolbox has a **Sword Giver** and an **RPG Giver**: pads that hand out the tool, look empty while it
is taken, and fill up again 5 seconds later. The **Sword** and **RPG** models add just the tool, in the
starter pack. The sword hurts whoever is in front of you, and the RPG fires rockets wherever you aim that
explode when they hit something.

