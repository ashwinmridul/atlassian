import { Todo } from "./types";
import axios from "axios";

export default async function getTodos(): Promise<{todos: Todo[]}> {
    const response = await axios.get('https://dummyjson.com/todos?limit=10&skip=0').catch(err => {
        console.error(err);
    });
    return response?.data;
}