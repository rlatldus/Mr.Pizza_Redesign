## Title - Mr.Pizza_Redesign

### Currency_exchange

기존 미스터피자 웹페이지의 부족한 부분을 변경해보았다. 우선 반응형으로 변경했고, 정적인 헤더 부분을 동적으로 심플하게 만들었다.

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

|                                                           Before                                                           | Result                                                                                                                                                                                                                                                                                                                       |
| :------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/64f0e35a-da7d-48c3-ae5b-a6c4fb9a52ef" style="width: 400px;" alt="Blackjack"></div> |<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/49d8fcbe-3ed2-4073-9260-07d3c3aceb0b" style="width: 400px;" alt="Blackjack"></div>|

<br>

|                                                           Before                                                           | Result                                                                                                                                                                                                                                                                                                                       |
| :------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/f1745760-3330-4157-ab91-2fd13706af5d" style="width: 400px;" alt="Blackjack"></div>|<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/df8bcc92-f1ba-4bfe-8b88-201490d4ed87" style="width: 400px;" alt="Blackjack"></div>|

<br>

|                                                           Before                                                           | Result                                                                                                                                                                                                                                                                                                                       |
| :------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/6e38899c-3534-4b1c-98cd-dc6d1c23253a" style="width: 400px;" alt="Blackjack"></div> |<div><img src="https://github.com/rlatldus/Mr.Pizza_Redesign/assets/122216298/29e3623a-c314-4f2a-803d-fc66390fe56e" style="width: 400px;" alt="Blackjack"></div>|

<br>

<!-- 기간 --!>

### Taken time

<b>period</b> : 14 May ~ 24 May (during 11 days)
<b>taken time</b> : 10 hours

<br>
<!-- 아키텍쳐 -->

### Function <br>

| Function       | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| changeCurrency | <b>✔️' .currency_li ' click시 실행되는 함수.</b> <br>1️⃣ className에 ' from_li '가 들어있다면, 상단의 ' .exchange_box '로, 아니면 하단으로 구분한다. <br>2️⃣ 클릭한 ' .currency_li '의 innerText를 해당하는 변수(fromCurrency / toCurrency)에 할당한다.<br>3️⃣ 함수 convert를 통해 환전한다. <br> 4️⃣ 함수 changeBtn을 통해 해당하는 변수(fromCurrency / toCurrency)의 값을 적용하여, '.currency_btn'과 unit의 UI를 변경한다. <br> |
| changeUI       | ✔️<b>함수 changeCurrency를 실행하면 실행되는 함수.</b> <br> 1️⃣ type을 전달받아(front/to) 해당하는 '.currency_btn'의 textContent에 currency의 값을 전달해 btn의 UI를 변경한다.<br>2️⃣ 단위를 표시하는 ' .input_box\_\_txt '의 UI를 변경한다.                                                                                                                                                                                     |
| convert        | 🌟<b>Main : exchanging currency</b> <br>✔️from-to, to-from에 필요한 수식을 각 변수에 할당하였다. <br>1️⃣ 전달받은 type에 따라 변수(fromToCurrency / toFromCurrency)를 활용하여 환전한다. <br>2️⃣ toLocaleString()을 통해 1000 단위마다 ,를 찍어준다. <br> &nbsp; &nbsp; &nbsp; - input의 value의 type이 number일 때, 사용할 수 있어, Number로 감싸주었다.                                                                        |

<br>

### 느낀점 : type의 중요성을 알았다

1️⃣ input을 입력할 때 바로 1000단위마다 콤마가 나타나게 하고 싶었는데, toLocaleString()함수를 적용하게 되면, 값에 콤마를 포함하게 되고 type이 num => string으로 바뀌게 되어, 값을 수정할 때, 오류가 생겼다.

<br>2️⃣ 그래서 input을 하나 더 만들어, 콤마를 찍어주고 수정이 불가하게 만들고 toLocaleString()을 사용하려 하였으나, 사용이 되지 않아 type을 확인해보니 string이었다.

<br>3️⃣ 그래서 Number()를 활용하여 type을 Number로 바꾸고 toLocaleString()을 사용하여 1000단위로 콤마를 찍을 수 있었다.



# Mr.Pizza_Redesign

## 미스터피자 웹 페이지 리디자인


## 실제 웹사이트
https://www.mrpizza.co.kr/

심다영, 유정진, 김시연학우분과 팀프로젝트를 진행 시작였습니다.

5/1~

-메인페이지
-서브페이지
 -주문하기
 -메뉴
 -이벤트
