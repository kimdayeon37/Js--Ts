"use strict" 

let my_tbody = document.getElementById('my-tbody');
let idx = 0;

function add_row() {
    let row = my_tbody?.insertRow(my_tbody.rows.length); // 하단에 추가
    let index = row.insertCell(0);
    let rand = row.insertCell(1);
    index.innerHTML = idx++;
    rand.innerHTML = Math.random();
}

function delete_row() {
    if (my_tbody?.rows.length < 1) return;
        my_tbody?.deleteRow(0); // 상단부터 삭제
}