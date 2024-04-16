var u=Object.defineProperty;var h=(n,t,o)=>t in n?u(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var s=(n,t,o)=>(h(n,typeof t!="symbol"?t+"":t,o),o);const f=()=>{class n{turnOn(){console.log("Light turned on")}turnOff(){console.log("Light turned off")}}class t{constructor(e){s(this,"light");this.light=e}execute(){this.light.turnOn()}}class o{constructor(e){s(this,"light");this.light=e}execute(){this.light.turnOff()}}class a{constructor(){s(this,"command")}setCommand(e){this.command=e}pressButton(){this.command.execute()}}const r=new n,l=new t(r),d=new o(r),m=new a;m.setCommand(l),m.pressButton(),m.setCommand(d),m.pressButton();const c=document.querySelector("#example");c&&(c.textContent=`
      interface Command {
        execute: () => void;
      }

      class Light {
        turnOn(): void {
          console.log('Light turned on');
        }
        turnOff(): void {
          console.log('Light turned off');
        }
      }

      class TurnOnCommand implements Command {
        private light: Light;
        constructor(light: Light) {
          this.light = light;
        }
        execute(): void {
          this.light.turnOn();
        }
      }

      class TurnOffCommand implements Command {
        private light: Light;
        constructor(light: Light) {
          this.light = light;
        }
        execute(): void {
          this.light.turnOff();
        }
      }

      class RemoteControl {
        private command: Command;
        setCommand(command: Command): void {
          this.command = command;
        }
        pressButton(): void {
          this.command.execute();
        }
      }

      const light = new Light();
      const turnOnCommand = new TurnOnCommand(light);
      const turnOffCommand = new TurnOffCommand(light);

      const remote = new RemoteControl();
      remote.setCommand(turnOnCommand);
      remote.pressButton();

      remote.setCommand(turnOffCommand);
      remote.pressButton();
    `)};export{f as default};
