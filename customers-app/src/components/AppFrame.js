import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';
import './../css/AppFrame.css'
const AppFrame = ({header, body}) =>{
    return(
        <div>
            <div className="app-frame" style={{marginTop:"50px"}}>
                <AppHeader title={header}/>
                    {body}
                    <div className="text-muted">
                    <p> 
                        <a href="https://es.reactjs.org/">REACT JS</a>
                        &nbsp; &nbsp; &nbsp;
                        <a href="https://es.redux.js.org/">REDUX</a>  
                        </p>
                        <p> Aplicación desarrolada en ReactJS con Redux | Coded by CristianCuartas </p>
                    </div>
            </div>
        </div>
        
    );
};

AppFrame.propTypes ={
    header:PropTypes.string.isRequired,
    body:PropTypes.element.isRequired,
};

export default AppFrame;