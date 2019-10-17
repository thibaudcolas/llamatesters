# Q2 React unit tests with Jest workshop

This repository is the starter code for the React unit tests workshop we ran on 2019-10-16, as part of the front-end team’s [Q2 Jest tests rock](https://docs.google.com/document/d/1loTrPeS5Gj-JwT3eY4OidmsVl75-C2UGgdyPMrPwQFY/edit#).

## Resources

> 🎥 **Recording of the workshop: [Q2 React tests with Jest workshop 20191016](https://drive.google.com/file/d/1ATmsLoeHXPu7DZ7ivNCNqGcB879cQwmH/view?usp=sharing)**

Useful links:

- [Jest documentation](https://jestjs.io)
- [Enzyme documentation](https://airbnb.io/enzyme/)
- [Create React App documentation](https://create-react-app.dev)

## Workshop instructions

Please go through the following steps to set up the workshop project locally:

```sh
git clone git@git.torchbox.com:thibaudcolas/llamatesters.git
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

---

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
