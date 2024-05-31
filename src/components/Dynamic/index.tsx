import React, { useCallback } from 'react';
import { useParams, useNavigate, NavigateFunction } from 'react-router-dom';
import { DynamicProps } from './types';

const Component = React.memo(({numeric}: DynamicProps) => {
    const {id}: {id?: string} = useParams();
    const navigate: NavigateFunction = useNavigate();

    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return <div>
        <div>{numeric ? 'Numeric': 'Common'} Search: {id}</div>
        <button onClick={goBack}>Go back</button>
    </div>
});

Component.displayName = 'Dynamic';

export default Component;
