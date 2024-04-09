export default () => {
  interface Flyweight {
    make: string;
    model: string;
    color: string;
  }

  class CarFlyweightFactory {
    private cars: { [key: string]: Flyweight } = {};

    getCar(key: string): Flyweight {
      if (!(key in this.cars)) {
        const [make, model, color] = key.split("-");
        this.cars[key] = { make, model, color };
        console.log("Car created:", key);
      }
      return this.cars[key];
    }
  }

  const factory = new CarFlyweightFactory();
  factory.getCar("Ford-Mustang-Red");
  factory.getCar("BMW-M3-Blue");
  factory.getCar("Ford-Mustang-Red"); // This will not create a new car

  const exampleEl = document.querySelector("#example");

  if (exampleEl) {
    exampleEl.textContent = `
      interface Flyweight {
        make: string;
        model: string;
        color: string;
      }

      class CarFlyweightFactory {
        private cars: { [key: string]: Flyweight } = {};

        getCar(key: string): Flyweight {
          if (!(key in this.cars)) {
            const [make, model, color] = key.split('-');
            this.cars[key] = { make, model, color };
            console.log('Car created:', key);
          }
          return this.cars[key];
        }
      }

      const factory = new CarFlyweightFactory();
      factory.getCar('Ford-Mustang-Red');
      factory.getCar('BMW-M3-Blue');
      factory.getCar('Ford-Mustang-Red'); // This will not create a new car
    `;
  }
};
