const s=()=>{class a{startCar(){console.log("Car engine started")}setTemperature(t){console.log("Setting car temperature to "+t+" degrees")}playMusic(t){console.log("Playing "+t)}startCarAndSetEnvironment(t,r){this.startCar(),this.setTemperature(t.toString()),this.playMusic(r)}}new a().startCarAndSetEnvironment(22,"Favorite Song");const e=document.querySelector("#example");e&&(e.textContent=`
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
    `)};export{s as default};
