const buttonStyle = (theme) => ({
    primaryButton: {
        '&.MuiButton-root': {
            textTransform:'none',
            borderRadius:50,
            color: '#f3f8fe !important',
            border: '1px solid #d300ff !important',
            boxShadow: '0 4px 4px -2px hsl(0deg 0% 65% / 25%)',
            boxSizing: 'border-box',
            height: '45px',
            marginLeft: '15px',
            minWidth: '90px',
            background: '#d300ff',
            textTransform: 'capitalize',
            '&:hover': {
                color: '#d300ff !important',
                background: '#fff',
            },
        },
        '&:disabled':{
            cursor:'not-allowed',
        }
    },
    secButton: {
      '&.MuiButton-root': {
         textTransform:'none',
          background: 'white',
          borderRadius:50,
          boxShadow: '0 2px 5px rgb(0 0 0 / 16%), 0 2px 10px rgb(0 0 0 / 12%) !important',
          boxSizing: 'border-box',
          height: '45px',
          marginLeft: '15px',
          minWidth: '90px',
          textTransform: 'capitalize',
          color: '#d300ff !important',
          '&:hover': {
              background: '#d300ff',
              color: '#fff !important',
          },
      },
  },
  customizeButton: {
    '&.MuiButton-root': {
        textTransform:'none',
        background: theme.palette.primary.main,
        border: '1px solid #d300ff !important',
        borderRadius: '50px',
        boxShadow: '0 2px 5px rgb(0 0 0 / 16%), 0 2px 10px rgb(0 0 0 / 12%) !important',
        boxSizing: 'border-box',
        height: '40px',
        marginLeft: '15px',
        minWidth: '108px',
        color: '#d300ff',
        '&:hover': {
            background: '#d300ff',
            color: '#fff',
        },
    },
},

});

export default buttonStyle;
