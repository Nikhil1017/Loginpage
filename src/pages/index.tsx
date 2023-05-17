import Image from 'next/image';
import React, { useState } from 'react';
import DarkModeToggle from '../components/theme.tsx';

export default function Home() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex w-screen h-screen justify-center items-center dark:bg-outside-black">
      <div className="flex flex-col sm:w-128 w-343px sm:h-128 sm:mb-11 dark:bg-inside-black">
        <div className="flex flex-row justify-center">
           <Image
              src="/logo.svg"
              alt="Lookscout Logo"
              width={180}
              height={33.6}
              className="sm:mb-7 mb-3"
            />
            </div>
            <div className="flex flex-col bg-shadow sm:w-128 sm:h-24  w-343px h-19 rounded-t-md flex-initial dark:bg-bar-black">
            <div className="flex flex-row">
            <Image
               src="/account.svg"
               alt="account"
               width={32}
               height={32}
               className="flex sm:pt-6 ml-31px pt-3 sm:ml-12 sm:mr-1 mr-0.5"
               />
               <Image src="/line.svg" alt="line" width={133}
               height={0} className="sm:w-133px w-12 sm:pt-6 hidden sm:block" />  
               <Image src="smallline.svg" alt="line" width={133}
               height={0} className="sm:w-133px w-12 sm:pt-6 sm:hidden pt-13px" />  
               <Image
               src="/personal.svg"
               alt="personal"
               width={32}
               height={32}
               className="flex sm:pt-6 pt-3 sm:mx-1 mx-0.5 "
               />
                <Image src="/line.svg" alt="line" width={133}
               height={0} className="sm:w-133px w-12 sm:pt-6 hidden sm:block" />  
               <Image src="smallline.svg" alt="line" width={133}
               height={0} className="sm:w-133px w-12 sm:pt-6 sm:hidden pt-13px" />  
                <Image
               src="/billing.svg"
               alt="billing"
               width={32}
               height={32}
               className="flex sm:pt-6 pt-3 sm:mx-1 mx-0.5"
               />
               <Image src="/line.svg" alt="line" width={133}
               height={0} className="sm:w-133px w-12 sm:pt-6 hidden sm:block" />  
               <Image src="smallline.svg" alt="line" width={133}
               height={0} className="sm:w-133px w-12 sm:pt-6 sm:hidden pt-13px" />  
                <Image
               src="/done.svg"
               alt="done"
               width={32}
               height={32}
               className="flex sm:pt-6 pt-3 sm:mr-0 mr-6 sm:ml-1 ml-0.5" 
               />
            </div>
            <div className="flex flex-row">          
               <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-blue-1 text-14px pl-19.3px sm:pl-0 sm:ml-35.5px mb-2">Account</span>         
               
               <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-text-gray sm:ml-0  text-14px sm:pl-117px pl-27px">Personal</span>
              
               
               <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-text-gray text-14px  sm:pl-123px pl-34px">Billing</span>
               
                <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-text-gray text-14px sm:pl-134px pl-46px">Done</span>

               </div >
               </div>
              <div className="flex flex-col items-center rounded-b-md">
                <div className="div">

             <span className="flex font-sans font-medium  not-italic tracking-minus0.1px text-gray-1 text-14px sm:mt-8 ml-12 mt-4 dark:text-white-dark">Name</span>
    <form>
      <label>
        <input type="text1" className="flex border rounded-md mt-2 w-295px sm:w-552px mx-12 h-46px  border-boxshadow max mb-4 pl-3.5 placeholder:dark:text-white-dark dark:border-border-dark" placeholder="Name" type="text1" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
        <Image
        src="question.svg"
        alt="question"
        width={20}
        height={20}
        className="absolute sm:ml-568px sm:-mt-12 ml-313px -mt-12"/>
      </label>
    </form>
    </div>
    <div className="div">
             <span className="flex font-sans font-medium  not-italic tracking-minus0.1px text-gray-1 text-14px ml-12 dark:text-white-dark">Email*</span>
    <form>
      <label>
        <input type="text2" className="flex border rounded-md mt-2 w-295px sm:w-552px mx-12 h-46px border-boxshadow pl-3.5 placeholder:dark:text-white-dark dark:border-border-dark" placeholder="Email Address " type="text2" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
        <Image
        src="question.svg"
        width={20}
        alt="question"
        height={20}
        className="absolute sm:ml-568px sm:-mt-8 ml-313px -mt-8"/>
            
              </label>
              </form>
             <span className="flex font-sans font-normal  not-italic tracking-minus0.1px text-text-gray text-14px  ml-12 mt-2.5 dark:text-gray-dark">Please input a real Email Address</span>
            </div> 
            </div>
    <div className="flex flex-col sm:flex-row">
      <div>
             <span className="flex font-sans font-medium  not-italic tracking-minus0.1px text-gray-1 text-14px mt-4 sm:ml-12 ml-6 dark:text-white-dark">Password*</span>
            <form>
      <label>
        <input type="text3" className=" flex border rounded-md mt-2 w-295px sm:w-268px h-46px sm:ml-12 ml-6 border-boxshadow pl-3.5 placeholder:dark:text-white-dark dark:border-border-dark" placeholder="Password" type="text3" value={inputValue3} onChange={(e) => setInputValue3(e.target.value)} />
        <Image
        src="question.svg"
        width={20}
        alt="question"
        height={20}
        className="absolute sm:ml-286px sm:-mt-8 ml-314px -mt-8"/>
            
        </label>
        </form>
            <span className="flex font-sans font-normal  not-italic tracking-minus0.1px text-text-gray text-14px sm:ml-12 ml-6 mt-2.5 dark:text-gray-dark">Please enter your password</span>
            </div>
        <div>
            <span className="flex font-sans font-medium  not-italic tracking-minus0.1px text-gray-1 text-14px mt-4 sm:ml-4 ml-6 dark:text-white-dark">Confirm Password*</span>
        <form>
        <label>
        <input type="text3" className="flex border rounded-md sm:ml-4 ml-6  mt-2 w-295px h-46px sm:w-268px  border-boxshadow pl-3.5 placeholder:dark:text-white-dark dark:border-border-dark" placeholder="Confirm Password" type="text4" value={inputValue4} onChange={(e) => setInputValue4(e.target.value)} />
        <Image
        src="question.svg"
        width={20}
        alt="question"
        height={20}
        className="absolute sm:ml-255px sm:-mt-8 ml-314px -mt-8"/>

            
       </label>
       </form>
            <span className="flex font-sans font-normal  not-italic tracking-minus0.1px text-text-gray text-14px sm:ml-4 ml-6 mt-2.5 dark:text-gray-dark">Passwords need to match</span>       
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
    <span className="font-sans font-medium text-base not-italic tracking-minus0.1px text-gray-1 ml-2 mt-19px dark:text-white-dark">I accept the Terms and Privacy Policy</span>
    </div>   
       <button className="dark:bg-bar-black">
       <Image
              src="nextbutton.svg"
              alt="name"
              width={100}
              height={50}
              className="sm:mt-4 sm:ml-504px hidden sm:block "
              
            /> 
              </button>  
       <button className="dark:bg-bar-black">
            <div className="flex flex-row w-295px h-46px justify-center items-center text-white-1  bg-blue-1 rounded-md sm:hidden ml-6 mt-3 ">
            <span className=" font-sans font-semibold text-15px">Next</span>  
            <Image
               src="arrow.svg"
               alt="arrow"
               width={8}
               height={12}
               className="ml-2"
            />
            </div>
        </button>
        <DarkModeToggle/>
       </div >
       </div>
  )
}
