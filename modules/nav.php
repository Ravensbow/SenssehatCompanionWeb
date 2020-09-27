<?php
global $CFG;
$categorys= array(
    array(
    "id"=>"wykresy","name"=>"Przebiegi czasowe"
),
    array(
    "id"=>"led","name"=>"Panel LED"
),
array(
"id"=>"joystick","name"=>"Joystick"
));
?>
<nav style="">
    <div class="newlogo">
        <a href="<?php echo $CFG->wwwroot?>"><h4><span style="color: #ee003c;font-weight: bold">Sense</span>Hat</h4></a>
    </div>
    <ul class="nav-links">
    <?php
    foreach ($categorys as $item)
    { ?>
        <li><a href="index.php?v=<?php echo $item['id']?>"> <?php echo $item['name']?> </a></li>
        <?php } ?>
    </ul>
    <div class="my-mark">
        <div class="mark1"></div>
        <div class="mark2"></div>
        <div class="mark3"></div>
    </div>
</nav>
