import Image from 'next/image'

export default function Home() {
  return (
    <>
    <main
    className="flex flex-col p-0 gap-8  w-128 h-128 bg-yellow-400 items-center">
     <Image
              src="/logo.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              className='w-164 h-164'
            />
      <hello>
        this is notbfun
       </hello> 
    </main>
    </>
  )
}
