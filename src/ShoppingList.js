import ShoppingListItem from './ShoppingListItem';
export default function ShoppingList({items}){
  return(
    <div style={{listStylePosition:'inside'}}>
      <ul> 
        {items.map(i=>
          <ShoppingListItem key={i.id} item={i.item} completed={i.completed} quantity={i.quantity} />
        )}
      </ul>
    </div>
  )
}