var d=Object.defineProperty;var m=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var o=(r,e,t)=>(m(r,typeof e!="symbol"?e+"":e,t),t);const g=()=>{class r{drive(){console.log("Driving "+this.model)}}class e{charge(){console.log("Charging "+this.model)}}function t(i,a){a.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(p=>{Object.defineProperty(i.prototype,p,Object.getOwnPropertyDescriptor(s.prototype,p)||Object.create(null))})})}class n{constructor(a){o(this,"model");o(this,"drive",()=>{});o(this,"charge",()=>{});this.model=a}}t(n,[r,e]);const c=new n("Tesla Model 3");c.drive(),c.charge();const l=document.querySelector("#example");l&&(l.textContent=`
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
    `)};export{g as default};
