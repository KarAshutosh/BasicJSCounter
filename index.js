let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let errorEl = document.getElementById("error-msg")
let savedMsg = document.getElementById("saved-msg")


function increment() {
    count += 1
    countEl.textContent = count
    errorEl = ""
    errorEl.textContent = ""
    savedMsg.textContent = ""
}

function save() {
    console.log("Noted")
    let countStr = count + " - "
    saveEl.textContent = saveEl.textContent + countStr
    countEl.textContent = 0 //innerText alt but showing hidden (non-human readable) characters
    count = 0
    errorEl.textContent = "No input yet"
    console.log(errorEl)
    savedMsg.textContent = "Noted number"    
}

console.log("Let's start counting!")
