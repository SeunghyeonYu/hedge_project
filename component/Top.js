export default function Top() {
  return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
            <div className="container">
                <a className="navbar-brand">HedgeMangaer</a>
                {/*<button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">*/}
                    {/*<span className="sr-only">Toggle navigation</span>*/}
                    {/*<span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}
