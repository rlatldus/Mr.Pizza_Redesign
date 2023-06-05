const modalart = (e) => {
  // 모달 생성
  e.preventDefault();
  document.body.appendChild(modalDiv);
  modalDiv.appendChild(innerDiv);
  document.body.insertBefore(modalDiv, document.body.firstChild);
};

const close = () => {
  //모달 닫기
  document.body.removeChild(modalDiv);
  modalDiv.removeChild(innerDiv);
};

const modalButton = document.querySelector(".pzzmodal").addEventListener("click", modalart); // 생성

const modalDiv = document.createElement("div");
modalDiv.classList.add("modal");
//팝업 내용
const innerDiv = document.createElement("div"); // 스타일 추가
innerDiv.classList.add("inner"); //스타일 추가
innerDiv.innerHTML = `
<img src="./../imge/modal.png" alt=""/>
`;
//모달 생성

modalDiv.addEventListener("click", close); //삭제

const pizzaModal = document.querySelector(".pop_123123");
const btn_close = document.querySelector(".btn_close");
const memo03 = document.querySelector(".charge");

memo03.addEventListener("click", function (e) {
  e.preventDefault();
  show(pizzaModal);
});

btn_close.addEventListener("click", function (e) {
  e.preventDefault();
  hidden(pizzaModal);
});

//모달창 모듈
function show(showItem) {
  showItem.style.display = "block";
}

function hidden(hiddenItem) {
  hiddenItem.style.display = "none";
}

let okButton = document.querySelectorAll(".button_btn")[0];
let cancleButton = document.querySelectorAll(".button_btn")[1];
cancleButton.addEventListener("click", function (e) {
  e.preventDefault();
  alert("취소");
  hidden(pizzaModal);
});
okButton.addEventListener("click", function (e) {
  e.preventDefault();
  alert("확인");
  hidden(pizzaModal);
});