import React from 'react';
import MerchantDisplay from '../src/commons/MerchantDisplay';
import GetAccount from '../src/hooks/GetAccount';
import GetBalance from '../src/hooks/GetBalance';

const BuyGet =() =>{
    return(
        <div className='flex flex-col items-center bg-gray-100 w-[100vw] h-[fit-content] py-5 '  >
            <div className='flex flex-row w-[80%] h-[fit-content] bg-white mt-10 border-2 rounded-xl shadow-md p-[20px] ' >
                <div className='flex flex-col w-[50%]' >
                   <p className='text-[15px] font-bold ' >Account Details</p>
                    <p className='text-2xl' >Business Account</p>
                    <p>Address : {GetAccount()}</p> 
                </div>
                <div className='flex flex-col items-end w-[50%]' >
                   <p className='text-[15px] font-bold ' >Available Funds</p>
                    <p className='text-xl' >{GetBalance()}</p>
                </div>
                
            </div>
            <div className='flex flex-col w-[80%] h-[fit-content] bg-white mt-10 border-2 rounded-xl shadow-md p-[20px] ' >
                <p className='text-2xl font-bold ' >Programme Set Up</p>
                <br/>
                <p>Program Name : <input className='w-[300px] p-[3px] px-[10px] border-2 rounded-xxl'  /></p>
                <p className='mt-4' >Minimum Amount : <input className='w-[300px] p-[3px] px-[10px] border-2 rounded-xxl'  /></p>
                <p className='mt-4' >Minimum Purchases Required : <input className='w-[300px] p-[3px] px-[10px] border-2 rounded-xxl'  /></p>
                <button className='px-4 py-2 mt-5 bg-indigo-800 w-[fit-content] text-white hover:bg-indigo-500 rounded-xl '  >Launch Program !</button>
            </div>
            <div className='flex flex-col w-[80%] h-[fit-content] bg-white mt-10 border-2 rounded-xl shadow-md p-[20px] ' >
                <p className='text-2xl font-bold ' >Current Programs</p>
                <br/>
                <MerchantDisplay/>
            </div>
        </div>
    )
}

export default BuyGet;