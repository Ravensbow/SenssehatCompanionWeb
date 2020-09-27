<div style="min-height: 800px;">
    <div id="jb-top" class="joybutton joybutton-released"></div>
    <div style="display: inline-block;">
        <div id="jb-left" class="joybutton joybutton-released"></div>
        <div id="jb-center" class="joybutton joybutton-released"></div>
        <div id="jb-right" class="joybutton joybutton-released"></div>
    </div>
    <div id="jb-bottom" style="margin-top: -9px;" class="joybutton joybutton-released"></div>
</div>

<?php
ob_start();
echo '<script type="text/javascript" src="joystick.js"></script>';
$scripts = ob_get_contents();
ob_end_clean();