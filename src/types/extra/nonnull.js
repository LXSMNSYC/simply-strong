/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';

/**
 * @ignore
 */
class NonNull extends TypeCheckInterface {
  is(value) {
    return value != null;
  }

  toString() {
    return 'NonNull';
  }
}

export default new NonNull();
