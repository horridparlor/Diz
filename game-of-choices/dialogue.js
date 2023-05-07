async function getDialogue(optionId) {
    return fetch(domainUrl + "game-of-choices/getDialogue.php?option=" + optionId).then(res => res.json());
}