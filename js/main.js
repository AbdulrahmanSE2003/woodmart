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
const cardsHolder = document.querySelector("#products .row");
let prods;

fetch("../data/prod.json")
  .then((res) => res.json())
  .then((data) => addCards(data));

function addCards(products) {
  products.forEach((prod) => {
    let card = `<div class="col-3 position-relative">
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
                class="action position-absolute d-flex justify-content-center align-items-stretch row px-4 gap-0"
              >
                <div class="col h-100 px-0">
                  <button class="btn-main">Quick View</button>
                </div>
                <div class="col-7 h-100 d-flex justify-content-center gap-3">
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
