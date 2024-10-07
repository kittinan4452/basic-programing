<?php

header("Access-Control-Allow-Origin: *"); // กำหนด header สำหรับการอนุญาตข้ามโดเมน
header("Content-Type: application/json"); // กำหนด Content-Type เป็น JSON


include "connectdatabase.php"; //เชื่อต่อข้อมูลจาก  Database


try {

// ดึงข้อมูลสถานที่ท่องเที่ยว
$sql = "SELECT * FROM attractions WHERE id=:id";
$result = $obj->prepare($sql);
//map ข้อมูลโดยใช้ id
$result->bindParam('id',$_GET['id']);
$result->execute();

// ดึงข้อมูลในรูปแบบArray
 $arr = $result->fetch(PDO::FETCH_ASSOC);

// 
 echo json_encode($arr, JSON_PRETTY_PRINT);

} catch (PDOException $e) {

echo $e->getMessage();
}



?>