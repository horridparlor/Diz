function reduce() {
    var words = document.getElementById("words");
    const filterOuts = getFilters();
    filterOuts.forEach(filter => {
        words.value = words.value.replaceAll(filter, "");
    })
}

function getFilters() {
    var filterOuts = [];
    if (document.getElementById("rmSpace").checked) {
        filterOuts.push(" ");
    }
    if (document.getElementById("rmBreak").checked) {
        filterOuts.push("\n");
    }
    const customValue = document.getElementById("rmCustom").value;
    if (customValue) {
        filterOuts.push(customValue);
    }
    return filterOuts;
}

function onTextInput(id) {
    reduce();
    focusInput(id);
    if (id !== "words") {
        focusInput("words");
    }
}