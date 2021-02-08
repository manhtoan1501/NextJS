import * as React from 'react';
import SearchKeyword from "../components/Search/KeywordSlide";
import { Button, Grid, Typography, Icon, IconButton } from '@material-ui/core';
import What from '../components/Home/What';
import ButtonViews from '../components/Home/ButtonViews';
import NewHot from '../components/Home/NewHot';
import ListProduct from '../components/Home/ListProduct';
import Partner from "../components/Home/Partner";
import Product from '../components/Home/Products';
//Import SCSS
import "../assets/scss/style.scss";

const IndexPage = (props) => {

    return (
        <div>
            <Grid container spacing={0} justify='center'>
                <Grid item xs={3} style={{ textAlign: 'center' }}>
                    <NewHot />
                </Grid>
                <Grid item xs={8}>
                <div style={{ padding: '20px 0' }}> <What /> </div>
                <ButtonViews />
                <Product />
                </Grid>
                <Grid item xs={1} style={{ textAlign: 'center' }}></Grid>
            </Grid>
            <Partner />
            <SearchKeyword />
            <ListProduct />
            <div style={{ position: 'fixed', bottom: 30, right: 30 }}>
                <div>
                <a title="Trò chuyện Facebook" target="_blank" rel="noopener" href="http://m.me/925790224164852?ref=zozovn">
                    <img src="https://zozo.vn/public/theme/circle/images/widgets/fbmessenger.svg" alt="btn-facebook" />
                </a>
                </div>
                <div>
                <a title="Chat với chúng tôi qua Zalo" target="_blank" rel="noopener" href="https://zalo.me/0377535717">
                    <img src="https://zozo.vn/public/theme/circle/images/widgets/zalo.svg" alt="btn-zalo" />
                </a>
                </div>
                <div>
                <a title="Gọi ngay" href="tel:0936062166">
                    <img src="https://zozo.vn/public/theme/circle/images/widgets/call.svg" alt="btn-callnow" />
                </a>
                </div>
            </div>
        </div>
    )
};

export default IndexPage;
