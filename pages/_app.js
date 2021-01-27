import Footer from "../component/Footer";
import Top from "../component/Top";
import App from 'next/app'
import React from 'react'

export default class MyApp extends App {
    render(){
        const { Component, pageProps } = this.props
        return (
            <div>
                <Top />
                <br/><br/><br/><br/><br/><br/>

                <Component {...pageProps} />
                <Footer />
            </div>
        );
    }
}