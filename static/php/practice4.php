<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Multiplication Table</title>
    <style>
        table {
            border-collapse: collapse;
            margin: 10px auto;
        }

        th, td {
            border: 1px solid black;
            padding: 8px;
        }

        th:first-child,
        td:first-child {
            background-color: lightgray; 
        }

        tr:first-child th {
            background-color: lightgray; 
        }
    </style>
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $number = $_POST["number"];
    echo "<h2>Multiplication Table of $number</h2>";
    echo "<table>";
    echo "<tr><th>X</th>";
    for ($i = 1; $i <= $number; $i++) {
        echo "<th>$i</th>";
    }
    echo "</tr>";
    for ($i = 1; $i <= $number; $i++) {
        echo "<tr><th>$i</th>";
        for ($j = 1; $j <= $number; $j++) {
            echo "<td>" . ($i * $j) . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
}
?>
</body>
</html>
