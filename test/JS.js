let parent1 = document.querySelector('.parent');
let box1 = document.querySelector('.box:nth-child(2)');
let p =document.querySelector('p');

/*.onclick = function(){
box1.classList.toggle('color');
}
*/

let sticky = document.querySelector('sticky');

let parent = document.querySelector('.parent');
var message = document.querySelector('.input');
let name = document.querySelector('.input2');
var button = document.querySelector('button');




button.onclick = function() {
	let li = document.createElement('li');
li.textContent =  "[" + name.value + "] => " + message.value;
message.value=''; name.value='';
parent.append(li);

}