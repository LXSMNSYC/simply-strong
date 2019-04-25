/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import TypeCheckInterface from '../typecheck-interface';
import { isFunction } from '../utils';

/**
 * @ignore
 */
class AsyncIterable extends TypeCheckInterface {
  is(value) {
    return value != null && isFunction(value[Symbol.iterator]);
  }

  toString() {
    return 'AsyncIterable';
  }
}

export default new AsyncIterable();
