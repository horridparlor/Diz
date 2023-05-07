function getOptions() {
    var options = [];
    getOptionNumbers().forEach(optionaName => {
        options.push(getOption(optionaName));
    })
    return options;
}

function getOptionNumbers() {
    return ["one", "two", "three", "four"];
}

function getOption(number) {
    return document.getElementById("option-" + number);
}

function assignElement(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
}

async function showDialogue(optionId) {
    var i = 0;
    const dialogue = await getDialogue(optionId);
    assignElement("dialogue", dialogue.text);
    const optionsData = dialogue.options;
    getOptions().forEach(option => {
        if (optionsData.length > i) {
            assignOptionData(option, optionsData[i]);
        } else {
            option.style.display = "none";
        }
        i++;
    });
    if (!optionsData.length) {
        return showDefaultOption();
    }
}

function assignOptionData(option, optionData) {
    option.optionId = optionData.id;
    option.innerHTML = optionData.name;
    option.style.display = "flex";
}

function showDefaultOption() {
    const option = getOptions()[0];
    const optionData = {
        "id": 1,
        "name": "Palaa alkuun"
    };
    assignOptionData(option, optionData);
}

function createOptions() {
    var optionsContainer = document.getElementById("options-container");
    var index = 0;
    getOptionNumbers().forEach(optionName => {
        optionsContainer.appendChild(newOption(optionName, index));
        index++;
    })
}

function newOption(optionName, index) {
    const option = document.createElement("div");
    option.className = "boss-label clickable " + (index === 0 ? "" : "lift-right");
    option.id="option-" + optionName;
    option.optionId = 1;
    option.addEventListener("click", event => {showDialogue(option.optionId)});
    option.style.display = "none";
    return option;
}

function init() {
    createOptions();
    showDialogue(1);
}

window.onload = init;