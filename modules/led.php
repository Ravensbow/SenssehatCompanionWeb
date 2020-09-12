<h1 style="text-align: center;margin:10px">Panel LED</h1>
<div class="led_holder">
    <?php
        for($i=0;$i<64;$i++)
        {
            echo '<button id="led'.$i.'" class="btnLED"></button>';
        }
    ?>
    <input id="led_color" type="color"/>
<button id="button_set_color" class="btn btn-primary">Ustaw</button>
</div>
<?php
ob_start();
echo '<script type="text/javascript" src="led.js"></script>';
$scripts = ob_get_contents();
ob_end_clean();
