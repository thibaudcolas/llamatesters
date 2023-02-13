# JS unit test workshops | llamatesters

A short series of JS testing exercises with Jest, that fit within a one-hour remote workshop.

## Resources

Useful links:

- [Jest documentation](https://jestjs.io)
- [Enzyme documentation](https://airbnb.io/enzyme/)
- [Create React App documentation](https://create-react-app.dev)

## Workshop instructions

Please go through the following steps to set up the workshop project locally:

```sh
git clone git@github.com:thibaudcolas/llamatesters.git
cd llamatesters
nvm use
npm install
npm run test
```

If the project is set up correctly this last command should run the tests and report one failure:

```txt
Test Suites: 1 failed, 5 passed, 6 total
[...]
Ran all test suites.
```

From there, follow the recording of the workshop, going over the test suites in the following order:

1. `App.test.js`, most basic React component testing
1. `FizzBuzz.test.js`, fundamentals of React testing with Enzyme
1. `Icon.test.js`, introduction to snapshot testing
1. `Button.test.js`, shallow vs full rendering, further Enzyme APIs, simulating events, mocks
1. `ShowBetween.test.js`, real-world example, mocking time
