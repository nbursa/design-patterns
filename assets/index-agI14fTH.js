const C=()=>{class t{}class l extends t{createCar(e,a){return new o(e,a)}}class o{constructor(e,a){this.model=e,this.year=a}displayInfo(){return`Tesla ${this.model} - ${this.year}`}}const n=new l().createCar("Model S",2020);console.log(n.displayInfo());const r=document.querySelector("#example");r&&(r.textContent=`class TeslaCarCreator extends CarCreator {
  createCar(model, year) {
    return new TeslaCar(model, year);
  }
}

class TeslaCar {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    return \`Tesla \${this.model} - \${this.year}\`;
  }
}

const teslaCreator = new TeslaCarCreator();
const myTesla = teslaCreator.createCar("Model S", 2020);
console.log(myTesla.displayInfo()); // Output: Tesla Model S - 2020`)};export{C as default};
