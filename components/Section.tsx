import { Box, Typography } from '@mui/material'
import React,{FC, ReactNode} from 'react'

interface Props {
    title?: string,
    children?: ReactNode,
    titleTag?: 'h1' | 'h2',
}

const Section:FC<Props> = ({title, children, titleTag = 'h1'}) => {
  return (
    <Box>
        <Typography variant={titleTag === 'h1' ? 'h1' : 'h2'} component={titleTag === 'h1' ? 'h1' : 'h2'}>{title}</Typography>
        <Typography variant='body2' component='p'>{children}</Typography>
    </Box>
  )
}

export default Section