export default () => {
  interface Car {
    model: string;
    year: number;
    displayInfo(): string;
  }

  interface CarFactory {
    createEconomyCar(): Car;
    createLuxuryCar(): Car;
  }

  class TeslaFactory implements CarFactory {
    createEconomyCar(): Car {
      return new TeslaModel3();
    }
    createLuxuryCar(): Car {
      return new TeslaModelS();
    }
  }

  class TeslaModel3 implements Car {
    model = "Model 3";
    year = 2022;
    displayInfo(): string {
      return `Tesla ${this.model} - ${this.year}`;
    }
  }

  class TeslaModelS implements Car {
    model = "Model S";
    year = 2022;
    displayInfo(): string {
      return `Tesla ${this.model} - ${this.year}`;
    }
  }

  const factory: CarFactory = new TeslaFactory();
  const economyCar = factory.createEconomyCar();
  const luxuryCar = factory.createLuxuryCar();

  console.log("economyCar:", economyCar);
  console.log("luxuryCar:", luxuryCar);

  const exampleEl = document.querySelector("#example");

  if (exampleEl) {
    exampleEl.innerHTML = `
      interface Car {
        model: string;
        year: number;
        displayInfo(): string;
      }
      
      interface CarFactory {
        createEconomyCar(): Car;
        createLuxuryCar(): Car;
      }
      
      class TeslaFactory implements CarFactory {
        createEconomyCar(): Car {
          return new TeslaModel3();
        }
        createLuxuryCar(): Car {
          return new TeslaModelS();
        }
      }
      
      class TeslaModel3 implements Car {
        model = "Model 3";
        year = 2022;
        displayInfo(): string {
          return \`Tesla \${this.model} - \${this.year}\`;
        }
      }
      
      class TeslaModelS implements Car {
        model = "Model S";
        year = 2022;
        displayInfo(): string {
          return \`Tesla \${this.model} - \${this.year}\`;
        }
      }
      
      const factory: CarFactory = new TeslaFactory();
      const economyCar = factory.createEconomyCar();
      const luxuryCar = factory.createLuxuryCar();
      
      console.log(\`\${economyCar.displayInfo()} | \${luxuryCar.displayInfo()}\`);`;
  }
};
