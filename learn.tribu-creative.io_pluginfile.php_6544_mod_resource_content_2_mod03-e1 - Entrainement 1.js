// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.log(
  "1/ Implémentez une fonction qui retourne la somme de ses 2 paramètres."
);

function sum(a, b) {
  return a + b;
}
console.log(sum(10, 1));

/* ------------------------------------------------------*/

console.log(
  "2/ Implémentez une fonction qui retourne la plus petite des 2 valeurs passées en paramètre."
);

function smal(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}
console.log(smal(5, 66));

/* ------------------------------------------------------*/

console.log(
  "3/ Implémentez une fonction qui retourne la dernière valeur d'un tableau."
);

let table = [1, 2, 3, "coucou"];

function getLastValueOfTable(value) {
  return value[3];
}
console.log(getLastValueOfTable(table));

/* ------------------------------------------------------*/

console.log(
  "4/ Implémentez une fonction qui retourne la valeur en entrée augmentée d'un pourcentage d'augmentation."
);
let increase = 13;

function getValueIncrease(value) {
  return value * (increase / 100 + 1);
}
console.log(getValueIncrease(5));

/* ------------------------------------------------------*/

console.log(
  "5/ Implémentez une fonction qui retourne la valeur maximale entre 3 valeurs."
);
function getMaxValue(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}

console.log(getMaxValue(3, 2, 1));

/* ------------------------------------------------------*/

console.log(
  "6/ Implémentez une fonction qui retourne la somme des valeurs d'un tableau."
);
let tableX = [10, 10, 10, 10];
let tableY = [100, 100];
let totalSum = 0;
for (let value in tableX) {
  totalSum += tableX[value];
}
// console.log(totalSum)

function getSumValueTable() {
  return totalSum;
}

console.log(getSumValueTable([tableX]));
console.log(getSumValueTable([tableY]));

/* ------------------------------------------------------*/

console.log(
  "7/ Implémentez une fonction qui retourne une valeur aléatoire entre 0 et un nombre."
);
let a = 0;
function getRandomValue(a,b) {
return Math.floor(Math.random(a,b)*10)
}

console.log(getRandomValue(a,10));

/* ------------------------------------------------------*/

console.log(
  "8/ Implémentez une fonction qui retourne la moyenne des valeurs d'un tableau."
);
let tableZ = [20,10, 10];

let Sum = 0;
let average = 0;
for (let value in tableZ) {
 Sum += tableZ[value];
 average = Sum/tableZ.length
}
// console.log(totalSum)

function getAverageValueTable() {
  return average;
}

console.log(getAverageValueTable([tableZ]));


/* ------------------------------------------------------*/

console.log(
  "9/ Implémentez une fonction qui retourne une durée en heures et minutes depuis une durée en minutes."
);

console.log();
console.log();

/* ------------------------------------------------------*/

console.log(
  "10/ Implémentez une fonction qui retourne la valeur minimale d'un tableau."
);

console.log();
console.log();

/* ------------------------------------------------------*/

console.log(
  "11/ Implémentez une fonction qui retourne la clé d'un objet pour la valeur maximale ."
);

console.log();
console.log();

/* ------------------------------------------------------*/

console.log(
  "12/ Implémentez une fonction qui retourne une valeur aléatoire dans un tableau."
);

console.log();
console.log();

/* ------------------------------------------------------*/

console.log(
  "13/ Implémentez une fonction qui retourne le nombre de mots dans un texte."
);

console.log();
console.log();
