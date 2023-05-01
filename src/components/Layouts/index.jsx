import React, { useEffect, useState} from 'react'
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CTA from "@/components/CTA";

import favicon from './favicon.png'

import style from './layout.module.scss'

const Layout = (props) => {
  return (
    <>
    <Head>
      <title>{props.pageTitle ? props.pageTitle: 'Nikhoj'}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon.src} />
    </Head>

    <Header />

    { props.children }
    
    <Sidebar />
    <CTA />
    <Footer/>  
    </>
  )
}


export default Layout;