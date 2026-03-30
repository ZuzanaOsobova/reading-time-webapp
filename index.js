console.log("Hello World")

function calculateTime(){
    console.log("Calculating")
    const type = document.getElementById("type_math").value;
    const text = document.getElementById("text_math").value;
    const what = document.getElementById("minute_page").value;
    const num = document.getElementById("number").value;

    console.log(`Type: ${type}`)
    console.log(`Text: ${text}`)
    console.log(`Minutes of pages? ${what}`)
    console.log(`Number: ${num}`)

    console.log(JSON.parse(localStorage))
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

    console.log(localStorage)

    document.getElementById("saveStats").reset()
})