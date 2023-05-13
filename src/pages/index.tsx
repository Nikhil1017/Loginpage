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
              className="mb-39.2px"
            />
            </div>
            <div className="flex flex-row bg-shadow sm:w-128 sm:h-27  w-343px h-84px rounded-t-md">
              <div>
              <Image
               src="/account.svg"
               alt="account"
               width={32}
               height={32}
               className="flex sm:pt-6 ml-6 pt-3 sm:ml-12"
               />
               <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-blue-1 text-14px ml-11.5px sm:ml-35.5px">Account</span>
               </div >   
               <Image src="/line.svg" alt="line" width={133}
               height={0} className=" flex pb-6 sm:w-133px w-12" />          
               <div >
               <Image
               src="/personal.svg"
               alt="personal"
               width={32}
               height={32}
               className="flex sm:pt-6 pt-3  "
               />
               <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-text-gray sm:ml-0  text-14px pt-1">Personal</span>
               </div >
               <Image src="/line.svg" alt="line" width={133}
               height={46}  className="flex pb-6  sm:w-133px w-12"/>
               <div >
                <Image
               src="/billing.svg"
               alt="billing"
               width={32}
               height={32}
               className="flex sm:pt-6 pt-3"
               />
               <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-text-gray text-14px pt-1">Billing</span>
               </div >
               <Image src="/line.svg" alt="line" width={133}
               height={0}  className="flex pb-6 sm:w-133px w-12"/>
               <div >
                <Image
               src="/done.svg"
               alt="done"
               width={32}
               height={32}
               className="flex sm:pt-6 pt-3 sm:mr-12 mr-6"
               />
                <span className="font-sans font-semibold  not-italic tracking-minus0.1px text-text-gray text-14px">Done</span>
               </div >

               </div >
              <div className="flex flex-col items-center">
                <div className="div">
            <Image
              src="/nametxt.svg"
              alt="name"
              width={38}
              height={12}
              className="flex mt-8 ml-12"
            />
    <form>
      <label>
        <input type="text" className="flex border rounded-md mt-2 w-295px sm:w-552px mx-12 h-46px  border-boxshadow max" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
    </form>
    </div>
    <div className="div">
    <Image
              src="/emailtxt.svg"
              alt="name"
              width={41}
              height={12}
              className="flex mt-1.5 ml-12"
            />
    <form>
      <label>
        <input type="text" className="flex border rounded-md mt-2 w-295px sm:w-552px mx-12 h-46px border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        
            
              </label>
              </form>
              <Image
              src="pleaseinput.svg"
              alt="name"
              width={214}
              height={14}
              className="flex ml-12 mt-2.5"
            /> 
            </div> 
            </div>
    <div className="flex flex-col sm:flex-row">
      <div>
            <Image
              src="/passwordtxt.svg"
              alt="name"
              width={71}
              height={12}
              className="flex mt-6 sm:ml-12 ml-6"
              
            />
            <form>
      <label>
        <input type="text" className=" flex border rounded-md mt-2 w-295px sm:w-268px h-46px sm:ml-12 ml-6 border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            
        </label>
        </form>
        <Image
              src="enterpass.svg"
              alt="name"
              width={178.66}
              height={12}
              className="flex sm:ml-12 ml-6 mt-2.5"
              
            />
            </div>
        <div>
        <Image
              src="/cpasswordtxt.svg"
              alt="name"
              width={128}
              height={12}
              className="mt-6 sm:ml-4 ml-6"
              
            />
        <form>
        <label>
        <input type="text" className="flex border rounded-md sm:ml-4 ml-6  mt-2 w-295px h-46px sm:w-268px  border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

            
       </label>
       </form>
       <Image
              src="/passmatch.svg"
              alt="name"
              width={168}
              height={12}
              className=" sm:ml-4 ml-6 mt-2.5"
              
            />       
       </div>
       </div>
       <div className="div">
    <label className="sm:ml-12 ml-6">
      <input
        type="checkbox"
        className="mt-26px h-5 w-5"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </label>
    <span className="font-sans font-medium text-base not-italic tracking-minus0.1px text-gray-1 ml-3 ">I accept the Terms and Privacy Policy</span>
    </div>   
       <button>
       <Image
              src="nextbutton.svg"
              alt="name"
              width={96}
              height={46}
              className="sm:mt-46px sm:ml-504px sm:w-96px sm:h-46px w-295px h-46px"
              
            /> 
              </button>
       </div >
       </div>
  )
}
