import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const CustomerListItem = ({name, editAction, deleteAction, urlPath, dni}) =>{
    return(
        <div>
            <div className="customer-list-item">
                <div className="row">
                    <div className="col">
                        <Link to={`${urlPath}${dni}`}>{name}</Link> &nbsp;
                        <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link> &nbsp;
                        <Link to={`${urlPath}${dni}/del`}>{deleteAction}</Link>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
};

CustomerListItem.propTypes ={
    dni:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    deleteAction:PropTypes.string.isRequired,
    urlPath:PropTypes.string.isRequired,
};
export default CustomerListItem;