import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import getTodos from 'utils/getTodos';
import { Todo } from 'utils/types';

const Component = React.memo(() => {
    const [todos, setTodos]: [Todo[], Dispatch<SetStateAction<Todo[]>>] = useState([] as Todo[]);

    const fetchTodos = useCallback(async () => {
        const todos = await getTodos().catch(() => {});
        if (todos) setTodos(todos.todos);
    }, []);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos])

    return <div>
        {
            todos.map(todo => {
                return <div>
                    <div>User # {todo.userId}</div>
                    <div>{todo.todo}</div>
                </div>
            })
        }
    </div>
});

Component.displayName = 'Todos';

export default Component;
