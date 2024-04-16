var l=Object.defineProperty;var c=(e,o,t)=>o in e?l(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var p=(e,o,t)=>(c(e,typeof o!="symbol"?o+"":o,t),t);const y=()=>{class e{constructor(n){p(this,"prototypeName");this.prototypeName=n}clone(){const n=Object.create(Object.getPrototypeOf(this));return n.prototypeName=this.prototypeName,n}displayInfo(){return`This is a prototype named: ${this.prototypeName}`}}const o=new e("OriginalPrototype");console.log(o.displayInfo());const t=o.clone();t.prototypeName="ClonedPrototype",console.log(t.displayInfo());const r=document.querySelector("#example");r&&(r.textContent=`
      class Prototype {
        constructor(name) {
          this.prototypeName = name;
        }

        clone() {
          const cloneObj = Object.create(Object.getPrototypeOf(this));
          cloneObj.prototypeName = this.prototypeName;
          return cloneObj;
        }

        displayInfo() {
          return \`This is a prototype named: \${this.prototypeName}\`;
        }
      }

      const originalPrototype = new Prototype("OriginalPrototype");
      console.log(originalPrototype.displayInfo());

      const clonedPrototype = originalPrototype.clone();
      clonedPrototype.prototypeName = "ClonedPrototype";
      console.log(clonedPrototype.displayInfo());
    `)};export{y as default};
