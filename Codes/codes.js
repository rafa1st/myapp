function contact(name, phone) {
  this.name = name;
  this.phone = phone;
  this.print = function () {
    return console.log(`${this.name}: ${this.phone}`);
  };
}

let david = new contact("David", 12345);
let amy = new contact("Amy", 987654321);
david.print();
amy.print();