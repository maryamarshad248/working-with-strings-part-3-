'use strict';

console.log('a+very+nice+string'.split('+'));
console.log('i+am+a+backend+engineer'.split('+'));
console.log('Mayam Arshad'.split(' '));
console.log('Noman Ejaz'.split(' '));

const [firstName, lastName] = 'Maryam Arshad'.split(' ');
const newName = ['Miss', firstName.toUpperCase(), lastName.toUpperCase()].join(
  ' '
);
console.log(newName);

const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizedName('noman and maryam');
capitalizedName('mr. noman and Mrs. noman');
capitalizedName('noman ejaz');

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '#'));
const nameNew = 'Maryam';
console.log(nameNew.padStart(15, '*').padEnd(20, '*'));
console.log(nameNew.padEnd(10, '*'));

// padding example

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(43567843));
console.log(maskCreditCard('5678964332135'));
console.log(maskCreditCard(66664221389076654432));

// repeat method
const message1 = ' Bad weather...I cant go outside... ';
console.log(message1.repeat(4));

const airPlaneLine = function (n) {
  console.log(`there are ${n} plane in line ${'!'.repeat(n)}`);
};
airPlaneLine(5);
airPlaneLine(4);
airPlaneLine(2);
