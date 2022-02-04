const themeObj = {
    light: {
      typography: {
        fontFamily: ['Poppins', 'sans-serif', 'Arial'].join(','),
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': ['Poppins'],
          },
        },
        MuiPickersToolbar: {
          toolbar: {
            backgroundColor: '#1d1e28',
          },
        },
        MuiCircularProgress: {
          colorPrimary: {
            color: '#3f51b5',
          },
        },
        MuiTablePagination: {
          root: {
            borderBottom: 0,
          },
        },
        MuiTooltip: {
          arrow: {
            color: '#000',
          },
        },
      },
      menu: 280,
      logo: 0,
      type: "light",
      palette: {
        type: "light",
        primary: {
          contrastText: "#f3f3f3",
          dark: "#ebebeb",
          light: "#ebebeb",
          main: "#f3f3f3",
          boxShadow: "rgba(0, 0, 0, 0.2)",
        },
        secondary: {
          contrastText: "#fafafa",
          dark: "#1c1c1c",
          light: "#f3f3f3",
          main: "#e0e0e0",
        },
        mainContainerBg: {
          color: "#fff",
        },
        cipBackground:{
          color:'#f9f9f9'
        },
        background: {
          default: "#1d1e28",
          paper: "#fff",
        },
        modalHeaderBg: {
          color: "#161616",
        },
        disabledActiveButton: {
          color: "#dcd9d9",
        },
        modalContentBg: {
          color: "#dedede",
        },
        modalContainerColor: {
          color: "#fff",
        },
        borderColor: {
          color: "#1d1e28",
        },
        modalTextColor: {
          color: "#1c1c1c",
        },
        modalTextColorLight: {
          color: "#abaaaa",
        },
        btnColor: {
          color: "#ebf2f2",
        },
        modalTextActiveBtnColor: {
          color: "#fff",
        },
        disabledBtnOpacity: {
          opacity: 0.3,
        },
        selectBoxLabel: {
          color: "rgba(0, 0, 0, 0.65)",
        },
        thresholdColor: {
          color: "#1c1c1c",
        },
        profileBackground: {
          color: "#888",
        },
        editBtn: {
          color: "#eaf1f1",
        },
        filterMenu: {
          color: "#fff",
        },
        filterMenuHover: {
          color: "#f1f6f6",
        },
        modalTableHeader: {
          color: '#317ff6'
        },
        mainDropdownColor: {
          color: "#fff",
        },
        profileDropdownBorder: {
          color: "#e4e1e1",
        },
        colorOpacity: {
          opacity: "0.54",
        },
        modalTextColorOpacity: {
          color: "rgba(0,0,0,0.42)",
        },
        textColorOpacity: {
          color: "rgba(255,255,255,0.7)",
        },
        statsHeading: {
          color: "#888",
        },
        companyPolicyBackground: {
          color: "#fff",
        },
        selectedListItem: {
          color: "#fff",
        },
        submenuBg: {
          color: "#c4c4c4",
        },
        toggleSwitch: {
          color: "#1d1e28",
        },
        toggleSwitchTrack: {
          color: "#d4d4d4",
        },
        dashed: {
          color: "rgba(136, 136, 136, 0.6784313725490196)",
        },
        defaultBackgroundBtn: {
          color: "#ebebeb",
        },
        btnOpacity: {
          opacity: 0.2,
        },
        sidebarCompany: {
          color: "rgba(0,0,0,0.2)",
        },
        multiSelectBackground: {
          color: "#fff",
        },
        loginLeftBg: {
          color: "#f7f8f9",
        },
        loginRightBg: {
          color: "#f3f3f3",
        },
        successBackground: {
          color: "#e7fec261",
        },
        linkColor: {
          color: "#707070",
        },
        activeMenuBarBg: {
          color: "#e6effe",
        },
        activeMenuBarButton: {
          color: "#e6effe",
        },
        licenseTextColor: {
          color: "#000",
        },
        sidebarMainMenu: {
          color: "rgba(0, 0, 0, 0.08)",
        },
        graphButton: {
          color: "#ebebeb",
        },
        buttonBorder: {
          color: "#88888836",
        },
        bottomInputLine: {
          color: "#8886",
        },
        counterBorder: {
          color: "#dadee4",
        },
        activeDayColor: {
          color: "#fff",
        },
        activeDayColorHover: {
          color: "#ebebeb",
        },
        loginMobileBg: {
          color: "#fff",
        },
        bg1: {
          color: "#99edff",
        },
        bg2: {
          color: "#a5c9e1",
        },
        bg3: {
          color: "#bfd0f6",
        },
        bg4: {
          color: "#d8e7f3",
        },
        bellHover: {
          color: "#d9d9d9",
        },
        chipLabelColor: {
          color: "rgba(0, 0, 0, 0.65)",
        },
        attachmentBg: {
          color: "#fff",
        },
        loaderPrimary: {
          color: "#ebebeb",
        },
        loaderSecondary: {
          color: "#f3f3f3",
        },
        postBtn: {
          color: "#0065f7",
        },
        readOnlyNotify: {
          color: "#ebebeb",
        },
        datePickerBorder: {
          color: "rgba(0, 0, 0, 0.2)",
        },
        dataRangeHighlighted: {
          color: "rgba(0,0,0,0.04)",
        },
        iconLabelBg: {
          color: "#fff",
        },
        iconLabelBgDisabled: {
          color: "#fafafa",
        },
        profileEditBg: {
          color: "#fff",
        },
        iconLabelTextDisabled: {
          color: "#7a7a7a",
        },
        headerBgColor: {
          color: "#fff",
        },
        sidebarBtn: {
          color: "#E0E0E0",
        },
        mainLayout: {
          color: "#f3f8fe",
          // color: "#fff",
        },
        sidebarBg: {
          color: "#fff",
        },
        activeMenu: {
          color: "#e6effe",
        },
        mainTableLayoutBg: {
          color: "#fff",
        },
        mainTableBorder: {
          color: "#ebebeb",
        },
        headerIcons: {
          color: "#f9f9f9",
        },
        notificationDropdown: {
          color: "#E0E0E0",
        },
        platform: {
          color: "#fff",
        },
        activeButton: {
          color: "#242A30",
        },
        modalsContentBg: {
          color: "#fff",
        },
        tableBorder: {
          color: "#ebebeb",
        },
        tableBorderTransparent: {
          color: "rgb(208 209 210)",
        },
        tableHeaderBg: {
          color: "#1c1f28",
        },
        dashboardCards: {
          color: "#fff",
        },
        U2FTableBorder: {
          color: "#eee",
        },
        profileSectionSidebar: {
          color: "#ebebeb",
        },
        profileSectionSidebarContent: {
          color: "#fff",
        },
        mainButtons: {
          color: "#ebebeb",
        },
        secureBorder: {
          color: "#e5e5e5",
        },
        sidebarText: {
          color: "#1c1c1c",
        },
        sidebarIconBg: {
          color: "#494962",
        },
        openDropdownBg: {
          color: "#c4c4c4",
        },
        sidebarScrollBg: {
          color: "rgba(0,0,0,0.4)",
        },
        cipInputBorderColor: {
          color: "rgba(0,0,0,0.42)",
        },
        innerAccordionColor: {
          color: "#fff",
        },
        timelineAccordionColor: {
          color: "#fff",
        },
        groupTimelineActiveBtn: {
          color: "#a8a8a8",
        },
        maliciousIndicator: {
          color: "#E73030",
        },
        failedIndicator: {
          color: "#E73030",
        },
        normalIndicator: {
          color: "#30E741",
        },
        suspiciousIndicator: {
          color: "#E7D830",
        },
        inprogressIndicator: {
          color: "#0065f7",
        },
        queuedIndicator: {
          color: "#E78A30",
        },
        maliciousText: {
          color: "#a94442",
        },
        normalText: {
          color: "#3c763d",
        },
        suspiciousText: {
          color: "#8a6d3b",
        },
        inprogressText: {
          color: "#11116169",
        },
        loaderPrimaryDark: {
          color: "#ebebeb",
        },
        addnewItemBg: {
          color: "#ebebeb",
        },
        addnewItemColor: {
          color: "#1c1c1c",
        },
        themeColor: {
          color: "#ebebeb",
        },
        crossIconBg: {
          color: "#166ff7",
        },
        crossIconBorder: {
          color: "#dedede",
        },
        userTabBg: {
          color: "#eee",
        },
        policySectionBg: {
          color: "#f7f8f9",
        },
        policyTabBg: {
          color: "#f7f8f9",
        },
        defaultHoverBtn: {
          color: "#ebebeb",
        },
        thestepActive:{
          color:'#0065f7',
        },
        defaultBtnShadow: {
          boxShadow: "0 0 10px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1)",
        },
        blueButtonBg: {
          color: "#0065f7"
        },
        dashboardGradiant: {
          color:"55abdf"
        },
        dashboardBtn: {
          color: "eeeeef"
        },
        dashboardImg: {
          backgroundImage: "linear-gradient(-58deg, #0065f7 0%, #55abdf 100%)"
        },
        onBlurText: {
          color: 'rgba(0, 0, 0, 0.54)'
        },
        theBoxTitle: {
          color: '#317ff6'
        },
        theTableEvenLines:{
          color:'#f6f9ff'
        },
        theSearchBg:{
          color:'#c7dcfb'
        },
        theActionButton:{
          color:'#494c4e'
        },
        theFilterSection:{
          color:'#fff;'
        },
        theChipData:{
          color: '#e8f1fe',
        },
        theActveTab:{
          color:'#8fb6f1',
        },
        theNormalTab:{
          color:'#8ebafd',
        },
        theSeperator:{
          color:'#1c1f28',
        },
        thecrossIconColor: {
          color: "#fff",
        },
        theModalContainerBg:{
          color:'#fff',
        },
        theModalInputBg:{
          color:'#f1f6fc',
        },
        thePaperContainer:{
          color:'#fff',
        },
        theTableHover:{
          color:'rgba(0, 0, 0, 0.04)',
        },
        theLiHoverBg:{
          color:'rgba(0, 0, 0, 0.04)',
        },
        barColorPrimary: {
          color:'#317ff6'
        },
        theAutoFill:{
          color:'#ffffff'
        },
        theChooseVerificatinMethod:{
          color:'#ebebeb',
        },
        theLoginScreenBg:{
          color:'#fff',
        },
        loginTopBorder: {
          color: 'rgba(0,0,0,.2)',
        },
        queryConsoleBg: {
          color: '#c7dcfb'
        },
        footerBg: {
          color: '#fff'
        },
        newTabBg:{
          color: '#fff'
        }
      },
    },
    
    
    dark: {
      typography: {
        fontFamily: ['Poppins', 'sans-serif', 'Arial'].join(','),
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': ['Poppins'],
          },
        },
        MuiCircularProgress: {
          colorPrimary: {
            color: '#3f51b5',
          },
        },
        MuiTablePagination: {
          root: {
            borderBottom: 0,
          },
        },
        MuiTooltip: {
          arrow: {
            color: '#000',
          },
        },
      },
      menu: 280,
      logo: 1,
      type: "dark",
      palette: {
        type: "dark",
        primary: {
          contrastText: "#454545",
          dark: "#1d1e28",
          light: "#191919",
          main: "#1d1e28",
          boxShadow: "rgba(0, 0, 0, 0.5)",
        },
        secondary: {
          contrastText: "#191919",
          dark: "#0065f7",
          light: "#2a2c39",
          main: "#2a2c39",
        },
        modalHeaderBg: {
          color: "#2d303f",
        },
        modalContentBg: {
          color: "#1c1f28",
        },
        mainContainerBg: {
          color: "#2d303f",
        },
        disabledActiveButton: {
          color: "#484a54",
        },
        background: {
          default: "#1d1e28",
          paper: "#2a2c39",
        },
        modalContainerColor: {
          color: "#4e6f8c",
        },
        borderColor: {
          color: "#fff",
        },
        modalTextColor: {
          color: "#fff",
        },
        modalTextColorLight: {
          color: "#abaaaa",
        },
        textColorOpacity: {
          color: "rgba(0,0,0,0.42)",
        },
        modalTextActiveBtnColor: {
          color: "#1d1e28",
        },
        btnColor: {
          color: "#355b7c",
        },
        disabledBtnOpacity: {
          opacity: 0.3,
        },
        loginTopBorder: {
          color: 'rgba(255,255,255,0.2)',
        },
        modalTableHeader: {
          color: '#191b20'
        },
        selectBoxLabel: {
          color: "rgba(255, 255, 255, 0.7)",
        },
        thresholdColor: {
          color: "rgba(255, 255, 255, 0.7)",
        },
        profileBackground: {
          color: "#fff",
        },
        editBtn: {
          color: "#48728f",
        },
        filterMenu: {
          color: "#355b7c",
        },
        filterMenuHover: {
          color: "#426a88",
        },
        mainDropdownColor: {
          color: "#355B7C",
        },
        profileDropdownBorder: {
          color: "#5d5959",
        },
        colorOpacity: {
          opacity: "0.7",
        },
        modalTextColorOpacity: {
          color: "rgba(255,255,255,0.7)",
        },
        statsHeading: {
          color: "#817d7d",
        },
        companyPolicyBackground: {
          color: "#355b7c",
        },
        selectedListItem: {
          color: "#191919",
        },
        submenuBg: {
          color: "#0c0c0c",
        },
        toggleSwitch: {
          color: "#0065f7",
        },
        toggleSwitchTrack: {
          color: "#656565",
        },
        dashed: {
          color: "#292929",
        },
        defaultBackgroundBtn: {
          color: "#ebebeb",
        },
        btnOpacity: {
          opacity: 0.5,
        },
        sidebarCompany: {
          color: "rgba(0,0,0,0.1)",
        },
        multiSelectBackground: {
          color: "#2a2c39",
        },
        loginLeftBg: {
          color: "#2a2c39",
        },
        loginRightBg: {
          color: "#1b1f29",
        },
        successBackground: {
          color: "#e7fec2",
        },
        linkColor: {
          color: "#fff",
        },
        activeMenuBarBg: {
          color: "#33363d",
        },
        activeMenuBarButton: {
          color: "#33363d",
        },
        licenseTextColor: {
          color: "#0065f7",
        },
        sidebarMainMenu: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        graphButton: {
          color: "#575656",
        },
        buttonBorder: {
          color: "rgba(255,255,254,0.17)",
        },
        bottomInputLine: {
          color: "rgba(255, 255, 255, 0.30196078431372547)",
        },
        counterBorder: {
          color: "#333743",
        },
        activeDayColor: {
          color: "#4545459c",
        },
        activeDayColorHover: {
          color: "#4545459c",
        },
        loginMobileBg: {
          color: "#181818",
        },
        bg1: {
          color: "#0f6274",
        },
        bg2: {
          color: "#4e5d69",
        },
        bg3: {
          color: "#324268",
        },
        bg4: {
          color: "#1b3e56",
        },
        bellHover: {
          color: "#303030",
        },
        chipLabelColor: {
          color: "rgba(255, 255, 255, 0.7)",
        },
        attachmentBg: {
          color: "#141414",
        },
        loaderPrimary: {
          color: "#2a2c39",
        },
        loaderSecondary: {
          color: "rgba(69,69,69,0.7)",
        },
        postBtn: {
          color: "#0065f7",
        },
        datePickerBorder: {
          color: "rgba(255,255,255,0.8)",
        },
        readOnlyNotify: {
          color: "#2a2c39",
        },
        dataRangeHighlighted: {
          color: "rgba(255,255,255,0.1)",
        },
        iconLabelBg: {
          color: "#2a2c39",
        },
        iconLabelBgDisabled: {
          color: "#484a54",
        },
        profileEditBg: {
          color: "#141414",
        },
        iconLabelTextDisabled: {
          color: "#fff",
        },
        headerBgColor: {
          color: "#1c1f28",
        },
        sidebarBtn: {
          color: "#6F6F6F",
        },
        mainLayout: {
          color: "#252935",
        },
        sidebarBg: {
          color: "#1d1e28",
        },
        activeMenu: {
          color: "#33363d",
        },
        mainTableLayoutBg: {
          color: "#2a2c39",
        },
        mainTableBorder: {
          color: "#242424",
        },
        headerIcons: {
          color: "#353535",
        },
        notificationDropdown: {
          color: "#2d2f3d",
        },
        platform: {
          color: "#1c1f28",
        },
        activeButton: {
          color: "#2e2e2e",
        },
        modalsContentBg: {
          color: "#1c1f28",
        },
        tableBorder: {
          color: "#1d1e28",
        },
        tableBorderTransparent: {
          color: "#494e5d",
        },
        tableHeaderBg: {
          color: "#1c1f28",
        },
        dashboardCards: {
          color: "#2d2f3d",
        },
        U2FTableBorder: {
          color: "rgb(69 69 69 / 52%)",
        },
        profileSectionSidebar: {
          color: "#1c1f28",
        },
        profileSectionSidebarContent: {
          color: "#2a2c39",
        },
        mainButtons: {
          color: "#1d1e28",
        },
        secureBorder: {
          color: "#fff",
        },
        sidebarText: {
          color: "hsla(0,0%,100%,.9098039215686274)",
        },
        sidebarIconBg: {
          color: "#fff",
        },
        openDropdownBg: {
          color: "#1c1f28",
        },
        sidebarScrollBg: {
          color: "#4E4E4E",
        },
        cipInputBorderColor: {
          color: "rgba(255,255,255,0.7)",
        },
        innerAccordionColor: {
          color: "#1c1f28",
        },
        timelineAccordionColor: {
          color: "#2a2c39",
        },
        groupTimelineActiveBtn: {
          color: "#1d1e28",
        },
        maliciousIndicator: {
          color: "#E73030",
        },
        normalIndicator: {
          color: "#30E741",
        },
        suspiciousIndicator: {
          color: "#E7D830",
        },
        queuedIndicator: {
          color: "#E78A30",
        },
        inprogressIndicator: {
          color: "#0065f7",
        },
        failedIndicator: {
          color: "#E73030",
        },
        maliciousText: {
          color: "#ffc7c7",
        },
        normalText: {
          color: "#9fff9e",
        },
        suspiciousText: {
          color: "#fdff9e",
        },
        inprogressText: {
          color: "#8f8fff69",
        },
        loaderPrimaryDark: {
          color: "#2a2c39",
        },
        addnewItemBg: {
          color: "#fff",
        },
        addnewItemColor: {
          color: "#fff",
        },
        themeColor: {
          color: "#2a2c39",
        },
        crossIconBg: {
          color: "#fff",
        },
        crossIconBorder: {
          color: "#dedede26",
        },
        userTabBg: {
          color: "#2a2c39",
        },
        policySectionBg: {
          color: "#2a2c39",
        },
        policyTabBg: {
          color: "#2a2c39",
        },
        defaultHoverBtn: {
          color: "#1c1c1c",
        },
        defaultBtnShadow: {
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
        },
        cipBackground:{
          color:'#2a2c39'
        },
        blueButtonBg: {
          color: "#0065f7"
        },
        dashboardGradiant: {
          color:"55abdf"
        },
        dashboardBtn: {
          color: "eeeeef"
        },
        dashboardImg: {
          backgroundImage: "linear-gradient(-58deg, #0065f7 0%, #55abdf 100%)"
        },
        onBlurText: {
          color: 'rgba(255, 255, 255, 0.7)'
        },
        queryConsoleBg:{
          color: '#4e505c'
        },
  
  
  
        theBoxTitle: {
          color: '#1c1f28'
        },
        theTableEvenLines:{
          color:'#2b334a'
        },
        theSearchBg:{
          color:'#4e505c'
        },
        theActionButton:{
          color:'#fff'
        },
        theFilterSection:{
          color:'#2d303f;'
        },
        theChipData:{
          color: '#575965',
        },
        theActveTab:{
          color:'#3f424b',
        },
        thestepActive:{
          color:'#0065f7',
        },
        theNormalTab:{
          color:'#1c1f28',
        },
        theSeperator:{
          color:'#fff',
        },
        thecrossIconColor: {
          color: "#166ff7",
        },
        theModalContainerBg:{
          color:'#1c1f28',
        },
        theModalInputBg:{
          color:'#252935',
        },
        thePaperContainer:{
          color:'#2a2c39',
        },
        barColorPrimary: {
          color:'#317ff6'
        },
        theTableHover:{
          color:'rgba(255, 255, 255, 0.08)'
        },
        theLiHoverBg:{
          color:'rgba(255, 255, 255, 0.08)',
        },
        theAutoFill:{
          color:'#252935',
        },
        theChooseVerificatinMethod:{
          color:'#1977f7',
        },
        theLoginScreenBg:{
          color:'#252935',
        },
        footerBg: {
          color:'#252935'
        },
        newTabBg:{
          color:'#1c1f28',
        }
      },
    },
  };
  
  export default themeObj;
  