const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
btn.addEventListener("click", () => {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    h1.innerText = color;
});

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};
