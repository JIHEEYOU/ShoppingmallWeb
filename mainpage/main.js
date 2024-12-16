// script.js

// 샘플 상품 데이터
const products = [
  {
    id: 1,
    name: "상품 1",
    price: 10000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "상품 2",
    price: 20000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "상품 3",
    price: 30000,
    image: "https://via.placeholder.com/150",
  },
];

// 상품 목록을 렌더링하는 함수
function renderProducts() {
  const productList = document.querySelector(".product-list");
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₩${product.price.toLocaleString()}</p>
            <button class="buy-button" data-id="${product.id}">구매하기</button>
        `;
    productList.appendChild(productCard);
  });

  // 버튼 이벤트 추가
  document.querySelectorAll(".buy-button").forEach((button) => {
    button.addEventListener("click", handleBuy);
  });
}

// 구매하기 버튼 클릭 핸들러
function handleBuy(event) {
  const productId = event.target.dataset.id;
  const product = products.find((p) => p.id == productId);
  alert(`${product.name}를(을) 구매하셨습니다!`);
}

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
