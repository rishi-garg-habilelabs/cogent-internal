const selectBoxStyle = () => ({
    formControl: {
        minWidth: 300,
        '& li:hover': {
            backgroundColor: '#303039',
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #484850",
            borderRadius: "5px 5px 0 0"
        },
        '& .MuiInputBase-root': {
            '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'solid 1px ' ,
                }
            }
        }
    },
    selectEmpty: {
        marginTop: 6,
    },
    paper: {
        background: 'black',
        color: 'red',
    },

    input: {
        color:'red',
        backgroundColor: 'green',
        border: 'solid 1px ' ,
        padding: 9,
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #484850',
            borderRadius: '5px 5px 0 0',
        },
        '&:focus': {
            borderRadius: 4,
            borderColor: 'tranparent',
            borderBottom: '1px solid',
            // boxShadow: "0 0 0 0.1rem" +  theme.palette.primary.contrastText,
            background: 'none',
        },
    },
});

export default selectBoxStyle;
