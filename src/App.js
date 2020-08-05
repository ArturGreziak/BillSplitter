import React from 'react'
import './App.css'
const Zaplata = (props) => <span>Do zaplaty: {props.wynik}</span>
class App extends React.Component {
  state = {
    wynik: '0',
    kwotaDoZaplaty: '0',
    ilosc_osob: '0',
    napiwek: '0',
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { kwotaDoZaplaty, ilosc_osob, napiwek } = this.state
    const wynik = kwotaDoZaplaty / ilosc_osob * (1 + napiwek / 100)
    this.setState({ wynik: wynik.toFixed(2) })
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div class="wrapper">
        <div>
          <h1>BillSplitter</h1>
          <h2>Podziel się rachunkiem ze znajomymi!</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label className="lba1">Kwota do zapłaty</label>
            <input
              className="lbae2"
              type="number"
              value={this.state.kwotaDoZaplaty}
              onChange={this.handleChange}
              name="kwotaDoZaplaty"
            />
            <br />
            <label className="lba2">ilość osób</label>
            <input
              className="lbae2"
              type="number"
              value={this.state.ilosc_osob}
              onChange={this.handleChange}
              name="ilosc_osob"
            />
            <br />
            <label className="padd">
              Napiwek
              <select
                name="napiwek"
                value={this.state.napiwek}
                onChange={this.handleChange}
                className="lbae2"
              >
                <option value="0">0</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
              </select>
            </label>
            <br />
            <button className="btn">Oblicz</button>
            <h3>
              <Zaplata wynik={this.state.wynik} /> PLN
            </h3>
          </form>
        </div>
      </div>
    )
  }
}
export default App
