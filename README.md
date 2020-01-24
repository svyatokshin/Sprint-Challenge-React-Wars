# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

- [x] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React Js makes it easy to create interactive UI’s. You are able to design simple views for each state in your application, and it will update and render whatever components need to be updated when the data is changed, rather than having everything re-render on the screen every time there is a small change. You also have the ability to build complex components that manage their own state, which in turn are composed to make interactive UIs. This allows you to only have to pass data through your app and keep state out of the DOM. React also allows for the use of JSX, which makes it easy to use Javascript within React.

- [x] What does it mean to _think_ in react?

    You have the ability to think of what you want react to do prior to writing code. If you visualize what needs to go where, you then have the ability to create the right components for each part, and then figure out the parent components each will need as well. You can then build a version that takes your data model and renders the UI but has no interactivity. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. 

- [x] Describe state.

    State describes the part of the app that can change. It is managed within the component. The state starts with a default value when a Component mounts and then suffers from mutations in time. It is a representation of one point in time, sort of like a snapshot.


- [x] Describe props.

    Props on the other hand get passed to the component and are similar to function parameters. They are the component’s configuration, or its options. They are received from above and immutable as far as the Component receiving them is concerned.

- [x] What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are basically anything that affects something outside of the scope of the current function that's being executed. Anything that results in changes that can be observed when the calculation is completed, beside the return value of the calculation itself is a side effect.
	In order to sync effects to state or prop changes, you must use the effect hook (useEffect(() =>{})).


## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add TL as collaborator on Github.
- [x] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [x] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [x] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.
- [x] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
- [x] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [x] Implement the project on this Branch, **committing progress & changes often.**
- [x] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [x] Add your Project Manager as a Reviewer on the Pull-request.
- [x] TL then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [x] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
- [x] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [x] Set the data you fetch to state.
- [x] Map over the list and render a component for each character on the page.
- [x] You must display at least one element for each star wars character in the data set.
- [x] The elements must be styled with either Reactstrap or styled-components - don't rely on browser default styles.

#### Required best practices:

- [x] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [x] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [x] Consistent quotation usage.
- [x] Spell-check.
- [x] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems
- [ ] Next week we will be looking at React forms. Look a head and try to create a search form that will filter through the data displayed from your characters. 

- [ ] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - Notice that there are `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
