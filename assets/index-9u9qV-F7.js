var b=Object.defineProperty;var d=(r,e,s)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var a=(r,e,s)=>(d(r,typeof e!="symbol"?e+"":e,s),s);const h=()=>{class r{constructor(){a(this,"observers",[]);a(this,"state")}attach(t){this.observers.includes(t)||this.observers.push(t)}detach(t){const o=this.observers.indexOf(t);o!==-1&&this.observers.splice(o,1)}notify(){for(const t of this.observers)t.update(this.state)}updateState(t){this.state=t,this.notify()}}class e{update(t){console.log(`Observer state updated to: ${t}`)}}const s=new r,n=new e,c=new e;s.attach(n),s.attach(c),s.updateState("State 1");const i=document.querySelector("#example");i&&(i.textContent=`
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
    `)};export{h as default};
