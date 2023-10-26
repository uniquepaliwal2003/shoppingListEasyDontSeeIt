import Property from './Property';
export default function PropertyList({properties}){
  const styles={ display:'flex' , flexDirection:'row' , textAlign:'center'}
  return(
    <ul style={styles}>
      { properties.map(pro => <Property key={pro.id} {...pro} /> )}
    </ul>
  )
}