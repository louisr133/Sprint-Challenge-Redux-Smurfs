1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  .map()
  .filter()
  .reduce()
  
  We use the spread operator.
  
  
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions are functions that return objects to the reducers.Reducers decide what to do with the returned data and can set it to the store. The store is the state of the application. It is the single source of truth, because it is always updating components that are connected to it.
  
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state can be accessed anywhere, where are Component state is usually only accessed in that particular component.
  Creating a form would be a good use of component state, because the whole application doesn't need that information.
  
1.  What is middleware?

  Middleware is part of the redux model where aysnc functions can happen.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  thunk is middle where that calls an async funtion so that we can make api calls.
  
1.  Which `react-redux` method links up our `components` with our `redux store`?

  connect
