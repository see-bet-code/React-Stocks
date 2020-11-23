import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const STOCK_URL = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  state = {
    stocks: [],
    totalStocks: [],
    portfolio: []
  }

  componentDidMount() {
    fetch(STOCK_URL)
    .then(r => r.json())
    .then(stocks => this.setState({stocks: stocks, totalStocks: stocks}))
  }

  addToPortfolio = (stock) => {
    console.log("Bought!")
    this.setState({ portfolio: [...this.state.portfolio, stock] });
    
  }

  removeFromPortfolio = (id) => {
    console.log("Sold!")
    this.setState({ portfolio: [...this.state.portfolio].filter(s => s.id !== id) });
  
}

  sortStocks = (by) => {
    let sorted
    if (by === "Alphabetically") {
      sorted = [...this.state.stocks].sort((a, b) => a.ticker.localeCompare(b.ticker))
    } else {
      sorted = [...this.state.stocks].sort((a, b) => a.price - b.price)
    }
    this.setState({stocks: sorted})
  }

  filterByType = (type) => {
    let newStocks = [...this.state.totalStocks]
    if (type !== "") newStocks = newStocks.filter(s => s.type === type)
    this.setState({stocks: newStocks})
  }

  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} filterByType={this.filterByType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
