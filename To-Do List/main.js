'use strict'

// 추가 버튼 클릭 실행문
const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {
    const textBox = document.querySelector('#textBox');
    const text = textBox.value.trim();

    if (text !== '') {
        addToList(text);
        textBox.value= '';
        textBox.focus();
    }
});

// HTML에 리스트 아이템 추가하기
function addToList(text) {
    const lists = document.querySelector('.lists');
    const newListItem = document.createElement('li');
    newListItem.classList.add('listContent');
    newListItem.innerHTML = text;
    lists.appendChild(newListItem);

    //삭제 버튼도 함께 만들어주기
    const listContent = document.querySelector('.listContent:last-child');
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute("type", "button");
    removeBtn.classList.add('removeBtn');
    removeBtn.innerHTML = ('<i class="fas fa-trash-alt"></i>');
    listContent.appendChild(removeBtn);
}

// 삭제 버튼
const allListContent = document.querySelectorAll('.listContent');
for (var index = 0; index < allListContent.length; index++) {
    allListContent[index].addEventListener('click', function() {
        this.classList.button('active');
    });
    allListContent[index].querySelector('button').addEventListener("click", function(){
            this.closest(".listContent").remove();
        });
}
// removeBtn.addEventListener('click', () => {
//     const listContent = document.querySelector('.listContent');
//     listContent.remove();
// });

// 삭제 버튼으로 원하는 리스트 삭제
