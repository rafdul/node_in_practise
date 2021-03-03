const fs = require('fs');

const gender = ['female', 'male'];
const maleName = ['Mieszko', 'Bolesław', 'Kazimierz', 'Jan', 'August', 'Henryk', 'Władysław', 'Stanisław', 'Zygmunt', 'Stefan'];
const femaleName = ['Maria', 'Jadwiga', 'Anna', 'Józefina', 'Teresa', 'Katarzyna', 'Antonina', 'Elżbieta', 'Zofia', 'Bona'];
const lastName = ['Burbon', 'Tudor', 'Piast', 'Habsburg', 'Romanowicz', 'Wettyn', 'Waza'];
const domain = ['gmail.com', 'buziaczek.pl', 'kremlin.ru', 'cia.gov', 'gru.kgb', 'belveder.pl'];

const randChoice = (arr) => {
  const max = arr.length;
  const random = Math.floor(Math.random() * max);
  return arr.slice(random, random+1);
}

// generate phone number
const makeNumberX = (Math.floor(Math.random() * (9 - 1 + 1)) + 1);

const makeNumberXX = number => {
  if(number <= 9) {
    return  `0${number}`;
  } else return `${number}`;
};

const makeNumberXXX = number => {
  if(number <= 9) {
    return  `00${number}`;
  } else if(number >=100) {
    return `${number}`;
  } else {
    return `0${number}`;
  }
};

const people = [];

for(let i=0; i<20; i++) {
  const randomGender = randChoice(gender);
  const randomFirstName = randomGender === 'female' ? randChoice(femaleName) : randChoice(maleName);
  const randomLastName = randChoice(lastName);
  const randomAge = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  const randomEmail = randomFirstName + '.' + randomLastName + '@' + randChoice(domain);

  const number = (Math.floor(Math.random() * (99 - 0 + 1)) + 0);
  const number2 = (Math.floor(Math.random() * (999 - 0 + 1)) + 0);
  const number3 = (Math.floor(Math.random() * (999 - 0 + 1)) + 0);
  const randomPhone = makeNumberX +''+ makeNumberXX(number) + ' ' + makeNumberXXX(number2) + ' ' + makeNumberXXX(number3);
  
  const person = {
      gender: randomGender,
      firstName: randomFirstName,
      lastName: randomLastName,
      age: randomAge,
      email: randomEmail,
      phone: randomPhone,
  };
  people.push(person);
}
// console.log(people);
const peopleJSON = JSON.stringify(people);
// console.log(peopleJSON);


fs.writeFile('people.json', peopleJSON, err => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});


