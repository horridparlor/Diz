const wordCountPrefix = "Words: ";
const characterCountPrefix = "Characters: ";

function updateWordCount(id) {
    focusInput(id);
    document.getElementById("wCount").innerHTML = wordCountPrefix + getWordCount();
    document.getElementById("cCount").innerHTML = characterCountPrefix + getCharacterCount();
}

function getWordCount() {
    return document.getElementById("words").value.split(" ").filter(word => word.replace(/[^a-z0-9]/gi, "").length).length;
}

function getCharacterCount() {
    return document.getElementById("words").value.replace(/\n/gi, "").split(" ").filter(word =>word.length).join(" ").length;
}