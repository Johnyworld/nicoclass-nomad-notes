import React from 'react';
import { Query } from 'react-apollo';

function App() {
    return (
        <div className='App'>
            <Query query={GET_NOTES}>{() => null}</Query>
        </div>
    );
}

export default App;
