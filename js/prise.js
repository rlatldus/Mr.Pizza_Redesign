    let pizzaMenu= [
        {
          name: '포개더',
          type: '골드',
          smallPrice: 32000,
          largePrice: 39500,
          image: '	https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314151710070.jpg'
        },
        {
          name: '포개더',
          type: '크림치즈',
          smallPrice: 32000,
          largePrice: 49500,
          image: 'https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/20233141521172.jpg'
        },
        {
          name: '포개더',
          type: '오리진',
          smallPrice: 31000,
          largePrice: 38500,
          image: 'https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314142859082.jpg'
        },
        {
          name: '포개더',
          type: '치즈캡',
          smallPrice: 35500,
          largePrice: 43000,
          image: 'https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314153028392.jpg'
        }
      ]


console.log(pizzaMenu)
const menuImg = document.querySelectorAll(".pizza1");
const gold = document.querySelector('#OP0201').addEventListener('click', function(e) {
  e.preventDefault();
  menuImg[0].src = pizzaMenu[0].image;
});
const creamcheeze = document.querySelector('#OP0202').addEventListener('click',function(e){
  e.preventDefault();
  menuImg[0].src = pizzaMenu[1].image;

})
const origin = document.querySelector('#OP0203').addEventListener('click',function(e){
  e.preventDefault();
  menuImg[0].src = pizzaMenu[2].image;

})
const cheezerap = document.querySelector('#OP0204').addEventListener('click',function(e){
  e.preventDefault();
  menuImg[0].src = pizzaMenu[3].image;

})
const eggtart = document.querySelector('#OP0205').addEventListener('click',function(e){
  e.preventDefault();
  menuImg[0].src = pizzaMenu[4].image;
})
