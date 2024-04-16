var u=Object.defineProperty;var C=(c,r,t)=>r in c?u(c,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[r]=t;var e=(c,r,t)=>(C(c,typeof r!="symbol"?r+"":r,t),t);const m=()=>{class c{constructor(){e(this,"description","Basic Car")}cost(){return 2e4}}class r{constructor(s){e(this,"car");this.car=s}get description(){return`${this.car.description} with electric upgrade`}cost(){return this.car.cost()+1e4}}class t{constructor(s){e(this,"car");this.car=s}get description(){return`${this.car.description} with autopilot`}cost(){return this.car.cost()+5e3}}const o=new c,a=new r(o),i=new t(o),n=new t(new r(o));console.log(`${o.description} costs $${o.cost()}`),console.log(`${a.description} costs $${a.cost()}`),console.log(`${i.description} costs $${i.cost()}`),console.log(`${n.description} costs $${n.cost()}`);const l=document.querySelector("#example");l&&(l.textContent=`
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
    `)};export{m as default};
