<?php 
 // required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 $con = mysqli_connect("localhost","root","","Exam");
 
 $request_method = $_SERVER['REQUEST_METHOD'];
  switch($request_method){
    case 'GET':
		getUser();
	    break;
	
    default:
        header('HTTP/1.0 405 Method Not Allowed');
        break;
  }
  
  function getUser(){
	  global $con;
	  if($con){
			$sql = "SELECT * FROM user";
			$data = mysqli_query($con,$sql);
			$rows=array();
			while($r=mysqli_fetch_assoc($data)){
		  $rows[]=$r;
		  }
		  echo json_encode($rows,JSON_PRETTY_PRINT);
		 }
  }
 
 
 
 
 ?>