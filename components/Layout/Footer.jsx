import * as React from 'react'
import Grid from "@material-ui/core/Grid";
import PhoneIphone from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import Link from 'next/link';
//
const FooterPage = (props) => {
  return (
    <Grid container spacing={0} item xs={12} className="footer" direction="row"
      justify="center"
      alignItems="center">
      <Grid container spacing={0} className="footer_body"
        justify="center">
        <Grid item md={4} sm={12} className="footer_body__item border_bottom_mobile">
          <div className="footer_body__item_title">
            CÔNG TY CỔ PHẦN NỘI THẤT DODO
            </div>
          <div className="footer_body__item_description">
            <div className="footer_body__item_description_icon">
              <svg viewBox="0 0 384 512">
                <path
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg>
            </div>
            <div className="footer_body__item_description_text">
              <p className="footer_body__item_description_text_title">Địa chỉ</p>
              <p className="footer_body__item_description_text_content">
                88 Dương Đình Nghệ, Cầu Giấy, Hà Nội
              </p>
            </div>
          </div>
          <div className="footer_body__item_description">
            <div className="footer_body__item_description_icon">
              <PhoneIphone />
            </div>
            <div className="footer_body__item_description_text">
              <p className="footer_body__item_description_text_title">Điện thoại</p>
              <p className="footer_body__item_description_text_content">
                0377 535 717
                </p>
            </div>
          </div>
          <div className="footer_body__item_description">
            <div className="footer_body__item_description_icon">
              <EmailIcon />
            </div>
            <div className="footer_body__item_description_text">
              <p className="footer_body__item_description_text_title">E-mail</p>
              <p className="footer_body__item_description_text_content">
                noithatdodo@gmail.com
                </p>
            </div>
          </div>
        </Grid>
        <Grid item md={8} sm={12}>
          <Grid container spacing={0}>
            <Grid item md={4} xs={6} className="footer_body__item">
              <div className="footer_body__item_title">
                Công ty
                </div>
              <div className="footer_body__item_description">
                <Link href={'/about-us'} as={'/about-us'}><a>Về Nội Thất DODO</a></Link>
              </div>
              <div className="footer_body__item_description">
                <a href={'https://help.nhadatmoi.net/tuyen-dung'} rel={'nofollow'}>Tuyển dụng</a>
              </div>
              <div className="footer_body__item_description">
                <a href={'https://help.nhadatmoi.net/lien-he/thong-tin-lien-he'} rel={'nofollow'}>Thông tin liên hệ</a>
              </div>
              <div className="footer_body__item_description">
                <Link href={'/sitemap'} as={'/sitemap'}><a>Sitemap</a></Link>
              </div>
            </Grid>
            <Grid item md={4} xs={6} className="footer_body__item">
              <div className="footer_body__item_title">
                Thông tin
                </div>
              <div className="footer_body__item_description">
                Tin tức thị trường
              </div>
              <div className="footer_body__item_description">
                Báo cáo & Phân tích
              </div>
              <div className="footer_body__item_description">
                Kiến thức nội thất
              </div>
              <div className="footer_body__item_description">
                Chọn nội thất phong thủy
              </div>
            </Grid>
            <Grid item md={4} xs={6} className="footer_body__item">
              <div className="footer_body__item_title">
                Mạng xã hội
                </div>
              <div className="footer_body__item_description">
                Facebook
              </div>
              <div className="footer_body__item_description">
                Youtube
              </div>
              <div className="footer_body__item_description">
                Twitter
              </div>
              <div className="footer_body__item_description">
                LinkedIn
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterPage
