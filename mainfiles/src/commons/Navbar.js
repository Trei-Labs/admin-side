import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar =() =>{
    return(
    <div className=' flex flex-row items-end w-[100vw] h-[fit-content] p-[15px] bg-gray-400 ' >
        <ConnectButton/>
    </div>)
}

export default Navbar