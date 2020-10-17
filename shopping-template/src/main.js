"use strict"

//Fecth the items from the JSON file
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// Update the list with the given items
//html요소로 변환시켜 표시되도록 하기
// 한가지의 배열 형태에서 다른 배열 형태로 변환하는 mapping
function displayItems(items) {
    const container = document.querySelector('.items');
    // innerHTML를 이용해서 li 그룳으로 만들어서 container에 추가
    // createHTMLStringg 함수를 이용해 만들어보자!
    // 문자열에 있는 배열을 한가지 문자열로 병합하기는 join
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}


// Creat HTML list item from the given data item
function createHTMLString(item) {
    // ``를 이용해서 안에 li를 내용을 넣어줌. 바뀌는 내용은 ${}을 활용
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item_description">${item.gender}, ${item.size} </span>
    </li>
    `;
}

// 필터링 할 수 있게 하기
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    // 필터링할 값이 없으면 함수를 빨리 끝내고 둘다 들어있을 때만 해당하는 키와 데이터를 보여주도록함
    if (key == null || value == null) {
        return;
    }

    // 어떤 배열에 특정한 data만 추출해서 새로운 작은 배열의 단위를 만들때는 filter
    // item object안에 key와 value가 동일한 값만 filter해서 displayItems로 전달
    // object는 array(배열) 처럼 [key]를 이용해 data에 접근 가능
    // 즉, item 안에 key가 우리가 원하는 value와 똑같은 값만 전달
    const filtered = items.filter(item => item[key] === value);
    displayItems(filtered);

}

// 버튼일 눌렀을 때 동작하도록 정의해보자!
// 하나하나의 이벤트 리스너를 반복해서 등록하는 것보다 
// button들이 들어있는 container에 이벤트 리스너를 등록해서 한 곳에서만 통제하도록 함
function setEvenListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// Main
// 먼저 큰 전략을 짜기! 이렇게 이런 함수를 만들어야지!
loadItems() //아이템을 받아오기
    .then(items => {
        displayItems(items); // 아이템 진열하기
        setEvenListeners(items); //아이템 필터링하기
    })
    .catch(console.log)

