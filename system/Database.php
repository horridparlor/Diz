<?php

include("../Credentials.php");

class Database
{
    function connect()
    {
        $credentials = new Credentials();

        $servername = $credentials->servername;
        $username = $credentials->username;
        $password = $credentials->password;
        $dbname = $credentials->dbName;

        $connection = new mysqli($servername, $username, $password, $dbname);
        if ($connection->connect_error) {
            die("Failed to connect DATABASE: " . $connection->connect_error);
        }
        return $connection;
    }
}