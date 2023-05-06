import Image from 'next/image'
import React, { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  return (
      <div className=" flex  flex-col w-128 h-128 justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <Image
              src="/logo.svg"
              alt="Lookscout Logo"
              width={180}
              height={33.6}
              className="flex"
            />
            <div className="flex first-line:justify-center  items-center w-128 h-27">
            <div  className="flex bg-shadow w-128 h-27 rounded-t-md" >
              <div >
              <Image
               src="/account.svg"
               alt="account"
               width={32}
               height={32}
               className="flex pt-6 ml-12"
               />
               <Image
               src="/acctxt.svg"
               alt="accounttxt"
               width={57}
               height={20}
               className="pt-1 flex ml-35.5px "
               />
               </div >   
               <Image src="/line.svg" alt="line" width={133}
               height={0} className=" flex pb-6" />          
               <div >
               <Image
               src="/personal.svg"
               alt="personal"
               width={32}
               height={32}
               className="flex pt-6"
               />
               <Image
               src="/personaltxt.svg"
               alt="accounttxt"
               width={59}
               height={20}
               className="flex pt-1 mr-8"
               />
               </div >
               <Image src="/line.svg" alt="line" width={133}
               height={0}  className="flex pb-6"/>
               <div >
                <Image
               src="/billing.svg"
               alt="billing"
               width={32}
               height={32}
               className="flex pt-6"
               />
               <Image
               src="/billingtxt.svg"
               alt="accounttxt"
               width={41}
               height={20}
               className="flex pt-1"
               />
               </div >
               <Image src="/line.svg" alt="line" width={133}
               height={0}  className="flex pb-6"/>
               <div >
                <Image
               src="/done.svg"
               alt="done"
               width={32}
               height={32}
               className="flex pt-7 mr-12"
               />
               <Image
               src="/donetxt.svg"
               alt="accounttxt"
               width={36}
               height={20}
               className="flex pt-1"
               />
               </div >

               </div >
               </div>
              <div className="flex flex flex-col w-128 h-128 p-x12">
            <Image
              src="/nametxt.svg"
              alt="name"
              width={38}
              height={12}
              className="flex mt-8 ml-12"
            />
    <form>
      <label>
        <input type="text" className="flex border rounded-md mt-2 w-552px mx-12 h-46px border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
    </form>
    <Image
              src="/emailtxt.svg"
              alt="name"
              width={41}
              height={12}
              className="flex mt-1.5 ml-12"
            />
    <form>
      <label>
        <input type="text" className="flex border rounded-md mt-2 w-552px mx-12 h-46px border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        
            
              </label>
              </form>
              <Image
              src="pleaseinput.svg"
              alt="name"
              width={214}
              height={14}
              className="flex ml-12 mt-2.5"
            />  
    <div className="flex flex-row">
      <div>
            <Image
              src="/passwordtxt.svg"
              alt="name"
              width={71}
              height={12}
              className="flex mt-6 ml-12"
              
            />
            <form>
      <label>
        <input type="text" className=" flex border rounded-md mt-2 w-268px h-46px ml-12 border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            
        </label>
        </form>
        <Image
              src="enterpass.svg"
              alt="name"
              width={178.66}
              height={12}
              className="flex ml-12 mt-2.5"
              
            />
    <label className="ml-12">
      <input
        type="checkbox"
        className="mt-26px h-5 w-5"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className="font-sans font-medium text-base not-italic tracking-minus0.1px text-gray-1 ml-3 -mt-7px">I accept the Terms and Privacy Policy</span>
    </label>
        </div>
        <div>
        <Image
              src="/cpasswordtxt.svg"
              alt="name"
              width={128}
              height={12}
              className="mt-6 "
              
            />
        <form>
        <label>
        <input type="text" className="flex border rounded-md mt-2 w-268px h-46px -ml-0.5 border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

            
       </label>
       </form>
       <Image
              src="/passmatch.svg"
              alt="name"
              width={168}
              height={12}
              className="ml-1 mt-2.5"
              
            />       
       </div>
       </div>
       <button>
       <Image
              src="nextbutton.svg"
              alt="name"
              width={96}
              height={46}
              className="mt-46px ml-504px"
              
            /> 
              </button>
       </div>
       </div >
  )
}
