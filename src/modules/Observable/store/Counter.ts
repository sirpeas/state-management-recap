
import { makeAutoObservable } from 'mobx';

class Counter {
  value = 0;

  constructor() {
    makeAutoObservable(this)
  }

  increment = () => {
    this.value++;
  };

  decrement = () => {
    this.value--;
  };
}

const counterStore = new Counter();
export default counterStore;
