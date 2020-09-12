<?php
global $scripts;
session_start();
require_once('config.php');
require ('narzedzia.php');

ob_start();
include ('modules/nav.php');
$nav = ob_get_contents();
ob_end_clean();


if(array_key_exists('v',$_GET)) {
    $module = 'modules/'.$_GET['v'];
}
else{
    $module="modules/menu";
}

$md_dir = $module.'.php';
if(file_exists($md_dir)) {
    ob_start();
    include ($md_dir);
    $content = ob_get_contents();
    ob_end_clean();
    include('layout.php');
}
else{
    header('HTTP/1.1 404 Not Found');
    $content='404';
    include('layout.php');
}

?>


