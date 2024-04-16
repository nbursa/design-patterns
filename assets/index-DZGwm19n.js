var n=Object.defineProperty;var i=(r,t,e)=>t in r?n(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>(i(r,typeof t!="symbol"?t+"":t,e),e);const d=()=>{class r{constructor(){o(this,"cars",{})}getCar(a){if(!(a in this.cars)){const[s,c,l]=a.split("-");this.cars[a]={make:s,model:c,color:l},console.log("Car created:",a)}return this.cars[a]}}const t=new r;t.getCar("Ford-Mustang-Red"),t.getCar("BMW-M3-Blue"),t.getCar("Ford-Mustang-Red");const e=document.querySelector("#example");e&&(e.textContent=`
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
    `)};export{d as default};
