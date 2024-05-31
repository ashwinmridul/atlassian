import { Dispatch } from "react";
import { CounterAction } from "./types";

export const increment = () => (dispatch: Dispatch<CounterAction>) => dispatch({ type: "INCREMENT" });
export const decrement = () => (dispatch: Dispatch<CounterAction>) => dispatch({ type: "DECREMENT" });
