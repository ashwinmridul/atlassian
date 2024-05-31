import React, { useCallback } from "react";
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { connect } from "react-redux";
import { CounterState } from "reducers/counterReducer/types";
import { CounterProps } from "./types";
import { decrement, increment } from "actions/counterAction";

const Counter = ({ counter, increment, decrement }: CounterProps) => {
    const navigate: NavigateFunction = useNavigate();

    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);
    return (
        <div>
            <p className="counter_title">Counter: {counter}</p>
            <button className="button" onClick={increment}>
                Increment
            </button>
            <button className="button" onClick={decrement}>
                Decrement
            </button>
            <button onClick={goBack}>Go back</button>
        </div>
    );
};

const mapStateToProps = ({counter}: {counter: CounterState}) => ({
    counter: counter.counter 
});

const mapDispatchToProps = () => ({
    increment,
    decrement
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);