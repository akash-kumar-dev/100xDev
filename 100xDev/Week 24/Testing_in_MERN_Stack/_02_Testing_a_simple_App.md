# Testing a simple app

Final code - [https://github.com/100xdevs-cohort-2/week-24-testing/tree/main/1-simple-test](https://github.com/100xdevs-cohort-2/week-24-testing/tree/main/1-simple-test)

Jest is one of many famous testing frameworks in Typescript

*   Initialize a simple TS project

```javascript
npm init -y
npx tsc --init
```

*   Change rootDir and srcDir

```javascript
"rootDir": "./src",
"outDir": "./dist",
```

*   Create `src/index.ts`

```javascript
export function sum(a: number, b: number) {
    return a + b
}
```

*   Add ts-jest as a dependency

```javascript
npm install --save-dev ts-jest  @jest/globals
```

*   Initialize jest.config.ts

```javascript
npx ts-jest config:init
```

*   Update package.json

```javascript
"scripts": {
    "test": "jest"
},
```

*   Add tests (index.test.ts)

```javascript
import {describe, expect, test} from '@jest/globals';
import {sum} from '../index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

*   Run `npm run test`