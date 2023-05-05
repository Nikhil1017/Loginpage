import Image from 'next/image'
import React, { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <container
    className="flex  h-screen w-screen items-center justify-center">
      <items className="w-128 h-128 bg-slate-200">
        <div   className='flex flex-col items-center h-20' >
             <Image
              src="/logo.svg"
              alt="Lookscout Logo"
              width={180}
              height={33.6}
            />
            </div>
            <div className="flexjustify-center  items-center w-128 h-27">
            <bar className="flex bg-shadow w-128 h-27 rounded-t-md" >
              <account>
              <Image
               src="/account.svg"
               alt="account"
               width={32}
               height={32}
               className="pt-6 ml-12"
               />
               <Image
               src="/acctxt.svg"
               alt="accounttxt"
               width={57}
               height={20}
               className="pt-1 ml-35.5px "
               />
               </account>   
               <Image src="/line.svg" alt="line" width={133}
               height={0} className="pb-6" />          
               <personal>
               <Image
               src="/personal.svg"
               alt="personal"
               width={32}
               height={32}
               className="pt-6"
               />
               <Image
               src="/personaltxt.svg"
               alt="accounttxt"
               width={59}
               height={20}
               className="pt-1 mr-8"
               />
               </personal>
               <Image src="/line.svg" alt="line" width={133}
               height={0}  className="pb-6"/>
               <billing>
                <Image
               src="/billing.svg"
               alt="billing"
               width={32}
               height={32}
               className="pt-6"
               />
               <Image
               src="/billingtxt.svg"
               alt="accounttxt"
               width={41}
               height={20}
               className="pt-1"
               />
               </billing>
               <Image src="/line.svg" alt="line" width={133}
               height={0}  className="pb-6"/>
               <done>
                <Image
               src="/done.svg"
               alt="done"
               width={32}
               height={32}
               className="pt-7 mr-12"
               />
               <Image
               src="/donetxt.svg"
               alt="accounttxt"
               width={36}
               height={20}
               className="pt-1"
               />
               </done>

               </bar>
               </div>
              <div className="flex flex-col w-128 h-128 p-x12">
            <Image
              src="/nametxt.svg"
              alt="name"
              width={38}
              height={12}
              className="mt-8 ml-12"
            />
    <form>
      <label>
        <input type="text" className="border rounded-md mt-2 w-552px mx-12 h-46px border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Image
              src="/question.svg"
              alt="question"
              width={18.33}
              height={18.33}
              className="relative top-421.83px"
            />
      </label>
    </form>
    <Image
              src="/emailtxt.svg"
              alt="name"
              width={41}
              height={12}
              className="mt-1.5 ml-12"
            />
    <form>
      <label>
        <input type="text" className="border rounded-md mt-2 w-552px mx-12 h-46px border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        
            <Image
              src="/question.svg"
              alt="question"
              width={18.33}
              height={18.33}
              className="relative top-421.83px"
            />
            
              </label>
              </form>
              <Image
              src="pleaseinput.svg"
              alt="name"
              width={214}
              height={14}
              className="ml-12 -mt-2.5"
            />  
    <div className="flex flex-row">
      <div>
            <Image
              src="/passwordtxt.svg"
              alt="name"
              width={71}
              height={12}
              className="mt-6 ml-12"
              
            />
            <form>
      <label>
        <input type="text" className="border rounded-md mt-2 w-268px h-46px ml-12 border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        
        <Image
              src="/question.svg"
              alt="question"
              width={18.33}
              height={18.33}
              className="relative top-421.83px"
            />
            
        </label>
        </form>
        <Image
              src="enterpass.svg"
              alt="name"
              width={178.66}
              height={12}
              className="ml-12 -mt-2.5"
              
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
        <input type="text" className="border rounded-md mt-2 w-268px h-46px -ml-0.5 border-boxshadow " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        
        <Image
              src="/question.svg"
              alt="question"
              width={18.33}
              height={18.33}
              className="relative top-421.83px"
            />
            
       </label>
       </form>
       <Image
              src="/passmatch.svg"
              alt="name"
              width={168}
              height={12}
              className="ml-1 -mt-2.5"
              
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
       </items>
       </container>
  )
}
