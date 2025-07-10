// !INFO: Progress bar
const progressBar = document.querySelector(".my-progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;

  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

  progressBar.style.width = `${scrollPercent}%`;
});

// !INFO: Cards dynamic

const productsList = [
  {
    name: "Wooden Single Drawer",
    original_price: 135.78,
    discounted_price: 122.2,
    discount_percent: 15,
    featured: false,
    image_url: "assets/product1.png",
    rating: 4.3,
  },
  {
    name: "Wooden Serving Bowl",
    original_price: 99.99,
    discounted_price: 84.99,
    discount_percent: 12,
    featured: true,
    image_url: "assets/product2.png",
    rating: 4.8,
  },
  {
    name: "Wooden Glass",
    original_price: 29.99,
    discounted_price: 26.39,
    discount_percent: 18,
    featured: false,
    image_url: "assets/product3.png",
    rating: 3.2,
  },
  {
    name: "Wooden Cup",
    original_price: 19.99,
    discounted_price: 16.39,
    discount_percent: 15,
    featured: false,
    image_url: "assets/product4.png",
    rating: 4.2,
  },
  {
    name: "Wooden Coffee Mug",
    original_price: 14.99,
    discounted_price: 12.74,
    discount_percent: 20,
    featured: true,
    image_url: "assets/product5.png",
    rating: 4.7,
  },
  {
    name: "Wooden Brush",
    original_price: 9.99,
    discounted_price: 7.99,
    discount_percent: 15,
    featured: false,
    image_url: "assets/product6.png",
    rating: 3.4,
  },
  {
    name: "Wooden Bottles",
    original_price: 24.99,
    discounted_price: 21.24,
    discount_percent: 25,
    featured: true,
    image_url: "assets/product7.png",
    rating: 4.1,
  },
  {
    name: "Luxury Chair",
    original_price: 799.99,
    discounted_price: 599.24,
    discount_percent: 25,
    featured: true,
    image_url: "assets/product8.png",
    rating: 4.6,
  },
];

const cardsHolder = document.querySelector("#products .row");
let prods;

function addCards(products) {
  products.forEach((prod) => {
    let card = `<div class="col-lg-3 col-md-6 position-relative">
              <div class="d-flex flex-column position-relative">
                ${
                  prod.featured
                    ? `<div class="featured position-absolute top-0 end-0">
                      Featured
                    </div>`
                    : ""
                }
                <div class="discount position-absolute top-0 start-0">15%</div>
                <div
                class="action position-absolute d-flex justify-content-center align-items-stretch row px-2 gap-2"
              >
                <div class="col h-100 px-0">
                  <button class="btn-main">Quick View</button>
                </div>
                <div class="col-7 h-100 d-flex justify-content-end gap-3">
                  <div class="h-100">
                    <button class="btn-main">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </button>
                  </div>
                  <div class="h-100">
                    <button class="btn-main">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
                <div class="card-img">
                  <img src="${prod.image_url}" class="w-100" alt="" />
                </div>
                <div
                  class="card-title py-4 px-2 bg-white p-1 d-flex flex-column gap-0 justify-content-center align-items-center"
                >
                  <h6 class="mb-1">${prod.name}</h6>
                  <span class="rating mb-1">${renderStarsInline(
                    prod.rating
                  )}</span>
                  <div class="prices d-flex justify-content-evenly gap-3">
                    <span class="old-price">$${prod.discounted_price}</span>
                    <span class="price">$${prod.original_price}</span>
                  </div>
                </div>
              </div>
            </div>`;
    cardsHolder.innerHTML += card;
  });
}

// INFO: Managing stars
const fullStarSVG = `
<i class="fa-solid fa-star"></i>`;

const halfStarSVG = `
<i class="fa-solid fa-star-half-stroke"></i>`;

const emptyStarSVG = `
<i class="fa-solid fa-star empty"></i>`;
addCards(productsList);

function renderStarsInline(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    fullStarSVG.repeat(full) +
    (half ? halfStarSVG : "") +
    emptyStarSVG.repeat(empty)
  );
}

// !INFO: Carousel
const track = document.querySelector("#recent .carousel-track");
const slides = track.querySelectorAll(".carousel-slide");
let index = 0;
let slideWidth = 330;
let maxIndex = slides.length - 4;

if (window.innerWidth <= 992) {
  slideWidth = 280;
  maxIndex = slides.length - 2;
}
if (window.innerWidth <= 768) {
  slideWidth = 300;
  maxIndex = slides.length - 1;
}
if (window.innerWidth <= 640) {
  slideWidth = 520;
  maxIndex = slides.length - 1;
}
if (window.innerWidth <= 500) {
  slideWidth = 360;
  maxIndex = slides.length - 1;
}

function changeSlide() {
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

const nextBtn = document.querySelector("#recent button.next");
nextBtn.addEventListener("click", () => {
  index = index + 1 > maxIndex ? 0 : index + 1;
  changeSlide();
});

const prevBtn = document.querySelector("#recent button.prev");
prevBtn.addEventListener("click", () => {
  index = index - 1 < 0 ? maxIndex : index - 1;
  changeSlide();
});

setInterval(() => {
  index = index + 1 > maxIndex ? 0 : index + 1;
  changeSlide();
}, 3500);
