import { Hearts } from "react-loader-spinner";
import React, { Component } from 'react';

class Loader extends Component {
    render() { 
        return (<>
        <Hearts
        width="200"
        height="200"
        color='#4a4452'
        wrapperStyle={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}
        />
        </>);
    }
}
 
export default Loader;