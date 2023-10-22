"use strict"

console.group('ЗАВДАННЯ 1');




const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];
const clients = Array.from(new Set([...clients1, ...clients2]));
console.log('Обʼєднана база клієнтів без повторів: ', clients);





console.groupEnd();
console.group('ЗАВДАННЯ 2');




const characters = [
	{
		name: "Елена",
		lastName: "Гилберт",
		age: 17,
		gender: "woman",
		status: "human"
	},
	{
		name: "Кэролайн",
		lastName: "Форбс",
		age: 17,
		gender: "woman",
		status: "human"
	},
	{
		name: "Аларик",
		lastName: "Зальцман",
		age: 31,
		gender: "man",
		status: "human"
	},
	{
		name: "Дэймон",
		lastName: "Сальваторе",
		age: 156,
		gender: "man",
		status: "vampire"
	},
	{
		name: "Ребекка",
		lastName: "Майклсон",
		age: 1089,
		gender: "woman",
		status: "vempire"
	},
	{
		name: "Клаус",
		lastName: "Майклсон",
		age: 1093,
		gender: "man",
		status: "vampire"
	}
];

const charactersShortInfo = characters.map(elem => {
	const { name, lastName, age } = elem;
	return { name, lastName, age };
});
console.log(charactersShortInfo)





console.groupEnd();
console.group('ЗАВДАННЯ 3');




const user1 = {
	name: "John",
	years: 30
};
const { name: імʼя, years: вік, isAdmin: isAdmin = false } = user1;
// я в шоці від факту, що кириличні назви змінних, та ще й з апострофом, працюють:
console.log(імʼя, вік, isAdmin);





console.groupEnd();
console.group('ЗАВДАННЯ 4');

const satoshi2020 = {
	name: 'Nick',
	surname: 'Sabo',
	age: 51,
	country: 'Japan',
	birth: '1979-08-21',
	location: {
		lat: 38.869422,
		lng: 139.876632
	}
}
const satoshi2019 = {
	name: 'Dorian',
	surname: 'Nakamoto',
	age: 44,
	hidden: true,
	country: 'USA',
	wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
	browser: 'Chrome'
}
const satoshi2018 = {
	name: 'Satoshi',
	surname: 'Nakamoto',
	technology: 'Bitcoin',
	country: 'Japan',
	browser: 'Tor',
	birth: '1975-04-05'
}

// розпаковую три обʼєкти у хронологічному порядку:
const fullProfile = { ...structuredClone(satoshi2018), ...structuredClone(satoshi2019), ...structuredClone(satoshi2020) };
// перевіряю, чи змінюється вкладений стартовий під-обʼєкт при зміні повного досьє:
fullProfile.location.lat = 666;
console.log('Під-обʼєкти, вкладені в стартові обʼєкти, лишаються незмінними:', satoshi2020.location.lat === 38.869422);

console.log('повне досьє на Сатоші з найсвіжішими даними:', fullProfile);






console.groupEnd();
console.group('ЗАВДАННЯ 5');

const books = [{
	name: 'Harry Potter',
	author: 'J.K. Rowling'
}, {
	name: 'Lord of the rings',
	author: 'J.R.R. Tolkien'
}, {
	name: 'The witcher',
	author: 'Andrzej Sapkowski'
}];
const bookToAdd = {
	name: 'Game of thrones',
	author: 'George R. R. Martin'
}

const newBooks = [...books, bookToAdd];
console.log('Новий, збільшений масив:', newBooks);






console.groupEnd();
console.group('ЗАВДАННЯ 6');



const employee = {
	name: 'Vitalii',
	surname: 'Klichko'
}
// 60705.17
// 1971-08-17
// на базі дня народження з Вікіпедії, вираховую астрономічно точний вік на момент роботи коду:
const klichkoAge = (new Date() - Date.parse('1971-08-17')) / 1000 / 60 / 60 / 24 / 365.25;
const moreDataEmployee = {
	...employee, 
	age: klichkoAge, 
	salary: 60705.17,
};
console.log(moreDataEmployee);



console.groupEnd();
console.group('ЗАВДАННЯ 7');



const array = ['value', () => 'showValue'];
// Допишіть код тут:
const [value, showValue] = array;

alert(value); // має бути виведено 'value'
alert(showValue());  // має бути виведено 'showValue'





console.groupEnd();
