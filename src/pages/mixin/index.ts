interface ICarMixin {
  drive(): void;
}

interface IElectricCarMixin {
  charge(): void;
}

export default () => {
  class CarMixin implements ICarMixin {
    drive() {
      console.log("Driving " + (this as any).model);
    }
  }

  class ElectricCarMixin implements IElectricCarMixin {
    charge() {
      console.log("Charging " + (this as any).model);
    }
  }

  // Helper function to apply mixins
  function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      });
    });
  }

  class Car implements ICarMixin, IElectricCarMixin {
    model: string;

    drive: () => void = () => {};
    charge: () => void = () => {};

    constructor(model: string) {
      this.model = model;
    }
  }

  // Applying mixins to Car
  applyMixins(Car, [CarMixin, ElectricCarMixin]);

  const myCar = new Car("Tesla Model 3");

  myCar.drive(); // "Driving Tesla Model 3"
  myCar.charge(); // "Charging Tesla Model 3"

  const exampleEl = document.querySelector("#example");

  if (exampleEl) {
    exampleEl.textContent = `
      class CarMixin implements ICarMixin {
        drive() {
          console.log("Driving " + (this as any).model);
        }
      }
    
      class ElectricCarMixin implements IElectricCarMixin {
        charge() {
          console.log("Charging " + (this as any).model);
        }
      }
    
      // Helper function to apply mixins
      function applyMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach((baseCtor) => {
          Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
              derivedCtor.prototype,
              name,
              Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
          });
        });
      }
    
      class Car implements ICarMixin, IElectricCarMixin {
        model: string;
    
        drive: () => void = () => {};
        charge: () => void = () => {};
    
        constructor(model: string) {
          this.model = model;
        }
      }
    
      // Applying mixins to Car
      applyMixins(Car, [CarMixin, ElectricCarMixin]);
    
      const myCar = new Car("Tesla Model 3");
      
      myCar.drive(); // "Driving Tesla Model 3"
      myCar.charge(); // "Charging Tesla Model 3"
    `;
  }
};
