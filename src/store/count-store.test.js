import { expect, test } from 'vitest'
import {useCounter1Store, useCounter2Store} from './count-store'
import {preparePinia} from '../test/utils'

test('测试counter store 1', () => {
  const app = preparePinia();

  const store1 = useCounter1Store();

  expect(store1.count).equal(0);

  store1.increment();
  expect(store1.count).equal(1);
  expect(store1.doubleCount).equal(2);
});

test('测试counter store 2', () => {
  const app = preparePinia();

  const store2 = useCounter2Store();
  expect(store2.count).equal(0);
  expect(store2.doubleCount).equal(0);

  store2.increment();
  expect(store2.count).equal(1);
  expect(store2.doubleCount).equal(2);
});