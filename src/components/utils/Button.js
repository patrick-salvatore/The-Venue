import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../assets/images/icons/ticket.png'

export default function LilButton(props) {
  return (
    <Button
        href='http://google.com'
        variant= 'contained'
        size='small'
        style ={{
            backgroundColor: props.bck,
            color: props.color
        }}
    >
        <img 
            src ={TicketIcon}
            className='iconImage'
            alt='icon_button'
        >
        </img>
        {props.text}
    </Button>
  )
}
