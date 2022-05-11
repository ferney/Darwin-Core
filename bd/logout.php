<?php
ob_start();
session_start();
session_unset();
session_destroy();
$url = "https://darwincore.000webhostapp.com/";
header("Location : $url");
header("Cache-control: private");
header("Cache-control: no-cache, must-revalidate");
header("Pragma: no-cache");
ob_end_flush();
exit();
?>