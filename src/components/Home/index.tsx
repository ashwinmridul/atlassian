import React, { useCallback, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { NavLink, useNavigate, NavigateFunction } from 'react-router-dom';

const Component = React.memo(() => {
    const navigate: NavigateFunction = useNavigate();
    const [currentTime, setCurrentTime]: [string, Dispatch<SetStateAction<string>>] = useState('');

    const onClick = useCallback(() => {
        navigate('search/abcd');
    }, [navigate]);

    useEffect(() => {
        const date = new Date();
        setCurrentTime(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
    }, []);

    return <div>
        <div>Current Time: {currentTime}</div>
        <NavLink to='/123'>123</NavLink><br />
        <NavLink to='/todos'>todos</NavLink><br />
        <NavLink to='/counter'>Counter</NavLink><br />
        <NavLink to='/calculator'>Calculator</NavLink>
        <button onClick={onClick}>abcd</button>
    </div>
});

Component.displayName = 'Home';

export default Component;
