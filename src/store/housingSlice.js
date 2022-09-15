import {createSlice} from "@reduxjs/toolkit";
const house_initial={
  data:[],
  filteredData:[],
  searchedData:[],
  searchApplied:false,
  filterApplied:false
}
const houseSlice=createSlice({
  name:'house',
  initialState:house_initial,
  reducers:{
    populateData(state,action){
      state.data=action.payload;
    },
    searchedData(state,action){
      state.searchApplied=true;
      console.log(action.payload);
      const house_name=action.payload;
      if(state.filterApplied===true){
        state.searchedData=state.filteredData.filter(item=>{
          return item.property_name===house_name
        })
      }else{
        state.searchedData=state.data.filter(item=>{
          return item.property_name===house_name
        })
      }

    },
    filterData(state,action){
      state.filterApplied=true;
      const ammount=action.payload.amount;
      const area=action.payload.area;
      const category=action.payload.category;
      const inDate=action.payload.moveIndate;
      
      var checkAmmount = function(itemAmmount) {
        let money=parseInt(ammount.replace(/[^\w\s]/gi, ''));
        if (itemAmmount<=money){
          return true
        }
        return false
      }
      function checkDate(a) {
        const houseDate=new Date(a);
        const userDate=new Date(inDate)
        if (houseDate<=userDate){
          return true
        }
        return false
      }


        if (ammount.length>0 && area.length>0 && category.length>0 && inDate.length>0){
        console.log("sabme");
        state.filteredData=state.data.filter(item=>{
          return checkAmmount(item.rent)  && item.location===area && item.category===category && checkDate(item.moveInDate)
        })
        console.log("data populated");
      }
      else{
        if(ammount.length>0){
          console.log("in area");
          if(area.length>0 || category.length>0 || inDate.length>0){
            state.filteredData=state.data.filter(item=>{
              return checkAmmount(item.rent) && (item.location===area || item.category===category || checkDate(item.moveInDate))
            })
          }
          else{
            state.filteredData=state.data.filter(item=>{
              return checkAmmount(item.rent)
            })
          }
        }
        if(area.length>0){
          console.log("in area");
          if(category.length>0 || ammount.length>0 || inDate.length>0){
            state.filteredData=state.data.filter(item=>{
              return item.location===area && (checkAmmount(item.rent) || item.category===category || checkDate(item.moveInDate))
            })
          }
          else{
            state.filteredData=state.data.filter(item=>{
              return item.location===area
            })
          }
        }
        if(category.length>0){
          console.log("in category");
          if(ammount.length>0 || inDate.length>0 || area.length>0){
            state.filteredData=state.data.filter(item=>{
              return item.category===category && (checkAmmount(item.rent) || item.location===area || checkDate(item.moveInDate))
            })
          }
          else{
            state.filteredData=state.data.filter(item=>{
              return item.category===category
            })
          }
        }
        if(inDate.length>0){
          console.log("in inDate");
          if(ammount.length>0 || category.length>0 || area.length>0){
            state.filteredData=state.data.filter(item=>{
              return checkDate(item.moveInDate) && (checkAmmount(item.rent) || item.location===area || item.category===category)
            })
          }
          else{
            state.filteredData=state.data.filter(item=>{
              return checkDate(item.moveInDate)
            })
          }
        }
      }
    },  
    removeFilter(state){
      state.filteredData=[];
      state.filterApplied=false;
  },
  removeSearch(state){
    state.searchedData=[];
    state.searchApplied=false;
  } 

  }
})

export default houseSlice;