import Image from 'next/image'
import React, { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex w-screen h-screen justify-center items-center ">
      <div className="flex flex-col sm:w-128 w-343px sm:h-128 sm:mb-10">
        <div className="flex flex-row justify-center">
        <Image
              src="/logo.svg"
              alt="Lookscout Logo"
              width={180}
              height={33.6}
              className="sm:mb-39.2px mb-3"
            />
            </div>
            <div className="flex flex-row bg-shadow sm:w-128 sm:h-27  w-343px h-84px rounded-t-md">
              <div>
              <Image
               src="/account.svg"
               alt="account"
               width={32}
               height={32}
               className="flex sm:pt-6 ml-6 pt-3 sm:ml-12 pb-3px"
               />
               <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-blue-1 text-14px ml-11.5px sm:ml-35.5px">Account</span>
               </div >   
               <Image src="/line.svg" alt="line" width={133}
               height={0} className=" flex pb-6 sm:w-133px w-12 " />          
               <div >
               <Image
               src="/personal.svg"
               alt="personal"
               width={32}
               height={32}
               className="flex sm:pt-6 pt-3 -ml-1 pb-3px"
               />
               <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-text-gray sm:ml-0  text-14px pt-1 -ml-18.33px">Personal</span>
               </div >
               <Image src="/line.svg" alt="line" width={133}
               height={46}  className="flex pb-6  sm:w-133px w-12"/>
               <div >
                <Image
               src="/billing.svg"
               alt="billing"
               width={32}
               height={32}
               className="flex sm:pt-6 pt-3 -ml-1 pb-3px"
               />
               <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-text-gray text-14px pt-1 -ml-9.33px">Billing</span>
               </div >
               <Image src="/line.svg" alt="line" width={133}
               height={0}  className="flex pb-6 sm:w-133px w-12"/>
               <div >
                <Image
               src="/done.svg"
               alt="done"
               width={32}
               height={32}
               className="flex sm:pt-6 pt-3 sm:mr-12 mr-6 pb-3px"
               />
                <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-text-gray text-14px">Done</span>
               </div >

               </div >
              <div className="flex flex-col items-center">
                <div className="div">

             <span className="flex font-sans font-medium  not-italic tracking-minus0.1px text-gray-1 text-14px sm:mt-8 ml-12 mt-4">Name</span>
    <form>
      <label>
        <input type="text" className="flex border rounded-md mt-2 w-295px sm:w-552px mx-12 h-46px  border-boxshadow max mb-4" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
    </form>
    </div>
    <div className="div">
             <span className="flex font-sans font-medium  not-italic tracking-minus0.1px text-gray-1 text-14px ml-12">Email*</span>
    <form>
      <label>
        <input type="text" className="flex border rounded-md mt-2 w-295px sm:w-552px mx-12 h-46px border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        
            
              </label>
              </form>
             <span className="flex font-sans font-normal  not-italic tracking-minus0.1px text-text-gray text-14px  ml-12 mt-2.5">Please input a real Email Address</span>
            </div> 
            </div>
    <div className="flex flex-col sm:flex-row">
      <div>
             <span className="flex font-sans font-medium  not-italic tracking-minus0.1px text-gray-1 text-14px mt-4 sm:ml-12 ml-6">Password*</span>
            <form>
      <label>
        <input type="text" className=" flex border rounded-md mt-2 w-295px sm:w-268px h-46px sm:ml-12 ml-6 border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            
        </label>
        </form>
            <span className="flex font-sans font-normal  not-italic tracking-minus0.1px text-text-gray text-14px sm:ml-12 ml-6 mt-2.5">Please enter your password</span>
            </div>
        <div>
            <span className="flex font-sans font-medium  not-italic tracking-minus0.1px text-gray-1 text-14px mt-4 sm:ml-4 ml-6">Confirm Password*</span>

        <form>
        <label>
        <input type="text" className="flex border rounded-md sm:ml-4 ml-6  mt-2 w-295px h-46px sm:w-268px  border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

            
       </label>
       </form>
            <span className="flex font-sans font-normal  not-italic tracking-minus0.1px text-text-gray text-14px sm:ml-4 ml-6 mt-2.5">Passwords need to match</span>       
       </div>
       </div>
       <div className="flex">
    <label className="sm:ml-12 ml-6">
      <input
        type="checkbox"
        className="mt-5 h-5 w-5 accent-blue-1"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </label>
    <span className="font-sans font-medium text-base not-italic tracking-minus0.1px text-gray-1 ml-2 mt-19px">I accept the Terms and Privacy Policy</span>
    </div>   
       <button className="">
       <Image
              src="nextbutton.svg"
              alt="name"
              width={100}
              height={50}
              className="sm:mt-46px sm:ml-504px hidden sm:block"
              
            /> 
              </button>
       <button>
            <div className="flex flex-row w-295px h-46px justify-center items-center text-white-1  bg-blue-1 rounded-md sm:hidden ml-6 mt-3 ">
            <span className=" font-sans font-semibold text-15px">Next ></span>  
            </div>
        
        </button>
       </div >
       </div>
  )
}
