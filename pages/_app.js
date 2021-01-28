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
// import React from "react";
// import App from "next/app";
// import { Provider } from "mobx-react";
// import Store from "../common/store";
// class CustomApp extends App {
//     mobxStore;
//     static async getInitialProps(appContext) {
//         const mobxStore = Store();
//         appContext.ctx.mobxStore = mobxStore;
//         const appProps = await App.getInitialProps(appContext);
//         return {
//             ...appProps,
//             initialMobxState: mobxStore,
//         };
//     }
//     constructor(props) {
//         super(props);
//         const isServer = typeof window === "undefined";
//         this.mobxStore = isServer
//             ? props.initialMobxState
//             : initializeStore(props.initialMobxState);
//     }
//     render() {
//         const { Component, pageProps } = this.props;
//         return (
//             <div>
//                 <Top />
//                 <br/><br/><br/><br/>
//                 <Provider {...this.mobxStore}>
//
//                 <Component {...pageProps} />
//                 </Provider>
//
//                 <Footer />
//             </div>
//
//         );
//     }
// }
// export default CustomApp;