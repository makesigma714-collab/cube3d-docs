# Input (client)

- `Input.KeyDown` and `Input.KeyUp` fire with the name of the key, such as `"Q"` or `"Shift"`.
- `Input.MouseDown` and `Input.MouseUp` fire with the button, where 1 is the left one
- `Input:Target(reach)` is what's under the mouse, with `.Part`, `.Position` and `.Normal`, or nil
- `Input:OnPlane(point, direction, reach)` is where the mouse meets a flat surface

Scripts only hear what the game didn't use, so typing in chat or clicking a window never reaches them.

