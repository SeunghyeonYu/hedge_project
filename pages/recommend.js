import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import store from '../common/store';

export default class Home extends React.Component {

    handleWishMoneyChange = (e) => {
        store.setWishMoney(e.target.value)
    }
    handleWishYearChange = (e) => {
        store.setWishYear(e.target.value)

    }

    handleButtonClick = (e) => {
        fetch('http://52.78.1.198:8080/hedge/export', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                year: 1,
                exportPrice: '100',
            }),
        }).then(response => response.json())
            .then(data => store.setData(data));


    }



    render() {
    return (
        <div className="container">
        <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
        <title>Init-hedge</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i"/>
        <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"/>
        <link rel="stylesheet" href="assets/css/hedgeManager.css"/>
        </Head>

        <main className="page login-page">
        <section className="clean-block clean-form dark">
        <div className="container">
        <div className="block-heading">
        <h2 className="text-info">환 리스크 관리를 위한 최적의 전략 추천</h2>
        <p> Q) 미래 시점에 수입금을 지급하나요? 수출금을 수취하나요?</p>
        <br/>
        <div className="row justify-content-center">
        <div className="col-sm3" style={{paddingRight:15}}><button className="btn btn-primary btn-block" type="submit">수입</button></div>
        <div className="col-sm3" style={{paddingRight:15}}><button className="btn btn-primary btn-block" type="submit">수출</button></div>
        </div>
        </div>


        <div id="wishForm" style={{display:'block'}}>
        <form>
            <div className="form-group">수출할 금액<input className="form-control item" id="wishMoney" onChange={this.handleWishMoneyChange}/></div>
            <div className="form-group">수취 예정연도<input className="form-control" id="wishYear" onChange={this.handleWishYearChange}/></div>
        <div className="form-group">
        </div>
        <Link href={`/result_recommend`}>
        <button className="btn btn-primary btn-block" type="submit" onClick={this.handleButtonClick}>추천 받기</button>
        </Link>
        </form>
        </div>

        </div>
        </section>
        </main>

        <footer>
        </footer>
        </div>
        )
}

}
