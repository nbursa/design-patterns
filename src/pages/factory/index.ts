export default () => {
  interface Car {
    model: string;
    year: number;
    displayInfo(): string;
  }

  abstract class CarCreator {
    abstract createCar(model: string, year: number): Car;
  }

  class TeslaCarCreator extends CarCreator {
    createCar(model: string, year: number): Car {
      return new TeslaCar(model, year);
    }
  }

  class TeslaCar implements Car {
    constructor(public model: string, public year: number) {}
    displayInfo(): string {
      return `Tesla ${this.model} - ${this.year}`;
    }
  }

  const teslaCreator = new TeslaCarCreator();
  const myTesla = teslaCreator.createCar("Model S", 2020);
  console.log(myTesla.displayInfo());

  const exampleEl = document.querySelector("#example");
  if (exampleEl) {
    exampleEl.textContent = `class TeslaCarCreator extends CarCreator {
  createCar(model, year) {
    return new TeslaCar(model, year);
  }
}

class TeslaCar {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    return \`Tesla \${this.model} - \${this.year}\`;
  }
}

const teslaCreator = new TeslaCarCreator();
const myTesla = teslaCreator.createCar("Model S", 2020);
console.log(myTesla.displayInfo()); // Output: Tesla Model S - 2020`;
  }
};
