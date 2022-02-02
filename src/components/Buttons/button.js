import React from 'react'
import Button from '@mui/material/Button';
import useStyles from '../../custom-hooks/useStyles'
import styles from './style'
import BTN from '../../constant/buttonTypes'

export default function CButton (props) {
  const { onClick, name, disabled,btntype,icon,type,className,startIcon} = props
  const classes = useStyles(styles)()

  switch (btntype) {
    case BTN.PRIMARY:
      return (
        <Button
            type={type}
            className={`${className} ${classes.primaryButton}` }
            onClick={onClick}
            disabled={disabled}
          >
            {name}
            <span>{icon}</span> 
          </Button>
      )
      // eslint-disable-next-line no-unreachable
      break;

      case BTN.SECONDARY:
        return (
            <Button
              className={`${className}  ${classes.secButton}`}
              onClick={onClick}
              disabled={disabled}
            >
             {name}
             <span>{icon}</span>      
            </Button>
        )
        // eslint-disable-next-line no-unreachable
        break;
        case BTN.CUSTOMIZED:
          return (
              <Button
                type={type}
                className={`${classes.customizeButton}  ${className}` }
                startIcon={startIcon}
                onClick={onClick}
                disabled={disabled}
              >
                 {name}
                 <span>{icon}</span>    
              </Button>
          )
          // eslint-disable-next-line no-unreachable
          break;

    default:
      return (
          <Button
            className={`${classes.secButton}`}
            onClick={onClick}
            disabled={disabled}
          >
            {name}
          </Button>
      )
      // eslint-disable-next-line no-unreachable
      break;
  }
 
}