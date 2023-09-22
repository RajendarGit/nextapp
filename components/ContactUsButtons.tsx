import React,{FC} from 'react'
import {Button} from '@mui/material'

interface Props {
    curvedBtn?: boolean;
}


const ContactUsButtons:FC<Props> = ({curvedBtn = false}) => {
  return (
    <>
    <Button variant='contained'>Click me</Button>
        <Button variant='contained' color='info'>Click me</Button>
        <Button variant='contained' color='secondary' sx={{borderRadius: curvedBtn ? '5rem' : 'initial'}}>Starnge Button</Button>
    </>
  )
}

export default ContactUsButtons