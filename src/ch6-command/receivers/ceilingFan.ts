export class CeilingFan {
  HIGH = 3;
  MEDIUM = 2;
  LOW = 1;
  OFF = 0;
  speed = 0;
  state = "off";

  high() {
    this.speed = this.HIGH;
    console.log("Ceiling fan is on high speed");
  }

  medium() {
    this.speed = this.MEDIUM;
    console.log("Ceiling fan is on medium speed");
  }

  low() {
    this.speed = this.LOW;
    console.log("Ceiling fan is on low speed");
  }

  on() {
    if (this.state === "off") {
      this.state = "on";
      console.log("Ceiling fan is on");
    }
  }

  off() {
    this.state = "off";
    this.speed = this.OFF;
    console.log("Ceiling fan is off");
  }

  getSpeed() {
    return this.speed;
  }
}
