const t=()=>{console.log((()=>{let a="I am private";return{publicMethod:()=>`The public can see me! Here's a private variable: ${a}`}})().publicMethod());const e=document.querySelector("#example");e&&(e.innerHTML=`      const MyModule = (() => {
        let privateVar = 'I am private';
        return {
          publicMethod: () => \`The public can see me! 
          Here's a private variable: \${privateVar}\`,
        };
      })();
      
      console.log(MyModule.publicMethod());`)};export{t as default};
