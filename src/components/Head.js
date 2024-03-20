import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

export const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () =>{
     dispatch(toggleMenu());
    };


  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className='flex col-span-1'>
        <img 
        onClick={()=> toggleMenuHandler()}
        className='h-8 cursor-pointer'
        alt="menu"
         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
         />
         <a href="/">
         <img className='h-8 mx-2' alt="youtube-logo"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79YAV4WMPw0y1dW3op6Py1Yda92DnwHbjNYegDjZ1vQoVywt4OTUg_JA-ohD-rw4u5g&usqp=CAU"
         />
         </a>
    </div>
    <div className='col-span-10'>
    <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text"/>
   <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'> 🔍 </button>
    </div>
    <div className='col-span-1'>
        <img className='h-8' alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP7z4eskALryqEiK8X47vkR9-wpDMXwcVGZAWLbrPrDR4JM_tiDyZyTJhrsFyX8kRvRM&usqp=CAU" />
    </div>
    </div>
    
  )
}
