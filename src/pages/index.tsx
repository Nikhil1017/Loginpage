import Image from 'next/image'

export default function Home() {
  return (
    <>
    <main
    className="flex flex-col items-center p-0 gap-8  w-128 h-128 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400">
     <Image
              src="/logo.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              className='w-164 h-164'
            />
    </main>
    </>
  )
}
