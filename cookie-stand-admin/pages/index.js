import Head from 'next/head'
import { useState } from 'react';


export default function Home() {
  const [formInfo, setFormInfo] = useState()

  function standHandller(event) {

    event.preventDefault();
    // const info = new formInfo(event.target);

    const stand = {

      location: event.target.location.value,
      minimumCustomers: event.target.minimumCustomers.value,
      maximumCustomers: event.target.maximumCustomers.value,
      averageSale: event.target.averageSale.value

    };

    setFormInfo(JSON.stringify(stand));
  }



  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>

      </Head>
      <div>
        <Header />

        <main>
          <Form handler = {standHandller}/>
          <Placeholder info={formInfo} />
        </main>

        <footer className="flex items-center justify-between p-8 bg-blue-500 text-black-500">
          <p>&copy; 2023 Cookie Stand Inc.</p>
        </footer>


      </div>
    </>
  )
}

function Header() {
  return (
    <header className="flex items-center justify-between p-8 font-serif text-4xl bg-blue-500 text-black-500">
      <h1>Cookie Stand Admin</h1>
    </header>
  )
}

function Form(props) {
  return (
    <form className="flex flex-col items-center w-3/5 p-4 m-8 bg-blue-300 rounded-md text-black-500" onSubmit={props.handler}>

      <h2 className="mb-8 font-serif text-2xl" >Create Cookie Stand</h2>

      <label className="flex w-full gap-2 mb-10 text-black-500">
        <span className="text-black-500">Location</span>
        <input className="w-full text-black-500" type="text" name="location" />
      </label>


      <div className="flex flex-col gap-8 lg:flex-row">

        <label className="flex flex-col text-black-500">
          <span className="flex flex-col text-black-500">Minimum Customers per Hour</span>
          <input className=" text-black-500" type="number" name="minimumCustomers" />
        </label>

        <label className="flex flex-col text-black-500">
          <span className=" text-black-500">Maximum Customers per Hour</span>
          <input className=" text-black-500" type="number" name="maximumCustomers" />
        </label>

        <label className="flex flex-col text-black-500">
          <span className=" text-black-500">Average Cookies per Sale</span>
          <input className="text-black-500" type="number" name="averageSale" />
        </label>

        <button className="p-4 bg-blue-500 rounded-md shadow-2xl text-black-500 hover:bg-blue-700" type="submit">Create</button>

      </div>


    </form>
  )
}

function Placeholder(props) {
  return (
      <div className="w-3/4 p-8 mx-auto my-10 bg-blue-300 border-2 border-blue-500 rounded text-center">
          <h2 className="text-2xl">Last created stand:</h2>
          <p className="text-center">{props.info}</p>
      </div>
  )
}