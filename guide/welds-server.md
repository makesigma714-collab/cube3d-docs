# Welds (server)

A Weld joins two parts so they move as one. If either part is anchored, both stay where they are.

- `World:CreateWeld(part0, part1)` returns the new Weld
- Weld properties: `.Part0`, `.Part1`, `.Name`, `.Parent`, and `:Destroy()` to break it
- In Studio, select parts and press **Weld**. The **Auto Weld** script in the Toolbox welds every part of
  the model you put it in when the game starts.

