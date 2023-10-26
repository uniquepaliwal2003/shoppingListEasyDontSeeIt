export default function Slots({val1,val2,val3}){
  const res = val1===val2 && val2===val3 
  return(
    <div>
      <h1>Results Drum Rolls</h1>
      <h2>{val1} {val2} {val3} </h2>
      {res ? <h1 style={{color:"green"}}>You Win!</h1> : <h1 style={{color:"red"}}>You Loss!</h1>}
      {res && <h3>Congrats!</h3>}
    </div>
  )
}