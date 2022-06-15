import React from 'react';
import { FaEthereum} from "react-icons/fa";
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Cashback =()=>{
    return(
        <div className='flex justify-center items-center flex-col bg-gray-100 w-[100vw] h-[100vh]' >
            <div className=' px-[100px] flex items-center flex-row w-[100vw] justify-evenly ' >
                <div className='flex flex-row w-[60%] h-[250px] p-[20px] bg-white rounded-xl border-2 mr-[20px]' >
                    <div className='w-[50%]' >
                        <p className='text-[15px]' >Account Details - Wagmi Provider</p>
                        <br/>
                        <p className='text-[30px] font-bold ' >Business Account</p>
                        <p className='text-[13px]' >Address : </p>
                        <button className='mt-[40px] bg-indigo-800 text-white p-[13px] rounded-xl hover:bg-indigo-600 ' >Create Payment Link</button>
                    </div>
                    <div className='w-[50%] text-end' >
                        <p className='text-[15px]' >Available Funds</p>
                        <br/>
                        <label className='text-[20px]' ><FaEthereum className='inline' /> 0.176</label>
                    </div>
                    
                </div>
                <div className=' flex flex-col justify-center items-center w-[40%] h-[fit-content] bg-white rounded-xl border-2 p-[20px] ' >
                    <p className='font-bold text-[20px]' >CashBack Details</p>
                    <br/>
                    <input className='w-[80%] border-2  rounded-[10px] p-1 px-2 ' placeholder='Minimum Purchases' />
                    <input className='w-[80%] border-2  rounded-[10px] p-1 px-2 mt-5 ' placeholder='% Cashback' />
                    <button className='bg-indigo-800 text-white p-[10px] rounded-[15px] mt-5 hover:bg-indigo-600 ' >Create Program</button>
                </div>
            </div>
        </div>
    )
}

export default Cashback