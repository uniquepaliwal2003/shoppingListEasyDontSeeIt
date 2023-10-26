export default function Property({name,rating,price}){
  return(
    <div>
      <h2>{name}</h2>
      <h3>${price} a night</h3>
      <h4>{rating}⭐</h4>
    </div>
  )
}
// id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 