import React,{useState} from 'react';
import classes from "./card.module.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {FavoriteBorder,Favorite,SingleBedOutlined,BathtubOutlined,ArchitectureOutlined,AutoAwesome} from '@mui/icons-material';
import { ToggleButton,Card,Divider} from '@mui/material';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function MediaCard(props) {
  let amount=props.rent.toString();
  amount=amount.substring(0,1)+ ","+amount.substring(1,amount.length)
  const [wishListed, setWishListed] = useState(false);
  return (
    <Card sx={{ minWidth: 320 }} className={classes.card}>
      <CardMedia
        component="img"
        height="175"
        image={props.dp}
        alt="green iguana"
      />
      {props.popular &&
        <span className={classes.tag}><AutoAwesome sx={{height:"15px"}}/>POPULAR</span>
      }
      
      <CardContent className={classes.content}>
        <div className={classes.first}>
          <span><strong>{`$${amount}`}</strong>/month</span>
          <ToggleButton
            value="check"
            selected={wishListed}
            onChange={() => {
              setWishListed(!wishListed);
            }}
            sx={{borderRadius:"50px"}}
          >
          {wishListed ? <Favorite sx={{color:"red"}}/>:<FavoriteBorder />}
            
          </ToggleButton>
        </div>
        <div className={classes.second}>
          <h3>{props.name}</h3>
          <p>{props.addLine}</p>

        </div>
        <Divider  />
        <div className={classes.third}>
          <section>
            <SingleBedOutlined />
            <span>{props.beds} Beds</span>
          </section>
          <section>
            <BathtubOutlined />
            <span>{props.baths} Bathrooms</span>
          </section>
          <section>
            <ArchitectureOutlined />
            <span>{`${props.size[0]} x ${props.size[1]} m`}
            <sup>2</sup></span>
          </section>
        </div>
      </CardContent>

    </Card>
  );
}
