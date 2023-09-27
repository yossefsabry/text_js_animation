const text = document.querySelector(".second-text")


const textload = () => {
    setTimeout(() => {
        text.textContent = "Freelancer"
    }, 0);
    setTimeout(() => {
        text.textContent = "Bloger"
    }, 3000);
    setTimeout(() => {
        text.textContent = "Youtuber"
    }, 6000);
}

textload()

setInterval(textload, 9000)