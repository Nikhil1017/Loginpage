import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
    <container
    className="flex flex-col h-screen w-screen items-center justify-center">
      <items className="w-128 h-128 bg-slate-200">
        <div   className='flex flex-col items-center h-20' >
             <Image
              src="/logo.svg"
              alt="Lookscout Logo"
              width={180}
              height={33.6}
            />
            </div>
            <div className="flex justify-center  items-center w-128 h-27">
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
              height={20}
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

            </div>
       </items>
    </container>
    </>
  )
}
