# Things You Will Likely Get Wrong

<ul><li>You cannot put images/sounds/web links in a script. Everything has to come from the game or the Creator Marketplace.</li><li>If you forget to use <code>task.wait()</code> in a loop, the server will be fine (each script gets its own CPU time), but your script will lag.</li><li>Any parts created from scripts will not be saved. They will be lost if the server closes.</li><li>Physics uses each part’s box without rotation, so rotated parts collide like unrotated ones.</li><li>You will be the only one to see any errors.</li></ul>
