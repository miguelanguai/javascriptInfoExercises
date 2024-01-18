"use strict";
//1. Using this in object literal
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
user = makeUser();

a = document.getElementById("usingThis");
a.textContent=JSON.stringify(user);

//2. Create a calculator
let calculator={
    a,
    b,
    read(){
        this.a=prompt("Input first value");
        this.b=prompt("Input second value");
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
}
calculator.read();

b = document.getElementById("createCalculator");
b.textContent=JSON.stringify(calculator);

//3. Chaining
let ladder={
    step: 0,
    up(){
        this.step++;
    },
    down(){
        this.step--;
    },
    showStep: function(){
        alert(this.step);
    }
}
ladder.up();
ladder.up();
ladder.down();
ladder.down();
ladder.up();
ladder.up();
ladder.up();

c = document.getElementById("chaining");
c.textContent=JSON.stringify(ladder);