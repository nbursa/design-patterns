var n=Object.defineProperty;var r=(t,e,o)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var s=(t,e,o)=>(r(t,typeof e!="symbol"?e+"":e,o),o);const d=()=>{class t{constructor(a,l){s(this,"model");s(this,"year");this.model=a,this.year=l}displayInfo(){return this.model+" "+this.year}}const e=new t("Tesla",2020);console.log(e.displayInfo());const o=document.querySelector("#example");o&&(o.textContent=`
      function Car(model, year) {
        this.model = model;
        this.year = year;
        this.displayInfo = function() {
          return this.model + " " + this.year;
        };
      }
  
      const myCar = new Car('Tesla', 2020);
      console.log(myCar.displayInfo()); // Output: Tesla 2020
    `)};export{d as default};
