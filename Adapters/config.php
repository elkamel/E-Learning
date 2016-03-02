<?php
try{
 $db = new PDO('mysql:host=localhost;dbname=e-learning;charset=utf8', 'root', '');
//$db = new PDO('mysql:host=localhost;dbname=soussede_soussede;charset=utf8', 'soussede_elkamel', 'sousse#de123');
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
    {
    echo $db . "<br>" . $e->getMessage();
    }
?>