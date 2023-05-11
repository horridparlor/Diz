const borderNoticable = "border-noticable";

function focusInput(id) {
    const input = document.getElementById(id);
    if (input.value) {
        !input.classList.contains(borderNoticable)? input.classList.add(borderNoticable) : null;
    } else {
        input.classList.remove(borderNoticable);
    }
}