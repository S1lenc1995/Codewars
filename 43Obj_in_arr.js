
/*     Перед вами массив characters, що складається з об'єктів. Кожен об'єкт описує одного персонажа.

Створіть на його основі масив charactersShortInfo, що складається з об'єктів, у яких є тільки 3 поля - ім'я, прізвище та вік. */

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
console.log(characters)


/* const [{name: needName, lastName: needLastName, age: needAge, gender: dontNeedGender, status: dontNeedStatus}] = characters; */

let arr = []

characters.forEach(({name: needName, lastName: needLastName, age: needAge})=>{
    arr.push({needName, needLastName, needAge})
})
console.log(arr);
