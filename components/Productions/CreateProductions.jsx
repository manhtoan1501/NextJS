import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import "../../assets/scss/style.scss";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    product: {
        display: "inline",
        borderRadius: 2,
        "&:hover": {
            boxShadow: "2px 2px 8px 2px #aaa",
        },
    },
}));

const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
];

const imgProduct = [
    { title: "Giường gỗ  tự nhiên", img: "https://xamdecor.com/media/images/2019/01/xambanner07.jpg" },
    { title: "Ban an hien dai", img: "https://khungtranhtreotuong.com/wp-content/uploads/ms0625.jpg" },
    {
        title: "Tu quan ao",
        img:
            "https://product.hstatic.net/1000362384/product/bo_tranh_treo_tuong_canvas_nghe_thuat_cv08_bf6696472f4a40e488c2c3a96e936729.jpg",
    },
    {
        title: "Ban phong khach hien dai",
        img: "https://khungtranhtreotuong.com/wp-content/uploads/bo-7-tranh-treo-tuong-scandinavian-MS079-3.jpg",
    },
];
const Create = (props) => {
    const [index, setIndex] = React.useState(0);
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <div style={{ padding: "40px 0" }}>
                        <Typography color="primary" style={{ fontSize: 20, color: "#1976d2" }}>
                            Thêm sản phẩm
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={6} style={{ padding: "40px 0" }}>
                                <form noValidate autoComplete="off">
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField fullWidth size="small" label="Mã sản phẩm" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth size="small" label="Tên sản phẩm" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Autocomplete
                                                id="combo-box-demo"
                                                fullWidth
                                                size="small"
                                                options={top100Films}
                                                getOptionLabel={(option) => option.title}
                                                renderInput={(params) => (
                                                    <TextField fullWidth size="small" {...params} label="Loại sản phẩm" variant="outlined" />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth size="small" label="Giá sản phẩm" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth size="small" label="Chất liệu" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField fullWidth size="small" label="Ảnh 1" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField fullWidth size="small" label="Ảnh 2" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField fullWidth size="small" label="Ảnh 3" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField fullWidth size="small" label="Ảnh 4" variant="outlined" />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                multiline
                                                rows={5}
                                                rowsMax={10}
                                                label="Giới thiệu"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                            <Grid item xs={6}>
                                <div
                                    style={{
                                        textAlign: "center",
                                    }}
                                >
                                    {imgProduct.map((item, count) => {
                                        return (
                                            <div key={count} style={{ display: "inline" }}>
                                                {index === count && (
                                                    <div>
                                                        <Typography align="center" style={{ color: "#1976d2", fontSize: 20, fontStyle: "italic" }}>
                                                            {item.title}
                                                        </Typography>
                                                        <img src={item.img} style={{ width: "100%", height: 400 }} />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    {imgProduct.map((item, count) => {
                                        return (
                                            <div
                                                style={{ height: 50, width: 80, display: "inline", borderRadius: 2, padding: 4 }}
                                                onClick={() => setIndex(count)}
                                            >
                                                <img
                                                    key={count}
                                                    className={classes.product}
                                                    src={item.img}
                                                    style={{ width: 80, height: 50, border: index === count ? "2px solid #00e5ff" : null }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Create;
