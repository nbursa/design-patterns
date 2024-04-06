export default () => {
  const MyModule = (() => {
    let privateVar = "I am private";
    return {
      publicMethod: () =>
        `The public can see me! Here's a private variable: ${privateVar}`,
    };
  })();

  console.log(MyModule.publicMethod());

  const exampleEl = document.querySelector("#module-example");
  if (exampleEl) {
    exampleEl.innerHTML = `      const MyModule = (() => {
        let privateVar = 'I am private';
        return {
          publicMethod: () => \`The public can see me! 
          Here's a private variable: \${privateVar}\`,
        };
      })();
      
      console.log(MyModule.publicMethod());`;
  }
};
