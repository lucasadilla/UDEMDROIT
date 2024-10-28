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
            </Head>
            <Navbar />
            <ContactCard />
            <Footer />
        </div>
    );
}