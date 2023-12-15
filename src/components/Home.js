import { Link } from "react-router-dom"
import logoImg from "../assets/logo.png"

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen font-rubik'>
      <h1 className="font-bold text-2xl">Welcome to Our Cv Builder</h1>
      <img className="md:w-[40%] w-[80%] shadow-md m-5" src={logoImg} alt='Logo' />
      <Link to="/information" className="bg-cyan-500 text-white font-semibold rounded-md py-3 px-5">Let's Start</Link>
    </div>
  )
}
