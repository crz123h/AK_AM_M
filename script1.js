function searchWeapons() {
    const query = document.getElementById("search-box").value.toLowerCase();
    const weaponItems = document.querySelectorAll(".weapon-item");

    weaponItems.forEach(item => {
        const title = item.querySelector("h3").textContent.toLowerCase();
        if (title.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function filterByPrice() {
    const price = document.getElementById("price-range").value;
    const weaponItems = document.querySelectorAll(".weapon-item");

    weaponItems.forEach(item => {
        const priceValue = parseInt(item.dataset.price);
        if (priceValue <= price) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}