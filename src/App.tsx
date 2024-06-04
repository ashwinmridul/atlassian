import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import './App.css';
import { getFormattedDateString } from './utils';

const App: FC = React.memo(() => {
  const [currentTime, setCurrentTime]: [string, Dispatch<SetStateAction<string>>] = useState('');

    useEffect(() => {
        setCurrentTime(getFormattedDateString(new Date()));
    }, []);

    return <div className='date' data-testid='date'>
        <span>Current Time: {currentTime}</span>
    </div>
});

export default App;
