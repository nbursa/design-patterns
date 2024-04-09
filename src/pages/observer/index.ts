export default () => {
  interface Observer {
    update: (state: any) => void;
  }

  interface Subject {
    attach: (observer: Observer) => void;
    detach: (observer: Observer) => void;
    notify: () => void;
  }

  class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: any;

    attach(observer: Observer): void {
      const isExist = this.observers.includes(observer);
      if (isExist) return;
      this.observers.push(observer);
    }

    detach(observer: Observer): void {
      const observerIndex = this.observers.indexOf(observer);
      if (observerIndex !== -1) {
        this.observers.splice(observerIndex, 1);
      }
    }

    notify(): void {
      for (const observer of this.observers) {
        observer.update(this.state);
      }
    }

    updateState(state: any): void {
      this.state = state;
      this.notify();
    }
  }

  class ConcreteObserver implements Observer {
    update(state: any): void {
      console.log(`Observer state updated to: ${state}`);
    }
  }

  const subject = new ConcreteSubject();
  const observer1 = new ConcreteObserver();
  const observer2 = new ConcreteObserver();

  subject.attach(observer1);
  subject.attach(observer2);

  subject.updateState("State 1");

  const exampleEl = document.querySelector("#example");

  if (exampleEl) {
    exampleEl.textContent = `
      interface Observer {
        update: (state: any) => void;
      }

      interface Subject {
        attach: (observer: Observer) => void;
        detach: (observer: Observer) => void;
        notify: () => void;
      }

      class ConcreteSubject implements Subject {
        private observers: Observer[] = [];
        private state: any;

        attach(observer: Observer): void {
          const isExist = this.observers.includes(observer);
          if (isExist) return;
          this.observers.push(observer);
        }

        detach(observer: Observer): void {
          const observerIndex = this.observers.indexOf(observer);
          if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
          }
        }

        notify(): void {
          for (const observer of this.observers) {
            observer.update(this.state);
          }
        }

        updateState(state: any): void {
          this.state = state;
          this.notify();
        }
      }

      class ConcreteObserver implements Observer {
        update(state: any): void {
          console.log(\`Observer state updated to: \${state}\`);
        }
      }

      const subject = new ConcreteSubject();
      const observer1 = new ConcreteObserver();
      const observer2 = new ConcreteObserver();

      subject.attach(observer1);
      subject.attach(observer2);

      subject.updateState('State 1');
    `;
  }
};
