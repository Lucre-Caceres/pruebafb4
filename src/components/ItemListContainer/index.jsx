import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import styles from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom";
import db from "../../../db/Firebase-Config";
import { collection, getDocs } from "firebase/firestore";

function ItemListContainer({ greeting }) {

  const [items, setItems] = useState([])
  const itemsRef=collection(db, "ItemCollection")
  const{id}=useParams()  

  const getProducts =async()=> {
        const itemsCollection = await getDocs(itemsRef);
        const items=itemsCollection.docs.map((doc)=>(
          {...doc.data(),id:doc.id}))
          
        setItems(items);
      };
  const getFilteredProducts=async()=>{
    const itemsCollection = await getDocs(itemsRef);
        setItems(data.filter((prod)=>prod.category===id));
      }
      
useEffect(() => {
  setTimeout(() =>  {
    if(id){
      getFilteredProducts()
    }else{
    getProducts(); 
  }
  }, 1000);
}, [id]);

  

  return (
    <>
    <h1 className={styles.greeting}>{greeting}</h1>
    
    <ItemList items={items}/>
  
    </>
  )
}


export default ItemListContainer;
