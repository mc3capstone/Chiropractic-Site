<?php
    $conn = new mysqli("localhost", "root", "", "chiro_booking") or die("error");

    if (!$conn) {
        echo "connection error".mysqli_connect_error();
    } else {
        $requestDate = $_POST["request_date"];
        $requestTime = $_POST["request_time"];
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $date = $_POST["posted"];

        if (empty($requestDate) || empty($requestTime) || empty($name) || empty($email) || empty($phone)) {
            echo "incomplete";
        } else {
            $query = "insert into users(email, phone, request_date, request_time, date_posted) values('$email', '$phone', '$requestDate', '$requestTime', '$date')";

            $result = mysqli_query($conn, $query);

            if (!$result) {
                echo "fail";
            } else {
                echo "pass";
            }
        }
    }
?>