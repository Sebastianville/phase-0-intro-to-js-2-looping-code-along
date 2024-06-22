// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }


  
function writeCards(name, event){
    let thankYou = [];
    for (let i = 0; i < name.length; i++) {
    thankYou.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return thankYou
}

function countDown(number){
    while (number >= 0) {
        console.log(number--);
    }

}

    

