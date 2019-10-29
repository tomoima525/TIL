---
title: "2019-10-28"
date: "2019-10-28"
---

☀️

# Jest import vs require

- https://jestjs.io/docs/en/manual-mocks.html#using-with-es-module-imports
- https://stackoverflow.com/questions/47056694/jest-mocking-default-exports-require-vs-import

```
When using es6 import you should know that jest is trying to resolve all the dependencies and also calls the constructor for the class that you are importing. During this step, you cannot mock it. The dependency has to be successfully resolved, and then you can proceed with mocks.

I should also add that as can be seen here jest by default hoists any jest.mocks to the top of the file so the order in which you place your imports does not really matter.
```

- You can not mock once dependency is resolved with `ES6 import`. Thus you can not change mocked values in each test.

- If you want to mock values during each test, then you should use `require`

# Hiding YellowWarning

- `console.disableYellowBox = true`

# Online lodash tester

- http://travistidwell.com/blog/2016/06/30/online-lodash-tester/

# Platform test

https://stackoverflow.com/a/48707663/4289852

```
export function getOS() {
  return Platform.OS;
}
in your component:

import * as helpers from './helpers';
render() {
    if (helpers.getOS() === 'android') {// do something}
}
```

```
it('does something on Android', () => {
  jest.spyOn(helpers, 'getOS').mockImplementation(() => 'android');
  // ...
}
```

# Workout

- NA
