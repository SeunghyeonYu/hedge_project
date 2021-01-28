import React from 'react'

export default class Footer extends React.Component {

    componentDidMount() {

        fetch('http://15.164.222.11:8080/stock/quotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            }),
        }).then(response => response.json())
            .then((data) => this.setState({data: data.result}) )
    }


    state = {
        data: undefined,
    }

    render(){
      return (
          <footer>
              <p>{this.state.data}</p>
              <br/>
              <p>
                  <img src="/koscom_ci.jpg" alt="Vercel Logo" className="logo" />
              </p>
          </footer>
      );
  }


}

