var i=Object.defineProperty;var c=(n,t,e)=>t in n?i(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var a=(n,t,e)=>(c(n,typeof t!="symbol"?t+"":t,e),e);const l=()=>{const s=class s{constructor(){}static getInstance(){return s.instance||(s.instance=new s),s.instance}displayInfo(){return"I am a Singleton!"}};a(s,"instance");let n=s;const t=n.getInstance();console.log(t.displayInfo());const e=document.querySelector("#example");e&&(e.textContent=`
      class Singleton {
        private static instance: Singleton;
        private constructor() {
          // constructor is private.
        }
        static getInstance(): Singleton {
          if (!Singleton.instance) {
            Singleton.instance = new Singleton();
          }
          return Singleton.instance;
        }
        public displayInfo(): string {
          return "I am a Singleton!";
        }
      }
      
      const singletonInstance = Singleton.getInstance();
      console.log(singletonInstance.displayInfo()); // Output: I am a Singleton!
    `)};export{l as default};
