import * as React from "react";
import Box from "@mui/material/Box";
import TextFieldAtom from "../../../components/atoms/textfield";
import { useTranslation } from "react-i18next";
import { Paper } from "@mui/material";
import useStyles from '../../../custom-hooks/useStyles'
import styles from './style'

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        flexGrow: 1,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function ParentInfo() {
  const { t } = useTranslation();
  const classes = useStyles(styles)()
  return (
    <Paper style={{ width: "100%" }}>
         <Box
         className={classes.title}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        {t("PARENT_INFO")}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Item>
          <TextFieldAtom label={t("TITLE")} />{" "}
        </Item>
        <Item>
          <TextFieldAtom label={t("FIRSTNAME")} />
        </Item>
        <Item>
          <TextFieldAtom label={t("MIDDLENAME")} />{" "}
        </Item>
        <Item>
          <TextFieldAtom label={t("LASTNAME")} />{" "}
        </Item>
        <Item>
          <TextFieldAtom label={t("EMAIL")} />{" "}
        </Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Item>
          <TextFieldAtom label={t("EMAIL")} />{" "}
        </Item>
        <Item>
          <TextFieldAtom label={t("CONTACTNO")} />{" "}
        </Item>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Item>
          <TextFieldAtom label={t("PROFESSION")} />{" "}
        </Item>
        <Item>
          <TextFieldAtom label={t("NAMEOFCOMPANY")} />{" "}
        </Item>
      </Box>
    </Paper>
  );
}
