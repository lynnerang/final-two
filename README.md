# Pokedex

## Setup - Choose Your Own Adventure

### EITHER: 

This application is built from create-react-app

- `npm install`
- `npm start`
- Pull down the api https://github.com/turingschool-examples/poke-api

Both repositories should be cloned down to your machine, and should sit next to
each other. You'll need to create a repo on github to push your frontend
repository to, and then you'll need to change the remote of the frontend app to
match the repo on github.

![](./app.gif)

### OR:

Use `$ npx create-react-app pokedex` to create your own new React application. If you choose to do this, you may use this link to a loading gif (see iteration 1):
```https://66.media.tumblr.com/c99a579db3ae0fc164bf4cca148885d3/tumblr_mjgv8kEuMg1s87n79o1_400.gif```
or a link to a loading gif of your choice. Please do not waste more than 1 minute searching for a gif, though!

## Iteration 0

First thing we want to do is fetch some info for us to display. **Thunks are not required**
You are going to want to grab all the type data and populate a redux store. You should also have `isLoading` and `error` properties in your store. The data can be found at this API endpoint: `get /types`.

## Iteration 1

Lets work on the visual layer!

Once you've populated the redux store with all the type data you are going to want to display them as Cards. While we wait for the data please give your app a loading gif. 

Also, if there is an error fetching the data, please let the user know.

![](./loading.gif)

## Iteration 2

Now it's time to test! We just need to test our actions, reducers, mapStateToProps and mapDispatchToProps. You may reference the docs and the Testing Redux lesson, but may not look at past projects.

** You are not required to test your async code (including thunks)

## Iteration 3 (Extension)

If you look at the `type` data you'll notice there is a `pokemon` array that contains pokemon id's. You'll have to make a `get` request to `http://localhost:3001/pokemon/:id` to retrieve the corresponding pokemon.

This data should not be fetched until the user clicks on the card. You can implement this however you like. Also, you shouldn't need to make extra fetch calls, so once you've fetched the pokemon for a type once, you shouldn't need to do that again.

Display the following for each pokemon:
`name`, `type`(type name), `weight`, and display one of the pokemon `sprites`  
