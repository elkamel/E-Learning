<?php // Getting Checking user's account to allow login
require_once 'config.php';
$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$username = $request->username;
    @$pass = $request->password;

$query="SELECT login, password FROM user WHERE login='$username' and password='$pass';";
$result = $db->query($query) or die($db->error.__LINE__);
$arr = array();
 if($result->rowCount() > 0) {
	while($row = $result->fetch( PDO::FETCH_ASSOC )) {
		$arr[] = $row;	
	}
 }
# JSON-encode the response
echo $json_response = json_encode($arr);
?>