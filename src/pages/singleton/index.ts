export default () => {
  class Singleton {
    private static instance: Singleton;
    private constructor() {
      // Private constructor ensures no outside instantiation.
    }
    static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
    public displayInfo(): string {
      return "I am a Singleton!";
    }
  }

  const singletonInstance = Singleton.getInstance();

  console.log(singletonInstance.displayInfo());

  const exampleEl = document.querySelector("#example");
  if (exampleEl) {
    exampleEl.textContent = `
      class Singleton {
        private static instance: Singleton;
        private constructor() {
          // constructor is private.
        }
        static getInstance(): Singleton {
          if (!Singleton.instance) {
            Singleton.instance = new Singleton();
          }
          return Singleton.instance;
        }
        public displayInfo(): string {
          return "I am a Singleton!";
        }
      }
      
      const singletonInstance = Singleton.getInstance();
      console.log(singletonInstance.displayInfo()); // Output: I am a Singleton!
    `;
  }
};
