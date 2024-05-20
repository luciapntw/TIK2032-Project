<?php
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $comment = $conn->real_escape_string($_POST['comment']);

    $sql = "INSERT INTO comments (name, comment) VALUES ('$name', '$comment')";

    if ($conn->query($sql) === TRUE) {
        echo "New comment created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
    header("Location: ../index.php");
    exit();
}
?>
