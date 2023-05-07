<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Max-Age: 5");

include("../system/Database.php");

function getDialogueAndOptions() {
    $database = new Database();
    $connection = $database->connect();

    $dialogue = getDialogue($connection);
    $dialogue["options"] = getOptions($dialogue["id"], $connection);
    echo json_encode($dialogue);
}

function getDialogue(mysqli $connection) {
    $optionId = $_GET["option"];
    $dialogue = [];
    $query =
        "SELECT storyDialogue.id, storyDialogue.dialogue
        FROM storyOption
        JOIN storyDialogue
        ON storyOption.storyTo = storyDialogue.id
        WHERE storyOption.id = " . $optionId;

    $result = $connection->query($query);
    while ($row = mysqli_fetch_assoc($result)) {
        $dialogue["id"] = $row["id"];
        $dialogue["text"] = $row["dialogue"];
    }
    return $dialogue;
}

function getOptions(int $dialogueId, mysqli $connection) {
    $options = [];
    $query =
        "SELECT storyOption.id, storyOption.optionName
        FROM storyDialogue
        JOIN storyOption
        ON storyDialogue.id = storyOption.storyFrom
        WHERE storyDialogue.id = " . $dialogueId;
    $result = $connection->query($query);
    while ($row = mysqli_fetch_assoc($result)) {
        $option = [];
        $option["id"] = $row["id"];
        $option["name"] = $row["optionName"];
        array_push($options, $option);
    }

    return $options;
}

getDialogueAndOptions();