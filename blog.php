<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <link rel="stylesheet" href="blog.css">
    <script src="js/blog.js"></script>
</head>
<body>
    <header>
        <h1 class="logo-title">Lucia's Page</h1>
        <nav>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="galery.html">GALERY</a></li>
                <li><a href="blog.php">BLOG</a></li>
                <li><a href="kontak.html">KONTAK</a></li>
            </ul>
        </nav>
    </header>

    <div class="container">
        <h2>Blog</h2>
        <?php
        // connect.php logic
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "my_database";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Fetch blogs
        $sql = "SELECT id, title, content, created_at FROM blogs ORDER BY created_at DESC";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<div class='blog-post'>";
                echo "<h3>" . $row["title"] . "</h3>";
                echo "<p>" . $row["content"] . "</p>";
                echo "<small>Posted on " . date('F j, Y, g:i a', strtotime($row["created_at"])) . "</small>";
                echo "</div>";
            }
        } else {
            echo "0 results";
        }
        $conn->close();
        ?>
    </div>
</body>
</html>
