
// Задания 0 и 6
let name;

let task0 = document.getElementById("t0");

task0.onclick = function(){
                    console.log("Вы нажали!");
                    name = prompt('Привет! Как Вас зовут?');
                    alert('Добро пожаловать, ' + name);
                    }

var now = new Date();
var modal = document.getElementById("myModal");
var bnt = document.getElementById("t6");
var span = document.getElementById("myModal");

bnt.onclick = function(){
    modal.style.display ="block";
    document.getElementById('data').innerHTML = "Привет, " + name + "<br \/>" +"Текущая дата: " + now;
}

span.onclick=function(){
    modal.style.display = "none";
}

//Задание 1

let task1=document.getElementById("t1");
task1.onclick = function (){
    let a = Number(prompt("Введи основание треугольника"));
    let h = Number(prompt("Введи высоту треугольника"));
    let s = (a*h)/2;

        if(typeof(s) != 'NAN') alert("Площадь треугольника: " + s);
        else alert("Нужно ввести числа!");   
}

//Задание 2

let task2 = document.getElementById("t2");

    task2.onclick = function (){

    let stringOne = prompt("Введите первую строку");
    let stringTwo = prompt("Введите вторую строку");

        if(Boolean(stringOne.length == stringTwo.length)) alert("Строки равны");
        else alert("Строки не равны");
    }


//Задание 3
let task3=document.getElementById("t3");

task3.onclick = function (){
let arr=[5];
alert("Введите пять элементов");
for (i=0;i<5;i++){
    arr[i] = prompt("Введите "+(i+1)+"-й элемент");
}
alert("Максимальный элемент: " + Math.max(...arr) + "\n" + "Минимальный элемент: " + Math.min(...arr));
}

//Задание 4

const input = document.getElementById('input');
            const blockTime = document.querySelector('.time');
            let interval;
            let tmp;
 
            blockTime.innerHTML = 0;
            input.value = 0;
 
            document.getElementById('start').addEventListener('click', () => {
             if (input.value < 0) {
              input.value = 0;
              blockTime.innerHTML = 0;
              }
 
             blockTime.innerHTML = input.value;
             
     
             clearInterval(interval);
             interval = setInterval(subtractTime, 1000);
             });
 
              document.getElementById('stop').addEventListener('click', () => {
              clearInterval(interval);
              });
 
               document.getElementById('reset').addEventListener('click', () => {
               input.value = 0;
               blockTime.innerHTML = 0;
               });
 
              function subtractTime() {
              if (blockTime.innerHTML > 0) {
              blockTime.innerHTML--;
              if (input.value < 0 || blockTime.innerHTML == 0) {
                input.value = 0;
                blockTime.innerHTML = 0;
              }
              } else {
              clearInterval(interval);
              }
              }
              document.getElementById('PastTime').addEventListener('click', () => {
                  alert(input.value-blockTime.innerHTML);
             
               });

//Задание 5

 function check(){
 var yes = 0;
 var no = 0;

 for (var v = 1; v <= 10; v++) {
 var q = document.forms['quiz'].elements['vopros' + v];
    for (var i = 0; i < q.length; i++){
        if (q[i].checked) {
            
            if(q[i].value == 'yes') yes++;
            else no++;
            
        }
    }

 }
 alert("Правильных ответов: "+ yes);
 }

