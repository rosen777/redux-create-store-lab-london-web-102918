import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'

export default function createStore(reducer) {

  // add your code here
  let state

  function dispatch(action) {
   state = reducer(state, action)
   render()
  }

  function getState() {
    return state
  }

  dispatch({ type: '@@INIT' })

  return {
    dispatch,
    getState
  }

}

function render() {
    let container = document.getElementById('container');
}

