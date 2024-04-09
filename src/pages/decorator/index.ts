interface ICar {
  cost(): number;
  description: string;
}

interface ICarDecorator extends ICar {}

export default () => {
  class Car implements ICar {
    description = "Basic Car";
    cost() {
      return 20000;
    }
  }

  class ElectricCarDecorator implements ICarDecorator {
    car: ICar;

    constructor(car: ICar) {
      this.car = car;
    }

    get description(): string {
      return `${this.car.description} with electric upgrade`;
    }

    cost(): number {
      return this.car.cost() + 10000;
    }
  }

  class AutopilotDecorator implements ICarDecorator {
    car: ICar;

    constructor(car: ICar) {
      this.car = car;
    }

    get description(): string {
      return `${this.car.description} with autopilot`;
    }

    cost(): number {
      return this.car.cost() + 5000;
    }
  }

  // Usage
  const myCar = new Car();
  const myElectricCar = new ElectricCarDecorator(myCar);
  const myAutopilotCar = new AutopilotDecorator(myCar);
  const myFullyLoadedCar = new AutopilotDecorator(
    new ElectricCarDecorator(myCar)
  );

  console.log(`${myCar.description} costs $${myCar.cost()}`);
  console.log(`${myElectricCar.description} costs $${myElectricCar.cost()}`);
  console.log(`${myAutopilotCar.description} costs $${myAutopilotCar.cost()}`);
  console.log(
    `${myFullyLoadedCar.description} costs $${myFullyLoadedCar.cost()}`
  );

  const exampleEl = document.querySelector("#example");

  if (exampleEl) {
    exampleEl.textContent = `
      interface ICar {
        cost(): number;
        description: string;
      }
      
      interface ICarDecorator extends ICar {}
      
      export default () => {
        class Car implements ICar {
          description = "Basic Car";
          cost() {
            return 20000;
          }
        }
      
        class ElectricCarDecorator implements ICarDecorator {
          car: ICar;
      
          constructor(car: ICar) {
            this.car = car;
          }
      
          description = \`\${this.car.description} with electric upgrade\`;
      
          cost(): number {
            return this.car.cost() + 10000;
          }
        }
      
        class AutopilotDecorator implements ICarDecorator {
          car: ICar;
      
          constructor(car: ICar) {
            this.car = car;
          }
      
          get description(): string {
            return \`\${this.car.description} with autopilot\`;
          }
      
          cost(): number {
            return this.car.cost() + 5000;
          }
        }
      
        // Usage
        const myCar = new Car();
        const myElectricCar = new ElectricCarDecorator(myCar);
        const myAutopilotCar = new AutopilotDecorator(myCar);
        const myFullyLoadedCar = new AutopilotDecorator(
          new ElectricCarDecorator(myCar)
        );        
    `;
  }
};
