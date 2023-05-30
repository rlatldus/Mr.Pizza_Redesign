function pizzaMenu(name,value, priseM, priseL, img) {
    this.name = name;
    this.value = value;
    this.priseM = priseM;
    this.priseL = priseL;
    this.img = img;
}
const fogeder = "포게더";

function Pizzaoption(name){
return[
    new pizzaMenu(name,'골드',32000,39500,	'https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314151710070.jpg'  ),
    new pizzaMenu(name,'크림치즈',32000,49500,	'https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/20233141521172.jpg'  ),
    new pizzaMenu(name,'오리진',31000,38500,	'https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314142859082.jpg'  ),
    new pizzaMenu(name,'치즈캡',35500,43000,		'https://cdn.mrpizza.co.kr/2011/uploadV1/product_new/2023314153028392.jpg'  )
]
}

const Menu = [...Pizzaoption(fogeder)]
console.log(Menu)
const menuImg = document.querySelectorAll(".pizza1");
const firstmenuImg = menuImg[0].src
const gold = document.querySelector('#OP0201').addEventListener('click',function(){
    
})
console.log(firstmenuImg,"sss")