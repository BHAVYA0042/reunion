import React, { useEffect} from 'react';
import data from "../data";
import MediaCard from './card';
import classes from "./card.module.css";
import Filter from './filter';
import {useDispatch,useSelector} from "react-redux";
import { housing_action } from '../store/main';
import SearchSec from './search';


const Listing = () => {
  let nameList=data.map((item)=>item.property_name);
  let itemList=data;
  const dispatch=useDispatch();
  const searchApplied=useSelector(state=>state.house_list.searchApplied);
  const filterApplied=useSelector(state=>state.house_list.filterApplied);
  const searchList=useSelector(state=>state.house_list.searchedData);
  const filterList=useSelector(state=>state.house_list.filteredData);
  if(filterApplied===true){
    nameList=filterList.map(item=>item.property_name)
    itemList=filterList;
    
  }
  if(searchApplied===true){
    itemList=searchList;
  }

  useEffect(()=>{
    dispatch(housing_action.populateData(data))
  },[dispatch])

  return (
    <div className={classes.listing}>
      <SearchSec opList={nameList}/>
      <Filter />
      <div className={classes.cardSection}>
        {itemList.map((item)=>{
          return(
            <MediaCard 
            name={item.property_name}
            rent={item.rent}
            addLine={item.addressLine}
            beds={item.beds}
            baths={item.bathrooms}
            size={item.dimensions}
            dp={item.img}
            popular={item.popular}
          />
          )

        })}
      </div>

    </div>
  );
};

export default Listing;