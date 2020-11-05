const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

// 이벤트를 처리하는 함수는 보통 on 이라고 붙임 (onClick, onAdd, on Delete 처럼)
function onAdd() {
    // 1. 사용자가 입력한 text를 받아와야함
    const text = input.value; // value라는 값을 받아올 수 있음
    // 아무것도 안쓰여져 있을때 함수 나갈꺼임
    if(text === '') {
        // 함수를 나갈때 나가는 버튼에 다시 focus에 초첨이 맞춰지기 때문에
        // input에 focus 해줘야함
        input.focus();
        return;
    }

    // 2. 새로운 아이템 만듬(텍스트 + 삭제 버튼이 추가되어야함)
    // 이 함수를 만들거야!
    // 전달받은 text를 전달 할것임
    const item = createItem(text);
    
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);

    //4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});
    // 5. 인풋을 초기화한다.
    input.value = '';
    // focus를 안주면 다시 input을 클릭하고 입력하는 복잡함이 생김
    input.focus();
}

// 전달받은 (text)
function createItem(text) {
    // li를 만들어서 item과 divider를 
    const itemRow = document.createElement('li'); // li 태그 생성
    itemRow.setAttribute('class','item__row'); // class를 지정

    const item = document.createElement('div'); // div 태그 생성
    item.setAttribute('class','item'); // class를 지정

    const name = document.createElement('span'); // span 태그 생성
    name.setAttribute('class', 'item__name'); // class를 지정
    name.innerHTML = text; //전달받은 text를 html에 넣어줄 것임.

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
        // removeChild는 뭐지?
    })

    const itemDivider = document.createElement('div'); //div 태그 생성
    itemDivider.setAttribute('class', 'item__divider'); // class 지정

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});

// 엔터키 누르면 입력되게하기
input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
});