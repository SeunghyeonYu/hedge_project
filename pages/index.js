import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>

        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i" />
        <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"/>
        <link rel="stylesheet" href="assets/css/hedgeManager.css"/>
      </Head>

        <main className="page landing-page">
          <section className="clean-block clean-hero">
            <div className="text">
              <h2>환 리스크 관리를 위한 최적의 전략 추천</h2>
              <p>금융의 새로운 가치를 창출하는 Digital Innovator 코스콤이 함께합니다 </p>


              <Link href={`/recommend`}>
                <button className="btn btn-outline-light btn-lg" type="button">시작하기</button>
              </Link>


            </div>
          </section>

          <section className="clean-block features">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-info">개요</h2>
                <p> 환위험 관리여건이 취약한 중소중견기업이 환위험을 손쉽게 해지할 수 있도록 제도 및 비용면의 도움을 드림으로써 적극적인 무역활동을 할 수 있도록 지원</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-5 feature-box">
                  <h4>환헤지(Hedge)</h4>
                  <p>환율변동에 따른 위험을 없애기 위하여 현재 수준의 환율로 수출이나 수입 해외투자에 따른 거래금액을 고정시키는 것</p>
                </div>
                <div className="col-md-5 feature-box">
                  <h4>환헤지의 목적</h4>
                  <p>환율변동에 관계없이 원화기준 미래 현금흐름의 확정을 통해 안정적인 영업활동 영위하는 것</p>
                </div>
                <div className="col-md-5 feature-box">
                  <h4>환헤지의 방법</h4>
                  <p>통화선도(선물), 통화옵션, 통화스왑, 보험, 기타 금융상품을 통해 향후 환율변동에 따른 위험을 관리</p>
                </div>
                <div className="col-md-5 feature-box">
                  <h4>환헤지의 활용</h4>
                  <p>수출기업은 통화선도(선물) 매도, 풋옵션 매입, 통화스왑, 수출환변동보험을 통해 환헤지를 수행</p>
                </div>
              </div>
            </div>
          </section>
        </main>

      <footer>
      </footer>
    </div>
  )
}
