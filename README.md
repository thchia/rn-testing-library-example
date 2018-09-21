# rn-testing-library-example

This is a very minimal example of using the fantastic [`react-testing-library`](https://github.com/kentcdodds/react-testing-library) to test React Native components.

The basic premise is to alias `react-native` to [`react-native-web`](https://github.com/necolas/react-native-web) so that components can be rendered in a DOM and operated on by the functions in `react-testing-library` ([credits to James Long](https://github.com/kentcdodds/react-testing-library/issues/22#issuecomment-423395510)).

## What to look at:

- The `__tests__` folder contains a single test for the `Counter` component. It tests for rendered text and simulates an `onPress()` event.

- ### `package.json`

  Whatever is included with `react-native init` and:

  - `jest`
  - `react-testing-library`
  - `react-native-web`
  - `react-dom`
  - `node-noop`

- ### Jest config

  ```js
  {
    "preset": "react-native",
    "transform": {
        "^.+\\.jsx?$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
      },
      "testEnvironment": "jsdom",
      "moduleNameMapper": {
        // alias imports of react-native to react-native-web
        "^react-native$": "react-native-web",
        // block react-art
        "^react-art$": "node-noop"
      }
  }
  ```

- ### _onPress_

  You can simulate a press event as follows:

  ```js
  fireEvent['press'] = (node, init) => {
    fireEvent.mouseDown(node, init)
    fireEvent.mouseUp(node, init)
  }

  ...

  fireEvent.press(getByText("Tap here"))
  ```
