import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <dv className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </dv>
);

export default CollectionItem;