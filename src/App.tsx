import Cur_con from "./component/Cur_con"

function App() {

  const Api_key = "f4417f6dcef3c1fd2596bdc0";
  const f_country = "USD";
  const s_country = "INR";
  const Amount = 1;

  // fetch(`https://v6.exchangerate-api.com/v6/${Api_key}/pair/${f_country}/${f_country}/${Amount}`)
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))

  return (
    <div className="App">
      <h1 style={{ letterSpacing: 6 }}>Currency Converter</h1>
      <Cur_con />
    </div>
  )
}

export default App
