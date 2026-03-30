console.log("Hello World")

function calculateTime(){
    console.log("Calculating")
    const type = document.getElementById("type_math").value;
    const text = document.getElementById("text_math").value;
    const what = document.getElementById("minute_page").value;
    const num = document.getElementById("number").value;

    console.log(localStorage)

    const length = localStorage.length

    let totalMinutes = 0;
    let totalPages = 0;

    for (let i = 0; i < length; i++ ) {

        const line = JSON.parse(localStorage[i])

        if (line.type === type && line.text === text) {
            totalMinutes += +line.minutes;
            totalPages += +line.pages
        }
    }

    const message = document.getElementById("answer")

    const magicNum = totalMinutes/totalPages;

    if (what === "minutes") {
        const result = Math.floor(num / magicNum)
        message.textContent = `You will read ${result} pages in ${num} minutes.`
    }

    if (what === "pages") {
        const result = Math.ceil(num * magicNum)
        message.textContent = `You will read ${num} pages in ${result} minutes.`
    }


}

document.getElementById("saveStats").addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Saving");

    const type = document.getElementById("type").value;
    const text = document.getElementById("text").value;
    const minutes = document.getElementById("minutes").value;
    const pages = document.getElementById("pages").value;

    const object = {type: type, text: text, minutes: minutes, pages : pages}

    const index = localStorage.length

    localStorage.setItem(index, JSON.stringify(object))

    document.getElementById("saveStats").reset()
})