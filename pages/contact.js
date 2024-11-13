// pages/contact.js
import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';
import Head from "next/head";
import React from "react";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contactez Femme & Droit pour plus d'informations ou des opportunités de collaboration."/>
                <meta name="keywords" content="contact, féminisme, Université de Montréal, communauté, collaboration"/>
            </Head>
            <Navbar/>
            <ContactCard/>
            <Footer/>
        </div>
    );
}