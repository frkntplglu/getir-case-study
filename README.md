# Getir Frontend Case

This project is a simple product listing and shopping cart that you can filter and sort the products by using UI. You can think of this project as a MVP, it was developed as soon as possible because "Speed is our currency 😊"

## Features

- Filter by item type "mug" or "shirt"
- Filter by brand the product belongs
- Filter by tags the product has
- Sort by price and added date ascendant or descendant
- Show only 16 products in a page and manage by a simple pagination

## Bonus Features

On top of requirements, I added some additional features. You can see Skeleton loader and spinner in order to provide a better UI experience to the user and you can click the name of a product, then you will see a modal that works based on current route to be able to see product's detail.

## Tech Stack

- React
- Redux
- Redux
- Styled Component
- JSON-Server
- React Router

## Folder Structure

##### Components

In this folder you can find presentational components. It means that these components don't care about global state. They may have their own state or props. They're about how things seem on a page.

##### Containers

In this folder you can find container components. It means that these components are related to global state. They can dispatch or get state from Redux store.

##### Actions

In this folder you can find Redux actions that you can dispatch any action.

##### Reducers

In this folder you can find Redux reducers that you can update the app state.

##### Hooks

In this folder you can find our custom hooks that we are able to use in more than one place in the project. For example useWindowSize, etc.

##### Utils

In this folder you can find our utility functions that we need in the project. To be able to maintain and developer easily, we have separated from the app logic.

##### Api

In this folder you can find our fake REST Api.

##### Services

In this folder you can find our simple api service and config. For example if you need to add token for Authorization to requests' Header, you can add in this folder and use anywhere you want.

##### Pages

In this folder you can find our route pages. In this case, we have only Homepage but as the project grows, we will have lots of screen such as Category, Product Detail, Orders, etc. so we can manage all of them in this folder.

##### Styles

In this folder you can find our global stylesheets.

##### Assets

In this folder you can find our assets such as image.

## Test

Unfortunately, I couldn't write any test for now. I've been interested in how to write test for a while.

## Installation

```sh
git commit https://github.com/frkntplglu/getir-case-study.git
cd getir-case-study
npm install
npm run api
npm start
```

After these operations, REST Api will execute on http://localhost:3001 and React App will execute on http://localhost:3000

## Live Demo

[Go Live Demo](https://getir-frontend-case.netlify.app/)

## Contribution

Please feel free to contribute to this project. All contributions will be welcomed. If you want to contact me you can send an email to furkantopalogluu@gmail.com
