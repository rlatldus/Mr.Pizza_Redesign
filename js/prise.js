let pizzaMenu = [
  {
    id: "#OP0201",
    name: "포개더",
    type: "골드",
    smallPrice: 32000,
    largePrice: 39500,
    image: "	https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314151710070.jpg",
  },
  {
    id: "#OP0202",
    name: "포개더",
    type: "크림치즈",
    smallPrice: 32000,
    largePrice: 49500,
    image: "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/20233141521172.jpg",
  },
  {
    id: "#OP0203",
    name: "포개더",
    type: "오리진",
    smallPrice: 31000,
    largePrice: 38500,
    image: "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314142859082.jpg",
  },
  {
    id: "#OP0204",
    name: "포개더",
    type: "치즈캡",
    smallPrice: 35500,
    largePrice: 43000,
    image: "https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314153028392.jpg",
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
let gold;

for (let x; x < pizzaMenu.length; x++) { // 나중에 수정할 것 ㅜㅜ
   gold = document.querySelector(pizzaMenu[x].id).addEventListener("click", (e) => {
    e.preventDefault();
    menuImg[0].src = pizzaMenu[x].image;
    elementM.innerText = pizzaMenu[x].smallPrice;
    elementL.innerText = pizzaMenu[x].largePrice;
    pizzaType = pizzaMenu[x].type;
    elementmenutitle.innerText = pizzaMenu[x].type;
  });
}
// const creamcheeze = document.querySelector(pizzaMenu[1].id).addEventListener("click", (e) => {
//   e.preventDefault();
//   change(1);
// });
// const origin = document.querySelector(pizzaMenu[2].id).addEventListener("click", (e) => {
//   e.preventDefault();
//   change(2);
// });
// const cheezerap = document.querySelector(pizzaMenu[3].id).addEventListener("click", (e) => {
//   e.preventDefault();
//   change(3);
// });
// const eggtart = document.querySelector("pizzaMenu[4].id").addEventListener("click", (e) => {
//   e.preventDefault();
//   change(4);
// });

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

function sumInputValues() {
  // 장바구니 토탈 수
  const spinner = document.querySelectorAll(".spinner");
  let total = 0;

  for (let i = 0; i < spinner.length; i++) {
    const value = Number(spinner[i].value);
    total += value;
  }
  return total;
}

function getSelectedRadioLabel() {
  let totalprise = 0;
  //NOTE 장바구니 모양 클릭
  const total = sumInputValues();
  console.log(menuOptionAll, "dfdd");
  if (menuOptionAll.length < 5 || total < 5) {
    const Menu = document.getElementsByName("Menu"); // 라디오 버튼
    let pizzaSize;
    let pizzaPrise;
    const deliveryTextprise = document.getElementsByClassName("deliveryTextprise")[0];

    for (let i = 0; i < Menu.length; i++) {
      if (Menu[i].checked) {
        i == 0 ? (pizzaSize = "M") : (pizzaSize = "L");
        pizzaPrise = Menu[i].nextElementSibling.innerText;
        totalprise += Number(pizzaPrise);
      }
    }
    deliveryTextprise.innerHTML = totalprise;
    console.log(totalprise);

    menuOption.innerHTML = `
  <li class="menuOption">
  <p>포개더-${pizzaType} </p>
  <span>${pizzaSize}</span>
  <div class="sum">
  <input class="spinner" type="text" value='1'>
  <button class="plusPrise" onclick="pluse(this)">+</button>
  <button class="downPrise" onclick="down(this)">-</button>
  </div>
  <span class="optionPrise">${pizzaPrise}</span>
  <button onclick="removeList(this)">닫기</button>
  </li>
  `;
    deliveryMenuoption.insertAdjacentHTML("afterbegin", menuOption.innerHTML);
  }
}
// }

function pluse(button) {
  //플러스 버튼 클릭 시 1플러스
  const total = sumInputValues();
  const spinner = button.parentNode.querySelector(".spinner");
  if (total < 5) {
    spinner.value = Number(spinner.value) + 1;
  } else {
    alert("수량은 5개까지 입니다. 문의주세요");
  }
}
function down(button) {
  //마이너스 버튼 클릭 시 1마이너스
  const total = sumInputValues();
  const spinner = button.parentNode.querySelector(".spinner");
  if (total <= 5) {
    spinner.value = Number(spinner.value) - 1;
    spinner.value = spinner.value >= 0 ? spinner.value : 0;
  }
  if ((spinner.value = 0)) {
    removeList(); //NOTE - 수정피료
  }
}

function removeList(button) {
  const menuOption = button.closest(".menuOption");
  menuOption.parentNode.removeChild(menuOption);
}
