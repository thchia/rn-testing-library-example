## rn-testing-library-example

This is a very minimal example of using the fantastic `react-testing-library` to test React Native components. The basic premise is to use `react-native-web` to render components ([credits](https://github.com/kentcdodds/react-testing-library/issues/22#issuecomment-423395510)).

## What to look at:

The `__tests__` folder contains a single test for the `Counter` component.

### `package.json`

Aside from whatever is included with `react-native init`:

- `jest`
- `react-testing-library`
- `react-native-web`
- `react-dom`
- `node-noop`

### Jest config

```js
{
  ...
  "transform": {
      "^.+\\.jsx?$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
    },
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
      "^react-native$": "react-native-web",
      "^react-art$": "node-noop"
    }
}
```

### _press_ event

```js
fireEvent['press'] = (node, init) => {
  fireEvent.mouseDown(node, init)
  fireEvent.mouseUp(node, init)
}
```
