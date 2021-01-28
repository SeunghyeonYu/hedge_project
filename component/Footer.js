import React from 'react'

export default class Footer extends React.Component {

    componentDidMount() {

        // fetch('http://52.78.1.198:8080/stock/quotes', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body:{
        //
        //     }
        // })
        //     // .then(response => console.log(response.json()))
        //     // .then(data => store.setData(data))
        //     .then(data => console.log(data) )

        fetch('http://52.78.1.198:8080/stock/quotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // year: store.storedWishYear,
                // exportPrice: store.storedWishMoney,
            }),
        }).then(response => response.json())
            // .then(data => console.log(data))
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

