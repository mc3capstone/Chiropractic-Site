<?php
    $conn = new mysqli("localhost", "id12578029_jjung", "6LuZdfqkiKEn}qY]", "id12578029_chiro_booking") or die("error");

    if (!$conn) {
        echo "connection error".mysqli_connect_error();
    } else {
        $query = "select * from users order by id desc";
        $result = mysqli_query($conn, $query);
        $json = array();

        while($row = mysqli_fetch_assoc($result)) {
            $json[] = $row;
        }

        echo json_encode($json);
    }
?>