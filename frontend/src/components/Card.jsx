import React from 'react'
import Button from './Button';

const Card = ({name, children, pimg, urls, username, likes, userlink ,...props}) => {
    return ( 
    <>
        <div className='relative bg-white rounded-xl break-inside-avoid mb-5 '>
            <a href={urls} target='_blank'>
                <img src={urls} className=' mx-auto rounded-t-xl' alt=''/>
            </a>
            <div className='flex flex-row justify-between p-5'>
                <div className='flex gap-2'>
                    <img src={pimg} alt='' className="w-12 h-12 object-cover bg-slate-400 rounded-full"/>
                        <div>
                            <p className='font-bold'>{name}</p>
                            <a href={userlink} className='text-pink'>@{username}</a>
                        </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{likes} </p>
                    <Button/>
                </div>
            </div>
            {children}
        </div>
    </> 
    );
}
 
export default Card;