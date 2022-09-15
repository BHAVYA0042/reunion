import React,{useState} from 'react';
import {TextField,Autocomplete} from '@mui/material';
import {Search,Clear} from '@mui/icons-material';
import {useDispatch, useSelector} from "react-redux";
import classes from "./card.module.css";

import { housing_action } from '../store/main';
const SearchSec = (props) => {

  const [searchValue,setSearchValue]=useState(null);
  const searchApplied=useSelector(state=>state.house_list.searchApplied);
  // const filterApplied=useSelector(state=>state.house_list.filterApplied);
  const dispatch=useDispatch()

  function changeHandler(e,newVal){
    setSearchValue(newVal);
  }
  function searchHandler(e){
    e.preventDefault();
    dispatch(housing_action.searchedData(searchValue));
  }
  function removeSearchHandler(e){
    e.preventDefault();
    dispatch(housing_action.removeSearch());
    setSearchValue(null)
  }
  return (
    <div className={classes.searchBar}>
      <h1>Search Properties to rent</h1>
      <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.opList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Property Name" />}
        onChange={changeHandler}
        value={searchValue}
      />
      {searchApplied ? <Clear sx={{height:"35px", width:"35px",color:"#8758FF",marginLeft:"10px"}} onClick={removeSearchHandler}/>: <Search sx={{height:"35px", width:"35px",color:"#8758FF",marginLeft:"10px"}} onClick={searchHandler}/>}
      </div>
  </div>
  );
};

export default SearchSec;