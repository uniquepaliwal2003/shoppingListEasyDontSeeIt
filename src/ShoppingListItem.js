export default function ShoppingListItem({item,quantity,completed}){
  const styles = {color:completed?"grey":"red" , textDecoration:completed?"Line-through":"none"}
  return(
    <li style={styles}>
      {quantity} - {item}
    </li>
  ) 
}
