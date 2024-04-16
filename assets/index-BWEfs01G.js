var y=Object.defineProperty;var u=(r,e,a)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var o=(r,e,a)=>(u(r,typeof e!="symbol"?e+"":e,a),a);const m=()=>{class r{createEconomyCar(){return new e}createLuxuryCar(){return new a}}class e{constructor(){o(this,"model","Model 3");o(this,"year",2022)}displayInfo(){return`Tesla ${this.model} - ${this.year}`}}class a{constructor(){o(this,"model","Model S");o(this,"year",2022)}displayInfo(){return`Tesla ${this.model} - ${this.year}`}}const l=new r,n=l.createEconomyCar(),c=l.createLuxuryCar();console.log("economyCar:",n),console.log("luxuryCar:",c);const s=document.querySelector("#example");s&&(s.innerHTML=`
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
      
      console.log(\`\${economyCar.displayInfo()} | \${luxuryCar.displayInfo()}\`);`)};export{m as default};
