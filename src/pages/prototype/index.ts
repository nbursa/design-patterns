export default () => {
  class Prototype {
    public prototypeName: string;

    constructor(name: string) {
      this.prototypeName = name;
    }

    clone(): this {
      const cloneObj = Object.create(Object.getPrototypeOf(this));
      cloneObj.prototypeName = this.prototypeName;
      return cloneObj;
    }

    displayInfo(): string {
      return `This is a prototype named: ${this.prototypeName}`;
    }
  }

  // Creating an instance of Prototype
  const originalPrototype = new Prototype("OriginalPrototype");
  console.log(originalPrototype.displayInfo());

  // Cloning the original prototype
  const clonedPrototype = originalPrototype.clone();
  clonedPrototype.prototypeName = "ClonedPrototype";
  console.log(clonedPrototype.displayInfo());

  // Updating the example element in the DOM
  const exampleEl = document.querySelector("#example");
  if (exampleEl) {
    exampleEl.textContent = `
      class Prototype {
        constructor(name) {
          this.prototypeName = name;
        }

        clone() {
          const cloneObj = Object.create(Object.getPrototypeOf(this));
          cloneObj.prototypeName = this.prototypeName;
          return cloneObj;
        }

        displayInfo() {
          return \`This is a prototype named: \${this.prototypeName}\`;
        }
      }

      const originalPrototype = new Prototype("OriginalPrototype");
      console.log(originalPrototype.displayInfo());

      const clonedPrototype = originalPrototype.clone();
      clonedPrototype.prototypeName = "ClonedPrototype";
      console.log(clonedPrototype.displayInfo());
    `;
  }
};
