import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth(props) {
  const {
    optionList, handleSelect, value, label, minWidth,
  } = props;

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth }}>
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleSelect}
          label={label}
        >
          {optionList ? (
            // eslint-disable-next-line array-callback-return
            optionList.map((i) => {
              <MenuItem value={10}>{i.label}</MenuItem>;
            })
          ) : (
            <MenuItem value="">None</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}
