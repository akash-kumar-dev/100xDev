import {describe, expect, test, it} from '@jest/globals';
import {sum} from '../index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds -3 + 2 to equal -1', () => {
    expect(sum(-3, 2)).toBe(-1);
  });
});