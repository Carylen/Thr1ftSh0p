const success = document.querySelector(".success")
const failed = document.querySelector(".failed")
const waiting = document.querySelector(".waiting")


if (success) {
    success.style.display = "block"
} else if (failed) {
    failed.style.display = "block"
} else if (waiting) {
    waiting.style.display = "block"
}


