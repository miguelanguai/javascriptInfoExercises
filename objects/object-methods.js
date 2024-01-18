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