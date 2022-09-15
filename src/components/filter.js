import { useState,Fragment } from "react";
import { housing_action} from "../store/main";
import {useDispatch,useSelector} from "react-redux";
import classes from "./filter.module.css";
import {Divider } from "@mui/material";
import Clear from '@mui/icons-material/Clear';

function Filter(){
  const dispatch=useDispatch();
  const filterApplied=useSelector(state=>state.house_list.filterApplied);

  const [input,setInput]=useState({
    amount:"",
    area:"",
    category:"",
    moveIndate:"",
  })

  function changeHandler(event){
    event.preventDefault();
    const {name,value}=event.target;
    setInput((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }
  function submitHandler(event){
    event.preventDefault();
    dispatch(housing_action.filterData(input));

    setInput({
      amount:"",
      area:"",
      category:"",
      moveIndate:"",
    });
  }
  function removeFilterHandler(){
    dispatch(housing_action.removeFilter())
  }
  return(
    <Fragment>
      <form className={classes.inputForm} onSubmit={submitHandler}>
        <div className={classes.item}>
        <label htmlFor="">Location</label>
          <input type="text" list="areas" name="area" onChange={changeHandler} value={input.area} placeholder="Area" />
          <datalist id="areas">
            <option value="San Francisco, CA"></option>
            <option value="New York, NY"></option>
            <option value="Manhattan, NY"></option>
            <option value="Cat Spring, TX"></option>
            <option value="Philadelphia, PA"></option>
          </datalist>
        </div>
        <Divider className={classes.line} orientation="vertical" variant="middle" flexItem />
        <div className={classes.item}>
          <label htmlFor="">When</label>
          <input type="date" min="2022-01-01" name="moveIndate" onChange={changeHandler} value={input.moveIndate} placeholder="Move-in Date" />
        </div>
        <Divider className={classes.line} orientation="vertical" variant="middle" flexItem />
        <div className={classes.item_less}>
        <label htmlFor="">Price</label>
          <input type="text" list="price" name="amount" onChange={changeHandler} value={input.amount} placeholder="Price" />
          <datalist id="price">
            <option value="< 2,500 $"></option>
            <option value="< 4,500 $"></option>
            <option value="< 6,500 $"></option>
            <option value="< 8,500 $"></option>
            <option value="< 12,000 $"></option>
          </datalist>
        </div>
        <Divider className={classes.line} orientation="vertical" variant="middle" flexItem />
        <div className={classes.item_less}>
          <label htmlFor="">Property Type</label>
          <input type="text" list="type" name="category" onChange={changeHandler} value={input.category} placeholder="House Type" />
          <datalist id="type">
            <option value="Houses"></option>
            <option value="Flats"></option>
          </datalist>
        </div>
        <Divider className={classes.line} orientation="vertical" variant="middle" flexItem />

        <button>Search</button>
        {filterApplied && <Clear sx={{height:"35px", width:"35px"}} onClick={removeFilterHandler}/>}
      </form>
    </Fragment>
  )
}
export default Filter;