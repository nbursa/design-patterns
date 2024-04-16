const l=()=>{const e=(()=>{let t=0;function u(){t++}function i(){o()}function o(){u()}function c(){return t}return{increment:o,getCount:c,publicFunction:i}})();console.log(e.getCount()),e.increment(),console.log(e.getCount()),e.publicFunction(),console.log(e.getCount());const n=document.querySelector("#example");n&&(n.textContent=`
      const RevealingModule = (() => {
        // Private members
        let privateCounter = 0;
        function privateFunction() {
          privateCounter++;
        }
        // Public members
        function publicIncrement() {
          privateFunction();
        }
        function publicGetCount() {
          return privateCounter;
        }
        return {
          increment: publicIncrement,
          getCount: publicGetCount,
        };
      })();
      
      console.log(RevealingModule.getCount());
      RevealingModule.increment();
      console.log(RevealingModule.getCount());
    `)};export{l as default};
