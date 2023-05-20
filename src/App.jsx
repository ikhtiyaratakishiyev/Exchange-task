import React,{useRef,useState} from 'react'
import './style.scss'

function App() {
  const [valyuta,setValyuta]=useState()
const money = useRef()
const resultAzn = useRef()
const resultUsd = useRef()
const resultEuro = useRef()


const selectHandle = (e)=>{
  setValyuta(e.target.value)
  money.current.value=''
  convert()
}
const convert = ()=>{

   const _money = money.current.value 
   if(valyuta==='AZN'){
    resultAzn.current.innerText = (_money*1.0).toFixed(2)
    resultUsd.current.innerText = (_money*1.7).toFixed(2)
    resultEuro.current.innerText = (_money*1.85).toFixed(2)
   }else if (valyuta==='USD'){
    resultAzn.current.innerText = (_money/1.0).toFixed(2)
    resultUsd.current.innerText = (_money/1.7).toFixed(2)
    resultEuro.current.innerText = (_money/1.85).toFixed(2)
   }

}
  return (
    <div>
      <h1 id='heading'>Exchange</h1>
  <div className="wrapper">
  <form action="">
        <input onChange={convert} ref={money} type="number" placeholder='Enter usd' />
        <select onChange={selectHandle}>
          <option value="AZN">AZN</option>
          <option value="USD">USD</option>
        </select>
      </form>
      <ul>
           <li>
              <h2 ref={resultAzn} >0</h2>
              <h3>AZN</h3>
          </li>
          <li>
              <h2 ref={resultUsd}>0</h2>
              <h3>usd</h3>
          </li>
          <li>
              <h2 ref={resultEuro} >0</h2>
              <h3>euro</h3>
          </li>
          
          </ul>
          
  </div>
          

          
     
    </div>
  )
}

export default App
