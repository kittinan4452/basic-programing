<?php

header("Access-Control-Allow-Origin: *"); // กำหนด header สำหรับการอนุญาตข้ามโดเมน
header("Content-Type: application/json"); // กำหนด Content-Type เป็น JSON


include "connectdatabase.php"; //เชื่อต่อข้อมูลจาก  Database


try {
    // ดึงข้อมูลสถานที่ท่องเที่ยว
    $sql = "SELECT * FROM attractions";
    $result = $obj->query($sql);

    // ดึงข้อมูลในรูปแบบ Array
    $arr = $result->fetchAll(PDO::FETCH_ASSOC);
    //print_r($arr);
    // แปลงข้อมูลเป็น JSON และส่งออก
    echo json_encode($arr);

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}

?>
