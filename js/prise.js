let pizzaMenu = [
  {
    name: "포개더",
    type: "골드",
    smallPrice: 32000,
    largePrice: 39500,
    image:
      "	https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314151710070.jpg",
  },
  {
    name: "포개더",
    type: "크림치즈",
    smallPrice: 32000,
    largePrice: 49500,
    image:
      "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/20233141521172.jpg",
  },
  {
    name: "포개더",
    type: "오리진",
    smallPrice: 31000,
    largePrice: 38500,
    image:
      "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314142859082.jpg",
  },
  {
    name: "포개더",
    type: "치즈캡",
    smallPrice: 35500,
    largePrice: 43000,
    image:
      "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314153028392.jpg",
  },
];
let elementM = document.getElementById("M");
let elementL = document.getElementById("L");
let elementmenutitle = document.getElementById("menutitle");
let elementcart_num = document.getElementsByClassName("cart_num")[0];

// innerText 변경

console.log(pizzaMenu);
const menuImg = document.querySelectorAll(".pizza1");
const elementbasket = document.getElementsByClassName("basket")[0];
const deliveryMenuoption = document.querySelector("#deliveryMenuoption"); // 장바구니 내용
const menuOption = document.createElement("li");
let pizzaType;


const gold = document
  .querySelector("#OP0201")
  .addEventListener("click", (e) => {
    e.preventDefault();
    change(0);
    console.log(pizzaType);
  });
const creamcheeze = document
  .querySelector("#OP0202")
  .addEventListener("click", (e) => {
    e.preventDefault();
    change(1);
  });
const origin = document
  .querySelector("#OP0203")
  .addEventListener("click", (e) => {
    e.preventDefault();
    change(2);
  });
const cheezerap = document
  .querySelector("#OP0204")
  .addEventListener("click", (e) => {
    e.preventDefault();
    change(3);
  });
const eggtart = document
  .querySelector("#OP0205")
  .addEventListener("click", (e) => {
    e.preventDefault();
    change(4);
  });

const change = (x) => {
  //이미지, 사이즈 텍스트 변경
  menuImg[0].src = pizzaMenu[x].image;
  elementM.innerText = pizzaMenu[x].smallPrice;
  elementL.innerText = pizzaMenu[x].largePrice;
  pizzaType = pizzaMenu[x].type;
  elementmenutitle.innerText = pizzaMenu[x].type;
  
};

elementcart_num.innerText = 0; // 장바구니 숫자
elementbasket.addEventListener("click", (e) => {
  e.preventDefault();
  if (elementcart_num.innerText < 5) {
    elementcart_num.innerText++;
  } else {
    alert("수량은 5개까지 입니다. 문의주세요");
    return elementcart_num.innerText == 5;
  }
});
const menuOptionAll = deliveryMenuoption.getElementsByClassName("menuOption");

function getSelectedRadioLabel() {
  //NOTE 장바구니 클릭

  console.log(menuOptionAll,"dfdd")
  if(menuOptionAll.length<5){ //NOTE 장바구니 수량이 5개 이하일때 실행
    const Menu = document.getElementsByName("Menu"); // 라디오 버튼
    let pizzaSize;
    let pizzaPrise;
    
    for (let i = 0; i < Menu.length; i++) {
      if (Menu[i].checked) {
        const deliveryLabel = Menu[i].nextElementSibling.innerText;
        const deliveryTextprise =
        document.getElementsByClassName("deliveryTextprise")[0];
        deliveryTextprise.innerHTML = deliveryLabel;
        console.log(deliveryTextprise.innerHTML);
        i == 0 ? (pizzaSize = "M") : (pizzaSize = "L");
        pizzaPrise = Menu[i].nextElementSibling.innerText;
      }
    }
    
  menuOption.innerHTML = `
  <li class="menuOption">
  <p>포개더-${pizzaType} </p>
  <span>${pizzaSize}</span>
  <div class="sum">
  <input class="spinner" type="text" value="1">
  <button class="plusPrise">+</button>
  <button class="downPrise">-</button>
  </div>
  <span class="optionPrise">${pizzaPrise}</span>
  <button>닫기</button>
  </li>
  `;
  deliveryMenuoption.insertAdjacentHTML("afterbegin", menuOption.innerHTML);
}else{
  alert("수량은 5개까지 입니다. 문의주세요");
}}




const sumElements = document.querySelectorAll(".sum");
if(sumElements)
sumElements.forEach((item) => {
  const plusButton = item.querySelector(".plusPrise");
  plusButton.addEventListener("click", function() {
    alert("안녕");
  });
});