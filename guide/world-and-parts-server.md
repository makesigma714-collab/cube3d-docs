# World and parts (server)

- `World:CreatePart()`, `World:FindFirstChild(name)`, `World:GetChildren()`
- `World:Raycast(start, direction)` returns `{ Position, Normal, Distance, Part }` for the first solid part
  along the direction (its length is how far to look), or `nil`
- `World:GetHumanoidsNear(position, radius)` lists the Humanoids of living players and NPCs in range
- `World:Explode(position, radius)` (radius defaults to 8, up to 64) breaks welds, throws unanchored parts
  away and hurts players and NPCs, more the closer they are. It shows a red sphere for a moment.
- `World.Gravity` (default 115, 0 to 1000) pulls players and unanchored parts down
- Part properties: `.Name .Position .Size .Rotation .Color .Material .Transparency .CanCollide .Anchored .Parent`
- Physics properties: `.Velocity`, `.Mass` (size times density, read only), `.Density` (default 0.7),
  `.Friction` (default 0.3), `.Elasticity` (bounciness, default 0.2)
- Part methods: `:Destroy()`, `:FindFirstChild(name)`, `:GetChildren()`, `:ApplyImpulse(vector)`
- `part.Touched` fires once as a player reaches the part, and again if they leave and come back
- Materials are `Plastic`, `Metal`, `Wood`, `Neon` and `Glass`

Changes made in a tick reach players as one update per part. Parts made by scripts are never saved
with the world.

Things to know about parts:

- **Rotation only changes how a part looks.** Collision, touching and physics use the unrotated box.
- **Parent only groups parts.** It lets you find them and destroys children with a parent, but
  moving a parent doesn't move its children. Weld parts to make them move together.
- **Unanchored parts have physics.** They fall, bounce, slide to a stop and knock into each other.
  Players can push them: light parts move easily and heavy ones barely budge. Parts that stop moving
  rest until something touches them again.

