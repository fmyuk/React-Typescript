class Person {
  constructor(name) {
    this.name = name;
  }

  greed() {
    const doIt = function () {
      console.log(`Hi, I'm ${this.name}`);
    };
    doIt();
  }
}

const minky = new Person("Momo");
minky.greet();