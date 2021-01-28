import Head from 'next/head'
import Link from 'next/link'
import store from '../common/store';

export default function Home() {
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

            <main className="page product-page">
                <section className="clean-block clean-product dark">
                    <div className="container">
                        <div className="block-heading">
                            <h2 className="text-info">환 리스크 관리를 위한 전략 추천 결과 상세</h2>
                        </div>
                        <div className="block-content">
                            <div className="product-info">
                                <div className="row">
                                    <div>
                                        <div className="info">
                                            <h3>선물환 시장 이용</h3>
                                            <div className="price">
                                                <h3>￦ {store.storedFetchData.sumOfForward}</h3>
                                            </div>
                                            <div className="row">
                                                <div className="summary col-md-6">
                                                    <div className="table-responsive">
                                                        <table className="table my-2">
                                                            <thead className="thead-light">
                                                            <tr>
                                                                <th>해지전략</th>
                                                                <th>t=0</th>
                                                                <th>t={store.storedWishYear}</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="stat">{store.storedFetchData.t1}</td>
                                                                    <td></td>
                                                                    <td>+${store.storedWishMoney}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="stat">{store.storedFetchData.t2}</td>
                                                                    <td></td>
                                                                    <td>{store.storedFetchData.forwardSell}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="stat">합계</td>
                                                                    <td></td>
                                                                    <td>+￦{store.storedFetchData.sumOfForward}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="summary col-md-6">
                                                    <br/>

                                                        <p>[선물환시장을 이용한 헤징]</p>
                                                        <p>선물환 매도는 현재 시점에서 미리 정한 환율로 미래시점에 외환을 매도하는 것을 의미합니다.</p>
                                                        <p>즉, 선물환 매도를 하게 되면 미래의 특정시점에 일정가격으로 달러를 팔고 이를 원화로 교환하게 됨으로써
                                                            미래 시점에 '달러가 들어오는 상황'이 '원화가 들어오는 상황'으로 바뀌어 환변동 위험에 노출되는 것을 막아줍니다.</p>
                                                        <p>따라서, 귀사가 {store.storedWishYear}년 뒤에 ${store.storedWishMoney}를 수취하게 되는 경우, 선물환 매도를 하게 되면 환율 변동과 상관없이 안정적으로 ￦{store.storedFetchData.sumOfForward}를 수취할 수 있게 됩니다.</p>
                                                        <br/>

                                                {
                                                    (parseInt(store.storedFetchData.sumOfForward.replace(/,/g,"")) - parseInt(store.storedFetchData.sumOfMarket.replace(/,/g,"") )) > 0 &&
                                                    (
                                                        <div>
                                                            <br/>
                                                            <p>[단기금융시장을 이용한 헤징]</p>
                                                            <p>이와 같은 포지션으로는, 달러화 차입 + 현물환 매도 + 원화 대출을 통해서도 동일한 효과를 얻을 수 있는데
                                                                이 경우에는 달러화의 차입 이자율을 고려하여 미래의 시점에 수취하게 될 달러와 같은 금액이 되도록 현재시점에서 차입을 하고
                                                                차입을 한 달러화의 금액만큼 현물환을 매도(현재시점에서 달러를 팔고 원화로 교환)하고
                                                                그 원화만큼의 금액을 현재시점에서 대출하게 되면, 대출이자율을 고려한 미래의 원화가치만큼이 안정적으로 들어오게 됩니다.</p>
                                                            <p>하지만, 이 금액은 ￦{store.storedFetchData.sumOfMarket}으로 선물환시장을 이용한 방법보다 {store.storedFetchData.resultHedge}만큼 적으므로
                                                                전자에 기술한 선물환 매도 방식이 귀사에 더 유리한 전략이라고 볼 수 있습니다.</p>
                                                        </div>

                                                    )
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            <div>
                                <div>
                                    <br/><br/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead className="thead-dark">
                                                    <tr>
                                                        <th>구분</th>
                                                        <th>대출이자율</th>
                                                        <th>차입이자율</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="stat">원화</td>
                                                        <td>연 {store.storedFetchData.usdDepositInteresetRate}%</td>
                                                        <td>연 {store.storedFetchData.usdBorrowingInteresetRate}%</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="stat">달러화</td>
                                                        <td>연 {store.storedFetchData.krwDepositInteresetRate}%</td>
                                                        <td>연 {store.storedFetchData.krwBorrowingInteresetRate}%</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead className="thead-dark">
                                                    <tr scope="col">
                                                        <th>구분</th>
                                                        <th>선물환 매입환율</th>
                                                        <th>선물환 매도환율</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="stat">달러화</td>
                                                        <td>{store.storedFetchData.futurePurchaseRate} 원/$</td>
                                                        <td>{store.storedFetchData.futureSellingRate} 원/$</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <Link href={`/result_recommend_export`}>
                                <button className="btn btn-outline-primary btn-block " type="button">다른 전략 보기</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
            </footer>
        </div>
    )
}
