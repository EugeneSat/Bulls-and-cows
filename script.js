//объявление переменных
const button = document.querySelector(".button");
const todo = document.querySelector(".todo");
const your_number = document.querySelector(".input");
let k,b;

your_number.oninput = function(){
  this.value = this.value.substr(0,4);
}
function Random(num_a,num_b) {
  return Math.floor( Math.random() * ((num_b - num_a + 1) + num_a));
}
//Функция для создания рандомного числа + не повторяющиеся числа у компьютера
function Make_Random() {
   let s = '';
   for (let i = 0; i < 4; i++) {

     do {
          var c = Random(4,6);
     } while (s.indexOf(c) >= 0);
      s = s + c;
   }
   return s;
}

//Функция подсчитывает,сверяет быков и коров
function Analize(make, attempt) {
b = 0;
k = 0;
for (var i = 0; i < 4; i++) {
  if (make[i] == attempt[i]) {
    b++;
  }else{
    if (make.indexOf(attempt[i]) >= 0) {
      k++;

    }
  }
}

}


let master = Make_Random();
let enterList = [];
//нажатие на кнопку enter
button.addEventListener('click', function () {
let kkk ={
todo: your_number.value,
};

//Вызов функции
Analize(master, kkk.todo);
//добавляем числа в массив,которые введи в инпут
enterList.push(kkk);



DisplayEnter();
//если значения твое и компьютера совпадают
if (master == kkk.todo) {
 alert("Поздравляю,Вы выйграли!Это число" + " " + `${master}`);
}
});


//Функция работающая как Todo лист
function DisplayEnter() {
//Переменная для ограничения игры в 10 шагов
let check = 0;
let displayMessage = '';

 enterList.forEach(function(item, i) {
    
    displayMessage += `
      <li>
        <label for='item_${i}'>${item.todo} ${b}Б ${k}K</label>
        </li>`;
         todo.innerHTML = displayMessage;


         check++;
 });

 //Через 10 шагов игра закончится
 if (check == 10) {
   alert("Игра закончилась,это число было " + `${master}`);
 }
if (check == 11) {
   alert("Игра уже закончилась,обновите страницу и попробуйте снова!");
}
}


//краска инпута
your_number.onfocus = function(){
  this.classList.add("input2");
}
