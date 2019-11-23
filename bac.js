'use strict'
// 1) Number
var num1 = 5;
var num2 = 10;
var result = 0
var result = num1 + num2;

// 2) String
var valStr = 'hello'

// 3) Boolean
var res = 5 > 6;

// 4) Underfined
var resValue;

// 5) Null
var resValue2 = null;

// 6) Object array
var names = ['vasa', 'ann', 'alex'];
names.push('olya', 'katya');
names[10] = 'gggg';
names.push('ff');

// 6.1) Object
var user = {name: 'Vasa', age: 25, email: '@'};
console.log(user.name);


// Nan
var a = 5 - 'ddd';
console.log(a);



var a = -'5';
var res = 10 + a;
console.log(res)



var num1 = +prompt('input num1');
var num2 = +prompt('input num2');
var result = num1 + num2;



if(result && result !==10){
    alert(result);
}
else if(result === 10){
    alert(result);
}
else{
    alert('value should be number');    
}



var a = 5;
var b = '5';
var res = a === b;
console.log(res);



var a = 5;
var b = 4;    
             //6   //6   //5
var result = ++a + a++ - ++b;
console.log (result); //7





// FUNCTIONS
var cities = ['Dnipro', 'Odessa', 'Kiev', 'Lviv'];
var names = ['Vasa', 'anya', 'alex', 'katya'];

function show(){
        render(names, '#list');
}

var btn = document.querySelector('#list-btn');

btn.onclick = show;





render(names, '#list2');


function render (data, id){
        var container = document.querySelector(id);

        var html = '';
        
        for(var item of data){
            html+= '<li>' + item + '</li>';
        }

        container.innerHTML = html;
}




// Object {name: Ann, age: 25}


// Array ['Dnipro', 'Odessa', 'Kiev', 'Lviv']


// Function function() { }




var str = prompt('enter values (n1, n2 ...)');


function Sum(strValue) {
    var result = 0;
   
    var ar = strValue.split(',');
   
    for(var num of ar){
        result+= (+num);
    }
   
    return result;
}

var res = Sum(str);

alert(res);




var all = []

function together(a1, a2){
    for (var citi of a1){
      all.push(citi);
    }
    for (var name of a2){
        all.push(name);
      }
      return all
}
var merged = together(cities, names);

function render (ar, container){
var html = '';
for (var item of ar){
    html+= '<li>' + item + '</li>';
}
var con = document.querySelector(container);
con.innerHTML = html;

}
render (merged, '#list3');




// Замыкания
function Parent () {
    var res = 10;

    var child = function () {
        console.dir(child);
        return ++res;
    }
    return child;
}

var res = Parent();

console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());

