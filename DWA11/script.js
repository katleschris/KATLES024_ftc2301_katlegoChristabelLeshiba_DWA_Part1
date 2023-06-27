// Define action types
const ActionTypes = {
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT',
    RESET: 'RESET',
  };
  
  // Define reducer
  function counterReducer(state = 0, action) {
    switch (action.type) {
      case ActionTypes.ADD:
        return state + 1;
      case ActionTypes.SUBTRACT:
        return state - 1;
      case ActionTypes.RESET:
        return 0;
      default:
        return state;
    }
  }
  
  // Create the store
  function createStore(reducer) {
    let state = undefined;
    const subscribers = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      subscribers.forEach((subscriber) => subscriber(state));
    };
  
    const subscribe = (subscriber) => {
      subscribers.push(subscriber);
    };
  
    // Initialize the store
    dispatch({});
  
    return { getState, dispatch, subscribe };
  }
  
  // Create the store with the counterReducer
  const store = createStore(counterReducer);
  
  // Subscribe to store changes and log the new state to the console
  store.subscribe((state) => {
    console.log('New state:', state);
  });
  
  // User stories
  
  // Scenario: Increment the counter by one
  console.log('Initial state:', store.getState()); // Expected output: 0
  store.dispatch({ type: ActionTypes.ADD });
  console.log('New state:', store.getState()); // Expected output: 1
  
  // Scenario: Increment the counter by one
  console.log('Initial state:', store.getState()); // Expected output: 1
  store.dispatch({ type: ActionTypes.ADD });
  console.log('New state:', store.getState()); // Expected output: 2
  
  // Scenario: Increment the counter by one
  console.log('Initial state:', store.getState()); // Expected output: 2
  store.dispatch({ type: ActionTypes.SUBTRACT });
  console.log('New state:', store.getState()); // Expected output: 1
  
  // Scenario: Resetting the Tally Counter
  console.log('Initial state:', store.getState()); // Expected output: 1
  store.dispatch({ type: ActionTypes.RESET });
  console.log('New state:', store.getState()); // Expected output: 0
  