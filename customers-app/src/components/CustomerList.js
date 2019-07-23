import React from 'react'
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({customers,urlPath}) =>{
    return(
            <div className="customer-list">
            {customers.map(item => 
                <CustomerListItem
                key={item.dni}
                dni={item.dni}
                name={item.name}
                editAction={'Editar'}
                deleteAction={'Eliminar'}
                urlPath={urlPath}
                />
            )}
            </div>
    );
};

CustomerList.propTypes = {
    customers:PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerList;