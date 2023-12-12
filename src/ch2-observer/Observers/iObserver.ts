import Subject from "../Subject/subject-abstract.class.ts";

export default interface IObserver {
  update(obj: Subject): void; // take object to make data that needed by update more dynamic
}
