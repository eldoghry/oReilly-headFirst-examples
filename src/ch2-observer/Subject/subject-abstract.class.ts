import IObserver from "../Observers/iObserver.ts";

export default abstract class Subject {
  observers: IObserver[] = [];

  attach(observer: IObserver) {
    this.observers.push(observer);
  }

  detach(observer: IObserver) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    console.log(`=======================================`);
    console.log(`Notify Observers(${this.observers.length}) with new updates`);
    console.log("Timestamp: " + Date.now());

    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}
