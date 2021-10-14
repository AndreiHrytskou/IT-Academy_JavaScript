let lastName = prompt('Введите вашу фамилию');
let firstName = prompt('Введите ваше имя');
let middleName = prompt('Введите ваше отчество');
let age = Number(prompt('Введите ваш возраст'));
let gender = confirm('Ваш пол мужской?');

if (lastName == '' || lastName == undefined) {
	alert('Вы не ввели фамилию');
} else if (firstName == '' || firstName == undefined) {
alert ('Вы не ввели имя');
} else if (middleName == '' || middleName == undefined) {
	alert ('Вы не ввели отчество');	
} else if (age == '' ||  age == undefined || isNaN) {
	alert ('Вы не правильно ввели ваш возраст');
} else if (gender == false) {
	alert ('Ваше ФИО: ' + lastName + ' ' + firstName + ' ' + middleName + '\n' +	'Ваш возраст: ' + age + '\n' +	'Ваш пол: женский');
} else if (age > 70){
	alert ('Ваше ФИО: ' + lastName + ' ' + firstName + ' ' + middleName + '\n' +	'Ваш возраст в годах: ' + age +'\n' + 'Ваш возраст в днях: ' + (age * 365) + '\n' + 'через 5 лет вам будет: ' +  (age + 5) + '\n' +	'Ваш пол: мужской' + '\n' + 'вы на пенсии: да')
} else {
	alert ('Ваше ФИО: ' + lastName + ' ' + firstName + ' ' + middleName + '\n' +	'Ваш возраст в годах: ' + age +'\n' + 'Ваш возраст в днях: ' + (age * 365) + '\n' + 'через 5 лет вам будет: ' +  (age + 5) + '\n' +	'Ваш пол: мужской' + '\n' + 'вы на пенсии: нет')
}