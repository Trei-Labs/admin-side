import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className='flex' >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      
      
        <div className=' pt-[200px] w-[50%]  bg-sky-500 h-[100vh] p-[50px]' >
          <label className='heading' >Welcome to Admin Portal</label>
          <p className=' text-[30px] mt-[50px]' >Choose the Loyalty Program <br/> You want to set-up</p>
        </div>
        <div className=' flex-col w-[50%] bg-sky-500 h-[100vh] p-[50px]' >
          <div className='card' ></div>
          <div className='card' ></div>
        </div>
    </div>
        
  )
}
