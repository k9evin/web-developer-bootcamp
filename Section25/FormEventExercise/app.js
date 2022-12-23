// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const listContainer = document.querySelector("#list");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addToList(productInput.value, qtyInput.value);

    productInput.value = '';
    qtyInput.value = '';
});

const addToList = (product, qty) => {
    const newItem = document.createElement("li");
    newItem.innerText = `${qty} ${product}`;
    console.log(newItem);
    listContainer.appendChild(newItem);
};
