import Head from 'next/head'
import { useState } from 'react';
import { useAuth } from "../contexts/auth";
import useResource from '../hooks/useResource';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';


import History from '../components/History';
import LoginForm from '@/components/LoginForm';



export default function Home() {

  const { user, logout} = useAuth(); 
  const {resource, loading, createResource, deleteResource} = useResource();
 
  console.log("resource",resource)

  const [formInfo, setFormInfo] = useState([])

  function standHandller(event) {

    event.preventDefault();
    // const info = new formInfo(event.target);

    const stand = {

      id: formInfo.length + 1,
      location: event.target.location.value,
      minimumCustomers: event.target.minimumCustomers.value,
      maximumCustomers: event.target.maximumCustomers.value,
      averageSale: event.target.averageSale.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],

    };

    createResource(stand)
  }
  function getAswer() {
    if (formInfo.length == 0) {
      return "";
    }
    else {
      return formInfo[formInfo.length - 1].location
    }
  }


  if (loading) {
    return <h1>loading...</h1>
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>

      </Head>
      <div>
        <Header />

        <main>
          {user ? (
            <>
            <Form handler={standHandller} />
            <History infoList={resource} infodelete={deleteResource} />
            </>
          ) : (
            <>
             <LoginForm />
            </>
          )}
        </main>
        <Footer infoList={resource} />
      </div>
    </>
  )
}



