const dashboardStyle = (screenwidth) => ({
    mainContainer: {
      justifyContent: "center",
    },
    mainHeading:{
      height:70
    },
    textMargin:{
      marginTop: 20 
    },
    wrapper: {
      justifyContent: "center",
      backgroundColor:'#e4f5fd',
    alignItems: "center",
    },
    dashboard: {
      borderRadius: 0,
      marginTop: 60 ,
      width:screenwidth,
      boxShadow: "0 0px 15px 3px hsl(0deg 0% 65% / 25%)",
      minHeight: 450,
      textAlign: "center",
    },
  });
  
  export default dashboardStyle;
  