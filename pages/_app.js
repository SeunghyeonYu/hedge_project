import React from "react";
import Footer from "../component/Footer";
import Top from "../component/Top";
import App from "next/app";

import {configure} from 'mobx';
import {Provider, useStaticRendering} from 'mobx-react';


export default class MyApp extends App {
    render(){
        const { Component, pageProps } = this.props
        return (
            <div>
                <Top />
                <br/><br/><br/><br/>

                <Component {...pageProps} />
                <Footer />
            </div>
        );
    }
}