
const fullHeightDiv = document.getElementById('left');
const documentHeight = document.documentElement.scrollHeight; // 문서 전체의 높이
console.log(documentHeight);
fullHeightDiv.style.height = documentHeight + 'px';