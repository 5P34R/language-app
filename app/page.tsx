import About from '@/components/About'
import Services from '@/components/Events'
import MainNav from '@/components/MainNav'
import Link from 'next/link'



export default function Home() {
  return (
    <>
    <MainNav />
      <section className="text-gray-600 body-font py-48 bg-[url('/home_university.jpg')] bg-no-repeat bg-center bg-cover h-screen">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-300">
              Welcome Integreat App
              <br className="hidden lg:inline-block" />One Stop Solution to your Instituion Search 
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">Education is ones birth right.Inorder to help the students integreat helps get their education from the right place.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Get Started</button>
              <Link href={'/login'} >
                <button className="ml-4 inline-flex text-gray-100 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-gray-200 rounded text-lg">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
    </>
  )
}
