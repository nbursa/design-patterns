export default () => {
  interface Mediator {
    notify(sender: object, event: string): void;
  }

  class ConcreteMediator implements Mediator {
    private component1: Component1;
    private component2: Component2;

    constructor() {
      this.component1 = new Component1(this);
      this.component2 = new Component2(this);

      this.component1.setMediator(this);
      this.component2.setMediator(this);
    }

    notify(_sender: object, event: string): void {
      if (event === "A") {
        console.log("Mediator reacts on A and triggers following operations:");
        this.component2.doC();
      } else if (event === "D") {
        console.log("Mediator reacts on D and triggers following operations:");
        this.component1.doB();
        this.component2.doC();
      }
    }

    public getComponent1(): Component1 {
      return this.component1;
    }
    public getComponent2(): Component2 {
      return this.component2;
    }
  }

  class BaseComponent {
    protected mediator?: Mediator;

    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }

    public setMediator(mediator: Mediator): void {
      this.mediator = mediator;
    }
  }

  class Component1 extends BaseComponent {
    public doA(): void {
      console.log("Component 1 does A.");
      this.mediator?.notify(this, "A");
    }

    public doB(): void {
      console.log("Component 1 does B.");
      this.mediator?.notify(this, "B");
    }
  }

  class Component2 extends BaseComponent {
    public doC(): void {
      console.log("Component 2 does C.");
      this.mediator?.notify(this, "C");
    }

    public doD(): void {
      console.log("Component 2 does D.");
      this.mediator?.notify(this, "D");
    }
  }

  const mediator = new ConcreteMediator();

  mediator.getComponent1().doA(); // Component 1 does A.
  mediator.getComponent2().doD(); //Component 2 does D.

  const exampleEl = document.querySelector("#example");

  if (exampleEl) {
    exampleEl.textContent = `
      interface Mediator {
        notify(sender: object, event: string): void;
      }
    
      class ConcreteMediator implements Mediator {
        private component1: Component1;
        private component2: Component2;
    
        constructor() {
          this.component1 = new Component1(this);
          this.component2 = new Component2(this);
    
          this.component1.setMediator(this);
          this.component2.setMediator(this);
        }
    
        notify(_sender: object, event: string): void {
          if (event === "A") {
            console.log("Mediator reacts on A and triggers following operations:");
            this.component2.doC();
          } else if (event === "D") {
            console.log("Mediator reacts on D and triggers following operations:");
            this.component1.doB();
            this.component2.doC();
          }
        }
    
        public getComponent1(): Component1 {
          return this.component1;
        }
        public getComponent2(): Component2 {
          return this.component2;
        }
      }
    
      class BaseComponent {
        protected mediator?: Mediator;
    
        constructor(mediator: Mediator) {
          this.mediator = mediator;
        }
    
        public setMediator(mediator: Mediator): void {
          this.mediator = mediator;
        }
      }
    
      class Component1 extends BaseComponent {
        public doA(): void {
          console.log("Component 1 does A.");
          this.mediator?.notify(this, "A");
        }
    
        public doB(): void {
          console.log("Component 1 does B.");
          this.mediator?.notify(this, "B");
        }
      }
    
      class Component2 extends BaseComponent {
        public doC(): void {
          console.log("Component 2 does C.");
          this.mediator?.notify(this, "C");
        }
    
        public doD(): void {
          console.log("Component 2 does D.");
          this.mediator?.notify(this, "D");
        }
      }
    
      const mediator = new ConcreteMediator();
    
      mediator.getComponent1().doA(); // Component 1 does A.
      mediator.getComponent2().doD(); //Component 2 does D.
    `;
  }
};
