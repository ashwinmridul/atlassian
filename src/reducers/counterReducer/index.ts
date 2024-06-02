import { CounterAction } from "actions/counterAction/types";
import { CounterState } from "./types";

const initialState: CounterState = {
    counter: 0
};

const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
switch (action.type) {
    case "INCREMENT":
        return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
        return { ...state, counter: state.counter - 1 };
    default:
        return state;
}
};

export default counterReducer;