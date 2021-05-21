
const catImg = document.querySelector("#cat-img");
const foxImg = document.querySelector("#fox-img");
const catBtn = document.querySelector("#cat-btn");
const foxBtn = document.querySelector("#fox-btn");


catBtn.addEventListener("click", () => {
    rollForFox();
})

foxBtn.addEventListener("click", () => {
    rollForCat();
})

function rollForCat() {
    fetch("http://aws.random.cat/meow")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let img = document.createElement("img");
            img.src = data.file;
            img.style.maxWidth = 400;
            catImg.innerHTML = "";
            catImg.appendChild(img);
        });
}

function rollForFox() {
    fetch("https://randomfox.ca/floof/")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let img = document.createElement("img");
            img.src = data.image;
            img.style.maxWidth = 400;
            foxImg.innerHTML = "";
            foxImg.appendChild(img);
        });
}

rollForCat();
rollForFox();
