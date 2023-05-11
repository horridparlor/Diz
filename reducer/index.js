function reduce() {
    var words = document.getElementById("words");
    words.value = words.value.replace(/ |\n/g, "");
    console.log(222, words);
}