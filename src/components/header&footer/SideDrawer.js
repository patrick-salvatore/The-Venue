import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll'

const SideDrawer = (props) => {

  const smoothScroll = (el) => {
    scroller.scrollTo(el, {
      duration: 1500, 
      delay: 100,
      smooth: true, 
      offset: -70 
    });
    props.onClose(false)
  }



  return (
    <Drawer
      anchor= "right"
      open= {props.open}
      onClose= {() => props.onClose(false)}
    >
        <List component= "nav">
            <ListItem button onClick = {()=> smoothScroll('home')}>
              The Event
            </ListItem>
            <ListItem button onClick = {()=> smoothScroll('info')}>
              Venue Info
            </ListItem>
            <ListItem button onClick = {()=> smoothScroll('hightlight')}>
              Highlights
            </ListItem>
            <ListItem button onClick = {()=> smoothScroll('pricing')}>
              Pricing
            </ListItem>
            <ListItem button onClick = {()=> smoothScroll('location')}>
              Location
            </ListItem>
        </List>
    </Drawer>
  )
}

export default SideDrawer