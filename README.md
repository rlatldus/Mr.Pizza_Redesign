# Mr.Pizza_Redesign
기존 미스터피자 웹페이지의 부족한 부분을 변경해보는게 목표<br />
- **`Team name` :** diarychatbot ( 미스터피자사이트 리디자인 )
- **`Project duration` :** 2023.04.20 - 2023.06.14
- **`Team members` :** 김시연, 심다영
- **`Link` :** [Mr.Pizza_Redesign 방문하기](https://rlatldus.github.io/Mr.Pizza_Redesign/menu.html)

![image](https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/ce816473-9e40-4010-8176-aab7ed1dc6dc)


### Currency_exchange
-메인페이지
-메뉴페이지
-이벤트페이지
-회원가입페이지
 
<!-- Stack(기술) -->

### Stack

<p>
<!-- Code logo -->
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/SCSS-1572B6?style=flat-square&logo=SCSS&logoColor=white"/>
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
</p>

<br>

### Result <a href="https://rlatldus.github.io/Mr.Pizza_Redesign/menu.html">(<u>Link:Click</u>👆🏻)</a>

<br>
<br>
<br>
<br>
<br>

![2023032101000902600067071](https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/97c76706-1731-464c-b6ba-a572fa74a9e4)

<br>
<br>




### wireframe

  Main   |  Menu  |  Event 
 :----: | :---: |:---: 
![image](https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/69dcfb78-4ef9-4121-9653-e161552d1ae2) | ![image](https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/ff445884-b06c-46ac-a68e-b599e605373f) | ![image](https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/0abb9fb1-4c8a-4a00-8ad6-a86432f3045f)




| Before  | Result |
| :----: | :----: |
|<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/64f0e35a-da7d-48c3-ae5b-a6c4fb9a52ef" style="width: 400px;" alt="Blackjack"></div> |<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/49d8fcbe-3ed2-4073-9260-07d3c3aceb0b" style="width: 400px;" alt="Blackjack"></div>|

<br>

| Before  | Result |
| :----: | :----: |
|<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/f1745760-3330-4157-ab91-2fd13706af5d" style="width: 400px;" alt="Blackjack"></div>|<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/df8bcc92-f1ba-4bfe-8b88-201490d4ed87" style="width: 400px;" alt="Blackjack"></div>|

<br>

| Before  | Result |
| :----: | :----: |
|<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/6e38899c-3534-4b1c-98cd-dc6d1c23253a" style="width: 400px;" alt="Blackjack"></div> |<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/29e3623a-c314-4f2a-803d-fc66390fe56e" style="width: 400px;" alt="Blackjack"></div>|

<br>

<!-- 기간 --!>

### Taken time

<br>period</b> : 1 May ~ 15 jun (during 45 days)
<br>taken time</b> : 80 hours

<br>
<!-- 아키텍쳐 -->

### Function <br>

 Function  | Description   
 --------- | ------ 
| constructor function | <b>✔️ `const pizzaMenus = [ pizzaMenu1, pizzaMenu2, pizzaMenu3, pizzaMenu4, pizzaMenu5, pizzaMenu6, pizzaMenu7, pizzaMenu8, pizzaMenu9, pizzaMenu10];`</b> 로 생성자 함수 실행. <br> 1️⃣ `pizzaMenu`에 'id, name, type, smallPrice, largePrice, image'가 들어있다. <br> 2️⃣ `pizzaMenus.length`를 이용하여,select(10가지의 메뉴의 메뉴 선택을 의미)를 선언하여 해당하는 변수(select)에 할당한다.<br> |
| getSelectedRadioLabel() | ✔️<b> 장바구니 클릭 시 함수 getSelectedRadioLabel를 실행.</b> <br> 1️⃣ `pizzaName`, `menutitle`, `pizzaSize`, `pizzaPrise`, `Menu[i].checked`(radio 버튼의 값)을 `menuOption`(장바구니 모달)에 전달. 2️⃣ ` deliveryMenuoption.insertAdjacentHTML("afterbegin", menuOption.innerHTML);`로 모달에 값들을 뛰워준다. |
| pluse(button),  down(button), removeList(button)  | 🌟<b>각각의 li들의 플러스, 마이너스, 취소 이벤트</b> <br>✔️total이 5개 이하일때 이벤트 발생 <br>1️⃣ `Menu[i].checked`(radio 버튼의 값)을 전달 받아 `pizzaPrise`를 변경하고 `totalprise += Number(pizzaPrise);` 계산하여 총합을 환전한다.<br> 2️⃣ removeList(button)을 통해 `parentNode.removeChild(menuOption)`와 더불어 총합에서 '-'된다. <br>                                                                      |

<br>

### 느낀점 : type의 중요성을 알았다

1️⃣ input을 입력할 때 바로 1000단위마다 콤마가 나타나게 하고 싶었는데, toLocaleString()함수를 적용하게 되면, 값에 콤마를 포함하게 되고 type이 num => string으로 바뀌게 되어, 값을 수정할 때, 오류가 생겼다.

<br>2️⃣ 그래서 input을 하나 더 만들어, 콤마를 찍어주고 수정이 불가하게 만들고 toLocaleString()을 사용하려 하였으나, 사용이 되지 않아 type을 확인해보니 string이었다.

<br>3️⃣ 그래서 Number()를 활용하여 type을 Number로 바꾸고 toLocaleString()을 사용하여 1000단위로 콤마를 찍을 수 있었다.



