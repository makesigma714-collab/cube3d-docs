# World files

Worlds are `.cbxl` files, plain XML you can read and edit. Scripts sit in CDATA sections. Use
**File > Save as .cbxl file** and **File > Open a .cbxl file** in Studio. Older `.c3w` worlds still load.

```xml
<cube3d version="1">
  <World name="Arena" sky="#87ceeb" spawn="0 2 0">
    <Parts>
      <Part x="0" y="0" z="0" width="64" height="1" depth="64" color="#808080" name="Floor"/>
    </Parts>
    <Scripts>
      <Script id="1" name="Main" kind="server" enabled="true"><![CDATA[print("hi")]]></Script>
    </Scripts>
    <Teams autoAssign="true" allowSwitching="false" fallback="world">
      <Team id="1" name="Red" color="#ff0000"/>
      <TeamSpawn id="1" position="10 2 0" team="1"/>
    </Teams>
    <Tools>
      <Tool id="1" name="Sword" starter="true" grip="0 0 0">
        <Box p="0 2 0" s="0.3 4 0.3" c="#eceff1"/>
      </Tool>
    </Tools>
  </World>
</cube3d>
```

### Server announcements

Call `game:Announce("The next round starts soon!", 6)` from a server script to display a banner to everyone in that instance. Duration defaults to 6 seconds and is limited to 1-15 seconds. The server shows at most one announcement every 2 seconds.
