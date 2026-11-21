# Windows (client)

`UI:CreateWindow(width, height, place)` makes a window. Leave out `place` for the left of the screen, or
use `"toolbar"` for just above the player's tools. Anything can hold:

- `:AddRow()`, `:AddColumn(width)`, `:AddList(width)` and `:AddGrid(columns, tileSize)`
- `:AddLabel(text, size, bold)` and `:AddTextBox(hint)`, which has `.Text` and `.Changed`
- `:AddButton(text, style)`, where style is `"flat"` or `"list"`, which has `.Pressed` and `.TextColor`
- `:AddSwatch(color, hint)`, which has `.Pressed`
- `:AddPicture({Shape, Material, Color, Transparency, Size}, hint, size)`, which has `.Pressed`, `.RightPressed`,
  `.Selected` and `.Starred`. Give `Size` a `Vector3` to draw the part at its own proportions, like
  `Vector3.new(8, 2, 2)` for a long brick
- `:Clear()`, `:Destroy()`, `.Visible`, `.Grow` and `.Tall`

`UI:Remember(name, text)` and `UI:Recall(name)` keep a little text on this computer between visits.
Windows show plain text and pictures of the game's own parts, and can't load anything from outside it.

