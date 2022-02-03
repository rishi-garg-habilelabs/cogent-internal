const homePageStyle = (theme) => ({
    mainContainer:{
        width:900,
        justifyContent:'center'
    },
    wrapper:{
        justifyContent:'center',
        marginTop:"10%"
    },
    cardLeft: {
            boxShadow: '0 0px 15px 3px hsl(0deg 0% 65% / 25%)',
            minHeight:450,
            textAlign:'center',
    },
    cardRight: {
          background: '#FF6D00',
          color:'white',
          textAlign:'center',
          boxShadow: '0 0px 15px 3px hsl(0deg 0% 65% / 25%)',
          minHeight:450
      },


});

export default homePageStyle;
