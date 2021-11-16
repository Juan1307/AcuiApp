import 'virtual:windi.css';
import './tailwind.css';

/*const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = '<h1>Hi from Appp</h1>';*/

enum Role { ADMIN, USER, VISITOR }

const person : {
   name: string; age: number;
   hobbies: string[];
   state: [number, string];
   roles: number
} = {
   name: 'Juan', age: 12,
   hobbies: ['Code','Draw'],
   state: [1,'Activated'],
   roles: Role.USER
};

const { state, roles } = person;
        state[0] = -3.1;

const myrole = (roles === Role.ADMIN) ? 'Hi welcome' : 'Oops tou are not admin';
console.log(myrole);
const flag = false;
const arrayColors: string[] = ['Create','Update'];

if(!flag){
   for(const word of arrayColors) {
      console.log(word.toUpperCase())
   }
}

// function object null coalessing
function printFullName(obj: { name: string, age: number, seller?: string}) {
   const fullName = `His name's ${obj.name.toUpperCase()} - ${obj.age}`;
   const messague = (obj.seller === undefined) ? fullName : 
                  `${fullName} and ${obj.seller.toUpperCase()}`;
   console.log(messague);
}
printFullName(person)
printFullName({ ...person, seller: 'crepeeerr'})


// union types
// type Combinable = number;
function printResult(year: number, { trunc } = Math) : number {
   const res = year/100;
   return (res % 1 === 0) ? res : trunc(res) + 1;
}
console.log(printResult(2121));

function checkPalindrome(word: string) : boolean {
   let comp = '';
   const pos = word.length - 1;
   for(let c = 0; word.length > c; c++) {  
      comp += word[pos - c];
   }
   return (comp === word);
}
console.log(checkPalindrome('az'));
// printResult('Carl','Oscar', false);

function adjacentElementsProduct(arr: number[]) {
   // let prod = -Infinity;
   let prod = -1000;
   for(let c = 1; arr.length > c; c++){
      if(arr[c - 1] * arr[c] > prod ) prod = arr[c - 1] * arr[c]; 
   }
   console.log(prod);
}
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
// adjacentElementsProduct([-23, 4, -3, 8, -12]);
adjacentElementsProduct([3, 6, -2, -5, 7, 3]);

function shapeArea(n: number) {
  const res = (n ** 2) + (n - 1) ** 2;
  console.log(res);
}
shapeArea(100);

function makeArrayConsecutive2(arr: number[]) {
  let men = arr[0];
  let may = 0;

  for(let c = 0;arr.length > c; c++){
     if(arr[c] > may) may = arr[c];
     if(arr[c] < men) men = arr[c];
  }
  return (may - men) + 1 - arr.length;
}
// makeArrayConsecutive2([6, 3]);
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
/*For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.
*/

type Mixed = string[] | number;

function verifyArray(arr: Mixed) {
   if(Array.isArray(arr)) {
      return console.log(arr.join('-:-'));
   }
   return console.log(arr + 1000);
}

verifyArray(['Leo','Capricornio']);
verifyArray(123.2333);



type State = {
   type: [number,string],
   text: string
};

const expresionFunction = ({ type, text }: State) => {
    console.log(type, text);
}
expresionFunction({type : [123, 'Desactivated'], text:'Jonas'});



















