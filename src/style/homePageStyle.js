const homePageStyle = (theme) => ({
    cardLeft: {
            boxShadow: '0 4px 4px -2px hsl(0deg 0% 65% / 25%)',
    },
    cardRight: {
          background: 'white',
          boxShadow: '0 2px 5px rgb(0 0 0 / 16%), 0 2px 10px rgb(0 0 0 / 12%) !important',
          boxSizing: 'border-box',
          height: '45px',
          marginLeft: '15px',
          minWidth: '90px',
          color: '#FF6D00 !important',
          '&:hover': {
              background: '#FF6D00',
              color: '#fff !important',
          },
      },


});

export default homePageStyle;