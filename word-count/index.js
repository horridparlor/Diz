const wordCountPrefix = "Word Count: ";

function updateWordCount() {
    document.getElementById("count").innerHTML = wordCountPrefix + getWordCount();
}

function getWordCount() {
    return document.getElementById("words").value.split(" ").filter(word => word.replace(/[^a-z0-9]/gi, "").length).length;
}