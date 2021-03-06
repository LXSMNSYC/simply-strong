/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { checkType } from '../utils';

class Nullable extends TypeCheckInterface {
  constructor(T) {
    super();
    checkType(T, 1);
    this.T = T;
  }

  equals(other) {
    return other instanceof Nullable && (this === other || this.T.equals(other.T));
  }

  is(value) {
    // eslint-disable-next-line valid-typeof
    return value == null || this.T.is(value);
  }

  toString() {
    return `${this.T}?`;
  }
}

export default T => new Nullable(T);
