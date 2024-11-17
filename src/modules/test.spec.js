import { expect, test } from 'vitest'

import tst from './test'

test('ajax', async () => {
  const response = await tst({age: 18});

  expect(response).toHaveProperty('data')
  expect(response.code).toBe(0)
  expect(response.message).toBe('success');
});