import Head from 'next/head'
import Link from 'next/link'
import React from "react";

import store from '../common/store';

// @observer
export default class Home extends React.Component{
    render(){
        return (
            <div className="container">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
                    <title>Pricing - Brand</title>
                    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i"/>
                    <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"/>
                    <link rel="stylesheet" href="assets/css/hedgeManager.css"/>
                </Head>

                <main className="page pricing-table-page">
                    <section className="clean-block clean-pricing dark">
                        <div className="container">
                            <div className="block-heading">
                                <h2 className="text-info">환 리스크 관리를 위한 전략 추천 결과</h2>
                                <section className="clean-block clean-form dark">
                                    <div className="container">
                                        <form>
                                            <div className="form-group">수출할 금액<input className="form-control item" id="wishMoney" value={store.storedFetchData.dollarBorrowing}/></div>
                                            <div className="form-group">수취 예정연도<input className="form-control" id="wishYear" value={store.storedWishYear}/></div>
                                            <div className="form-group">
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-md-5 col-lg-4">
                                    <div className="clean-pricing-item">
                                        <div className="heading">
                                            <h3>선물환시장 이용</h3>
                                        </div>
                                        <div className="price">
                                            <h4>($25)</h4>
                                        </div>
                                        <Link href={`/future_market`}>
                                            <button className="btn btn-outline-primary btn-block" type="button">상세 이동</button>
                                        </Link>

                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-4">
                                    <div className="clean-pricing-item">
                                        <div className="ribbon"><span>Best Value</span></div>
                                        <div className="heading">
                                            <h3>단기금융시장 이용</h3>
                                        </div>
                                        <div className="price">
                                            <h4>($500)</h4>
                                        </div>
                                        <Link href={`/short_market`}>
                                            <button className="btn btn-primary btn-block" type="button">상세 이동</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-4">
                                    <div className="clean-pricing-item">
                                        <div className="heading">
                                            <h3>옵션시장 이용</h3>
                                        </div>

                                        <div className="price">
                                            <h4>($0)</h4>
                                        </div>
                                        <button className="btn btn-outline-primary btn-block " type="button">상세 이동</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>
                </main>

                <footer>
                </footer>
            </div>
        )
    };

}
//
//
// Home.getInitialProps = async (ctx) => {
//
//     return {}
// };
