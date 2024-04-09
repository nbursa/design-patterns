export default () => {
  class CarControlFacade {
    startCar() {
      console.log("Car engine started");
    }
    setTemperature(temp: string) {
      console.log("Setting car temperature to " + temp + " degrees");
    }
    playMusic(trackName: string) {
      console.log("Playing " + trackName);
    }
    // Facade method to start the car and set an initial environment
    startCarAndSetEnvironment(temp: string | number, trackName: string) {
      this.startCar();
      this.setTemperature(temp.toString());
      this.playMusic(trackName);
    }
  }

  const carControl = new CarControlFacade();
  carControl.startCarAndSetEnvironment(22, "Favorite Song");

  const exampleEl = document.querySelector("#example");

  if (exampleEl) {
    exampleEl.textContent = `
      class CarControlFacade {
        startCar() {
          console.log("Car engine started");
        }
        setTemperature(temp) {
          console.log("Setting car temperature to " + temp + " degrees");
        }
        playMusic(trackName) {
          console.log("Playing " + trackName);
        }
        // Facade method to start the car and set an initial environment
        startCarAndSetEnvironment(temp, trackName) {
          this.startCar();
          this.setTemperature(temp);
          this.playMusic(trackName);
        }
      }

      const carControl = new CarControlFacade();
      carControl.startCarAndSetEnvironment(22, "Favorite Song");
    `;
  }
};
