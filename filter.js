const data = [
    {
        id: 1,
        name: "LOUIS GENEVE quarts Pro ",
        img: "https://www.pngarts.com/files/2/Watch-PNG-High-Quality-Image.png",
        price: 74,
        cat: "Dress",
    },
    {
        id: 2,
        name: "Invicta Men's Pro Diver 2",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74,
        cat: "Dress",
    },
    {
        id: 3,
        name: "Timex Men's Expedition Scout ",
        img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
        price: 40,
        cat: "Sport",
    },
    {
        id: 4,
        name: "Breitling Superocean Heritage",
        img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
        price: 200,
        cat: "Luxury",
    },
    {
        id: 5,
        name: "Casio Classic Resin Strap ",
        img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
        price: 16,
        cat: "Sport",
    },
    {
        id: 6,
        name: "Garmin Venu Smartwatch ",
        img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
        price: 74,
        cat: "Casual",
    },
    {
        id: 7,
        name: "Garmin Venu Smartwatch ",
        img: "https://www.pngarts.com/files/2/Watch-Transparent-Image.png",
        price: 120,
        cat: "Classic",
    },
    {
        id: 8,
        name: "Garmin Venu Smartwatch ",
        img: "https://www.pngarts.com/files/2/Watch-PNG-Picture.png",
        price: 180,
        cat: "Vintage",
    },
    {
        id: 9,
        name: "Garmin Venu Smartwatch ",
        img: "https://www.pngarts.com/files/2/Watch-Free-PNG-Image.png",
        price: 90,
        cat: "Cool",
    },
];

const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".categories")
const priceRange = document.querySelector(".price-range")
const priceValue = document.querySelector(".price-value")

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map((product) =>
        `
        <div class="product">
            <img
              src=${product.img}
              alt=""
            />
            <span class="name">${product.name}</span>
            <span class="price-text">$ ${product.price}</span>
          </div>
        `
    ).join("");
};

displayProducts(data)


searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))
    } else {
        displayProducts(data)
    }
})

const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
        "All",
        ...allCats.filter((item, i) => {
            return allCats.indexOf(item) === i;
        }),
    ];

    categoriesContainer.innerHTML = categories
        .map(
            (cat) =>
                `
        <span class="category">${cat}</span>
      `
        )
        .join("");

    categoriesContainer.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;

        selectedCat === "All"
            ? displayProducts(data)
            : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
};
const setPrices = () => {
    const priceList = data.map((item) => item.price)
    const minPrice = Math.min(...priceList)
    const maxPrice = Math.max(...priceList)

    priceRange.min = minPrice
    priceRange.max = maxPrice
    priceRange.value = maxPrice

    priceValue.textContent = "$" + maxPrice

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter((item) => item.price <= e.target.value));
    });
};

setCategories()
setPrices()
