<?php

include("../Credentials.php");

class Database
{
    function connect()
    {
        $credentials = new Credentials();
        $usermask = $credentials->usermask;

        $servername = $credentials->servername;
        $username = $usermask . "raisen1";
        $password = "MinustaKasvaaIsoTytto";
        $dbname = $usermask . "raisen_stories";

        $connection = new mysqli($servername, $username, $password, $dbname);
        if ($connection->connect_error) {
            die("Failed to connect DATABASE: " . $connection->connect_error);
        }
        return $connection;
    }
}