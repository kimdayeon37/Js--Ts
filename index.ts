let my_tbody = document.getElementById("my-tbody") as HTMLTableElement;
let idx: number = 0;

let increase_button = document.getElementById(
  "increase_button"
) as HTMLButtonElement;
let decrease_button = document.getElementById(
  "decrease_button"
) as HTMLButtonElement;

function add_row() {
  let row = my_tbody.insertRow(my_tbody.rows.length); // 하단에 추가
  let index = row.insertCell(0);
  let rand = row.insertCell(1);
  index.innerHTML = `${idx++}`;
  rand.innerHTML = `${Math.random()}`;
}

increase_button.onclick = () => add_row();

function delete_row() {
  if (my_tbody.rows.length < 1) return;
  my_tbody.deleteRow(0); // 상단부터 삭제
}

decrease_button.onclick = () => delete_row();
