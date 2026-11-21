# Models (server)

A model holds parts, other models and scripts, like a folder. Group parts with **Group** in Studio to make one.

- `.Name`, `.ClassName` (`"Model"`), `.Parent`
- `:FindFirstChild(name)`, `:GetChildren()`, `:Destroy()` (removes everything inside)
- `:MoveTo(position)` moves the whole model so its bottom centre sits at the position

A script inside a model or part gets it as `script.Parent`.

