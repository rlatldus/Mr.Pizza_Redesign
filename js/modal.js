const modalart = (e) => { // 모달 생성
    e.preventDefault()
    document.body.appendChild(modalDiv);
    modalDiv.appendChild(innerDiv);
        document.body.insertBefore(modalDiv, document.body.firstChild);

};

const close =()=>{ //모달 닫기
    document.body.removeChild(modalDiv);
    modalDiv.removeChild(innerDiv);
}

const modalButton = document.querySelector(".pzzmodal").addEventListener("click", modalart); // 생성


const modalDiv = document.createElement("div");
modalDiv.classList.add("modal");
//팝업 내용
const innerDiv = document.createElement("div"); // 스타일 추가
innerDiv.classList.add("inner"); //스타일 추가
innerDiv.innerHTML = `
<div><img src="./../imge/modal.png" alt=""/></div>
`;
// const modalButtonremove = document.querySelector("#modalButtonremove")
// modalButtonremove.addEventListener("click", close); // 생성


//모달 생성

modalDiv.addEventListener("click", close); //삭제
