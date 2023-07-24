import Head from 'next/head'
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';

import History from '../components/History';



export default function Home() {
  
  const [formInfo, setFormInfo] = useState([])

  function standHandller(event) {

    event.preventDefault();
    // const info = new formInfo(event.target);

    const stand = {

      id : formInfo.length + 1,
      location: event.target.location.value,
      minimumCustomers: event.target.minimumCustomers.value,
      maximumCustomers: event.target.maximumCustomers.value,
      averageSale: event.target.averageSale.value,
      houers : [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],

    };

    setFormInfo([...formInfo, stand])
  }
  function getAswer(){
    if (formInfo.length == 0){
      return "";
    }
    else{
      return formInfo[formInfo.length-1].location
    }
  }




  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>

      </Head>
      <div>
        <Header />

        <main>
          <Form handler={standHandller} />
          <History  infoList={formInfo} />
        </main>
        <Footer  infoList={formInfo} />
      </div>
    </>
  )
}



