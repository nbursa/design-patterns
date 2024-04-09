export default () => {
  interface Command {
    execute: () => void;
  }

  class Light {
    turnOn(): void {
      console.log("Light turned on");
    }
    turnOff(): void {
      console.log("Light turned off");
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
    private command!: Command;
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

  const exampleEl = document.querySelector("#example");

  if (exampleEl) {
    exampleEl.textContent = `
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
    `;
  }
};
