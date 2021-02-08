import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,

} from "@material-ui/core";
import Link from "next/link";
import "../../assets/scss/style.scss";
import Autocomplete from "@material-ui/lab/Autocomplete";
import BannerSliderBlock from "../PageDetail/BannerSliderBlock";
import { makeStyles } from "@material-ui/core/styles";
import StringProcess from "./../../modules/stringProcess";
import Test from './Test';
import MaterialTable from '../Table';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  product: {
    display: "inline",
    borderRadius: 2,
    "&:hover": {
      boxShadow: "2px 2px 8px 2px #aaa",
    },
  },
}));

const IndexProductions = (props) => {
  const [index, setIndex] = React.useState(0);
  const [position, setPosition] = React.useState(false);
  const myRef = React.useRef();
  const classes = useStyles();
  const [timeState, setTimeState] = React.useState(2020);
  const onClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      {/* <Test /> */}
      <Grid container spacing={4} style={{ padding: 40 }}>
        <Grid item xs={12}>
          <Typography style={{ fontSize: 25, fontWeight: 700, color: "#1976d2" }}>Danh sách sản phẩm</Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField fullWidth size="small" label="Lọc theo tên" variant="outlined" />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth size="small" label="Lọc theo mã" variant="outlined" />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth size="small" label="Lọc theo giá" variant="outlined" />
            </Grid>
            <Grid item xs={3} style={{ textAlign: "right" }}>
              <Link href="/san-pham/them-san-pham" as={"/san-pham/them-san-pham"}>
                <a>
                  <Button style={{ position: 'sticky', top: 0 }} ref={myRef} variant="contained">Tạo mới</Button>
                </a>
              </Link>
            </Grid>
          </Grid>
          <div style={{ padding: "40px 0" }}>
            <MaterialTable />
          </div>
          <Button color="primary" variant="contained" >
            <Link href="/" as={"/"}>
              <a>
                <ArrowBackIosIcon style={{ color: 'white', fontSize: 15 }} />
                Back
              </a>
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default IndexProductions;

