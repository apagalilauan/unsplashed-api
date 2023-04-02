import React from 'react'

const ButtonLink = ({children,icon, url }) => {
    return ( 
        <a href={url} className='hover:bg-redshade hover:shadow-lg rounded-md transition px-4 py-2'>{icon}</a>
    );
}
 
export default ButtonLink;