import axios from "axios";

const RECEIVE_MESSAGE = "greetings/message";

const receiveMessage = (greeting) => ({
  type: RECEIVE_MESSAGE,
  payload: greeting,
});

export default function greetingsReducer(state = [], action = {}) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

const fetchMessage = async () => {
  await axios.get("api/greetings/random").then((response) => {
    return response.data.greeting;
  });
};

export { fetchMessage, receiveMessage };