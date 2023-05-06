function setDialogue(data) {
    var i = 1;
    assignElement("dialogue", data[0]);
    getOptions().forEach(option => {
        if (data.length > i) {
            option.innerHTML = data[i];
            option.style.display = "flex";
        } else {
            option.style.display = "none";
        }
        i++;
    });
    assignElement("option-one", data[1]);
    assignElement("option-two", data[2]);
}

function getOptions() {
    return [getOption("one"), getOption("two"), getOption("three"), getOption("four")];
}

function getOption(number) {
    return document.getElementById("option-" + number);
}

function assignElement(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
}

function showRules() {
    setDialogue(getRules());
}

function onOptionChosen(option) {
    setDialogue(routeOption(option));
}

window.onload = showRules;