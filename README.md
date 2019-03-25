# Coding Challenge: Message Templates

Goal of this coding challenge is to have a template manager which allows the user to see all existing message templates they have and giving them the possibility to create, edit and delete them.

This functionality is part of one of our application we run for our users. While you're developing this application think about it as the part of something bigger.

You'll find the mockups, specifications and other resources you need to complete this project in [`resources/`](./resources).


## Goals


* State management and data fetching is handled with Redux
* Table component is useable as a React component
* Template list page is implemented
* Template edit page has implemented styles

**Overall goal:** Each part of the project has automated tests.

*Reminder: The CSS doesn't have to be pixel perfect*


### State management and data fetching is handled with Redux

As we have to think about this project as a part of a bigger application which uses

As we have to think about this project as a part of a bigger application which uses Redux, the whole state management and data fetching has to be handeld through Redux actions and reducer. For asynchronous parts of the logic you can use libraries you prefer. To complete the task you have to use the `templates` service. You will find the documentation this in the [services](src/services) folder.


### Table component is useable with as an React component

We have provided you with the CSS of our table component. Please implement the required React component(s) to use it in the task "Implement the template list page". If you want to change the CSS structure, please do so.


### Template list page is implemented

The template list page needs both React component(s) and styles. Please checkout the mockups and implement the page according to these.

*Note: A toggle component can be found in [`src/components`](./src/components).*


### Template edit page has implemented styles

The template edit page needs the complete CSS. Please add the styles according to the mockups. If you want to change the component's structure, please do so.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

