import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = ({header, body}) =>{
    return(
        <div>
            <div className="app-frame">
                <AppHeader title={header}/>
                <br/>
                <div>{body}</div>
                <div>Aplicación desarrolada en ReactJS con Redux.</div>
            </div>
        </div>
    );
};

AppFrame.propTypes ={
    header:PropTypes.string.isRequired,
    body:PropTypes.element.isRequired,
};

export default AppFrame;