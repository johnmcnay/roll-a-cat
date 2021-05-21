
const imgContainer = document.querySelector("#img-container");
const rollBtn = document.querySelector("#roll-btn")

function rollForCat() {
    fetch("http://aws.random.cat/meow")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let img = document.createElement("img");
            img.src = data.file;
            img.style.maxWidth = 400;
            imgContainer.innerHTML = "";
            imgContainer.appendChild(img);


        });
}

rollForCat();

rollBtn.addEventListener("click", () => {

    rollForCat();
})