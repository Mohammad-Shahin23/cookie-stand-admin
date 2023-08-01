import { useAuth } from "../contexts/auth";


export default function Header() {
  const { user, logout} = useAuth(); 
  
  
    return (
      <header className="flex items-center justify-between p-8 font-serif text-4xl bg-blue-500 text-black-500">
        <h1>Cookie Stand Admin</h1>
        { user &&  <button className="px-4 text-xl text-white bg-blue-800 rounded p y-2 w-10px h-20px" onClick={logout}>logout</button>}
      </header>
    )
  }