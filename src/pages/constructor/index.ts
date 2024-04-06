export default () => {
  class Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
      this.model = model;
      this.year = year;
    }
    displayInfo(): string {
      return this.model + " " + this.year;
    }
  }

  const myCar = new Car("Tesla", 2020);

  console.log(myCar.displayInfo());

  const exampleEl = document.querySelector("#example");

  if (exampleEl) {
    exampleEl.textContent = `
      function Car(model, year) {
        this.model = model;
        this.year = year;
        this.displayInfo = function() {
          return this.model + " " + this.year;
        };
      }
  
      const myCar = new Car('Tesla', 2020);
      console.log(myCar.displayInfo()); // Output: Tesla 2020
    `;
  }
};
