export default () => {
  const RevealingModule = (() => {
    let privateCounter = 0;
    function privateFunction() {
      privateCounter++;
    }
    function publicFunction() {
      publicIncrement();
    }
    function publicIncrement() {
      privateFunction();
    }
    function publicGetCount() {
      return privateCounter;
    }
    // Explicitly reveal public pointers to private functions and properties
    return {
      increment: publicIncrement,
      getCount: publicGetCount,
      publicFunction,
    };
  })();

  console.log(RevealingModule.getCount());
  RevealingModule.increment();
  console.log(RevealingModule.getCount());
  RevealingModule.publicFunction();
  console.log(RevealingModule.getCount());

  const exampleEl = document.querySelector("#example");
  if (exampleEl) {
    exampleEl.textContent = `
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
    `;
  }
};
