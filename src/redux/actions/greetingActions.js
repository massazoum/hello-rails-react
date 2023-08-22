// actions/greetingActions.js
import axios from 'axios';

export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

export const fetchRandomGreeting = () => {
  return (dispatch) => {
    axios.get('/api/greetings/random')
      .then((response) => {
        dispatch(fetchGreetingSuccess(response.data.greeting));
      })
      .catch((error) => {
        // Handle error
      });
  };
};
