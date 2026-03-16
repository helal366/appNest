import React from 'react';

const FetchErrorComponent = ({error}) => {
    return (
        <div className='text-red-500 font-bold text-center spacy-y-0 pb-40'>
                <p>Something went wrong!!!</p>
                <p>{error?.message}</p>
            </div>
    );
};

export default FetchErrorComponent;