Air Quality in India - Interactive Project

### Simple interactive tool displaying the air quality of Indian cities in cigarettes and particulate matter. 

## INTRODUCTION

This interactive project allows users to select an Indian city and have their local air quality displayed in cigarettes and particulate matter.

The project displays each city in the form of a button, which can be clicked by users to have their air quality displayed on the right hand side.

The project can be seen in English or Hindi, with an available language selector at the top of the project.

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Landing Page][project-screenshot]

### Instructions

You have been given some data by the editorial department in the `./src/data` directory.

They need you to build an interactive project where users will select an Indian city and have their local air quality displayed in cigarettes and particulate matter.

How the users select their city is up to you: editorial have used dropdowns, buttons, maps, and keyword entry autocomplete text fields before. It's your choice.

#### Techincal requirements

The task must be served as all flat files so that the solution can scale in a serverless environment - e.g. we would put the HTML, CSS, and JS into S3 and serve statically

The task _could_ use node, npm, webpack, babel etc to compile/transpile into the end project files for deployment. Whatever environment you are comfortable with, but no jquery, please. If you prefer, you can build a webpage by hand - it's up to you.

The project is going to go live in areas that do not have good broadband access, so please pay attention to file size and performance.

Some users may have older phones, so please ensure your code works on IE11 and up.

#### Project requirements

Must have:

- Ability for users to choose a city and see air quality in the form of cigarettes and particulate matter (PM2.5)
- all text fields from the data json file displaying in a logical manner
- All production files output into a `./dist` folder ready for making live.

Nice to have:

- A version in hindi (data also supplied in separate JSON file)
- Test cases for your code.

## Built With

- HTML
- CSS
- [Javascript](https://www.javascript.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- yarn
  ```sh
  npm install --global yarn
  ```

### Installation using Yarn

1. Get to [https://github.com/SarahSoutoul/bbc-airquality](https://github.com/SarahSoutoul/bbc-airquality)
2. Clone the repo
   ```sh
   git clone https://github.com/SarahSoutoul/bbc-airquality
   ```
3. Install NPM packages
   ```sh
   yarn install
   ```
4. Run unit tests
   ```sh
   yarn test
   ```
5. get the dist production build
   ```sh
   yarn build
   ```
6. start the project
   ```sh
   yarn start
   ```

### Building dist folder for deployment

production build

```sh
yarn build
```

### Dev-server

The configurations of the developer mode are found in the webpack.config.dev.js. Run `yarn build-dev` to see the development build output

### Production server

The configurations of the production mode are found in the webpack.config.prod.js.
The productive server is running under localhost:8080. Run `yarn build` to see the production build output

### Webpack

There are two webpack configuration files:

webpack.config.dev.js (developer configuration)
webpack.config.prod.js (production configuration)

In the production version there are some plugins for minification and compression.

<!-- MARKDOWN LINKS & IMAGES -->

[project-screenshot]: images/landing-page.png
