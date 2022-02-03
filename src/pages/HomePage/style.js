const homePageStyle = (theme) => ({
  mainContainer: {
    width: 900,
    justifyContent: "center",
  },
  textMargin:{
    marginTop: 20 
  },
  wrapper: {
    justifyContent: "center",
    marginTop: "10%",
  },
  cardLeft: {
    borderRadius: 0,
    boxShadow: "0 0px 15px 3px hsl(0deg 0% 65% / 25%)",
    minHeight: 450,
    textAlign: "center",
  },
  cardRight: {
    borderRadius: 0,
    background: "#FF6D00",
    color: "white",
    textAlign: "center",
    boxShadow: "0 0px 15px 3px hsl(0deg 0% 65% / 25%)",
    minHeight: 450,
  },
});

export default homePageStyle;
