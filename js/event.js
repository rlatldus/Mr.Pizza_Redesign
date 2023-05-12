function slide(x) {
  //{alert("ok");
  var box = x.getAttribute('class'); //사용자가 클릭한 a의 속성class의 값을 담아둔다
  if (box == 'one') {
    //첫 번째 이미지가 one이라면 첫번째 이미지 보여줌
    document.getElementById('slide').style.left = '0px';
  } else if (box == 'two') {
    //두번째 이미지가 two이라면 두번째 이미지 보여줌
    document.getElementById('slide').style.left = '-565px';
  } else if (box == 'three') {
    //세번째 이미지가 three이라면 세번째 이미지 보여줌
    document.getElementById('slide').style.left = '-1130px';
  }
}
