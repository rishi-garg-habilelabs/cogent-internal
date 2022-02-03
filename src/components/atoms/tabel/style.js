import makeStyles from '@mui/styles/makeStyles';
import { colors } from '../../../theme/index';

const style = makeStyles(() => ({
  tderHead: {
    textTransform: 'initial',
  },
  tabelRowHead: {
    '& .MuiTableCell-head': {
      color: '#009490',
      padding: '6px 14px',
      fontSize: 16,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      borderBottom: '0px solid #dddddd',
      lineHeight: '28px',
      textAlign: 'left',
      backgroundColor: '#fff !important',
      letterSpacing: '3px',
      fontFamily: 'DINNextLTPro-Bold',
      '@media (max-width: 1199px)': {
        fontSize: 13,
      },
      '& .MuiTableSortLabel-root': {
        color: '#009490 !important',
        '& svg': {
          fill: '#009490 !important',
          position: 'relative',
          top: -2,
        },
        '&:hover': {
          color: 'inherit',
          '& svg': {
            opacity: 1,
          },
        },
      },
      '&:first-child': {
        paddingLeft: 0,
      },
    },
  },
  mainTable: {
    maxHeight: 440,
    boxShadow: 'none',
    '@media (max-width: 1199px)': {
      maxHeight: 'inherit',
    },
    '& > table': {
      // borderBottom: '1px solid #009490',
      // marginBottom: 10,
    },
    '& .MuiTablePagination-root': {
      display: 'flex',
      justifyContent: 'center',
      '& > div': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
  tabelRowBody: {
    '& .MuiTableCell-body': {
      padding: '8px 14px',
      color: colors.labelColor,
      fontSize: 14,
      position: 'relative',
      fontWeight: 'bold',
      borderBottom: '0px solid #dddddd',
      textAlign: 'left',
      fontFamily: 'DINNextLTPro-Bold',
      textTransform: 'uppercase',
      letterSpacing: 3,
      '& button': {
        backgroundColor: 'transparent !important',
        color: '#7cc4a3',
        width: '100%',
        '& svg': {
          width: 30,
          height: 30,
        },
        '&:hover': {
          backgroundColor: 'transparent !important',
        },
      },
      '& div[class*="-formControl-"]': {
        marginLeft: 0,
        marginRight: 0,
        '& .MuiSelect-select.MuiSelect-select': {
          padding: '14px 10px !important',
          backgroundColor: 'transparent !important',
          fontSize: 14,
        },
      },
      '@media (max-width: 1199px)': {
        fontSize: 13,
      },
      '&:first-child': {
        paddingLeft: 0,
      },
      '& .MuiChip-colorPrimary': {
        color: '#fff',
        borderRadius: 4,
        backgroundColor: '#9cc',
        fontSize: 12,
        '&:hover': {
          backgroundColor: '#009490',
        },
      },
      '& p': {
        fontWeight: 'bold',
        letterSpacing: 3,
        fontSize: 14,
        fontFamily: 'DINNextLTPro-Bold',
      },
    },
    // '&:last-child': {
    //   '& .MuiTableCell-body': {
    //     paddingBottom: 40,
    //   },
    // },
  },
  icons: {
    cursor: 'pointer',
    color: colors.webColor,
    fontSize: '14px !important',
    width: '85%',
    '& button': {
      width: '100% !important',
      justifyContent: 'center',
      letterSpacing: 3,
      padding: '10px',
      backgroundColor: '#9cc !important',
      boxShadow: 'none',
      fontWeight: 'bold',
      fontSize: 14,
      '&:hover': {
        backgroundColor: '#009490 !important',
        boxShadow: 'none',
      },
    },
  },
  tabel: {

  },
  borderBtm: {
    background: '#009490',
    width: '100% !important',
    margin: '40px 0 22px',
    height: 1,
    display: 'flex',
    '@media (max-width: 1599px)': {
      width: '100% !important',
    },
  },
  separator: {
    '& td': {
      borderRight: '1px dotted #9cc',
      '&:last-child': {
        borderRight: 0,
      },
    },
    '& th': {
      borderRight: '1px dotted #9cc',
      '&:last-child': {
        borderRight: 0,
      },
    },
  },
  link: {
    cursor: 'pointer',
  },
  numberField: {
    textAlign: 'right !important',
  },
  warningField: {
    color: 'red',
  },
  tableInputs: {
    width: 140,
  },
  inputErrors: {
    color: 'red',
    display: 'block',
    textOverflow: 'ellipsis',
    width: '100%',
    overflow: 'hidden',
    fontSize: '12px !important',
    whiteSpace: 'nowrap',
    position: 'absolute',
    left: 0,
    right: 0,
    padding: '0 14px',
    boxSizing: 'border-box',
    zIndex: 1,
    bottom: -5,
    cursor: 'pointer',
  },
}));

export default style;
