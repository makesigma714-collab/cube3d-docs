# Studio additions

::: warning Local development
These additions were checked against the current local Studio source. They are not all included in the production client yet. Use the installed runtime version when checking whether a feature is available.
:::

## Storage

Put reusable objects under Storage in Studio. Server scripts can find templates, inspect children, and clone them into the running world. Cloning does not modify the stored template.

```lua
local Storage = game:GetService("Storage")
local template = Storage:FindFirstChild("Platform")
if template then
    local platform = template:Clone()
    platform.Position = Vector3.new(0, 8, 0)
end
```

Assigning a stored object's `Parent` to World, a part, or a model takes it out of Storage and into the live world. Use `Clone()` when you want to retain the template.

## Value objects

Studio supports StringValue, IntValue, NumberValue, BoolValue and Vector3Value objects. Add one in Explorer, set its Value in Properties, and read it from a server script.

```lua
local score = script.Parent:FindFirstChild("Score")
if score then
    score.Changed:Connect(function(value)
        print(value)
    end)
    score.Value = score.Value + 1
end
```

The assigned Lua value must match the object type. IntValue accepts whole numbers. Value objects support `Parent`, `FindFirstChild`, `GetChildren`, `Destroy`, and `Clone`.

## Script containers

Scripts and value objects can have children. `script.Parent`, `FindFirstChild`, and `GetChildren` follow the Explorer hierarchy. Reparenting is checked on the server and cycles are rejected.
