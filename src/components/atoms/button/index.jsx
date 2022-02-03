import React from 'react'
import Button from '@mui/material/Button';
import clsx from 'clsx';
import useStyles from '../../../custom-hooks/useStyles'
import styles from './style'
import BTN from '../../../constant/buttonTypes'


export default function ButtonAtom (props) {
  const { onClick, name, disabled,btntype,icon,type,className,startIcon} = props
  const classes = useStyles(styles)()

      return (
        <Button
            type={type}
            className={clsx(className,btntype === BTN.PRIMARY?classes.primaryButton:btntype === BTN.SECONDARY?classes.secButton:classes.customizedButton)}
            onClick={onClick}
            disabled={disabled}
          >
            {name}
            <span>{icon}</span> 
          </Button>
      )
 


 
 
}