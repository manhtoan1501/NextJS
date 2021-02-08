import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import {
   CardContent,
   Typography,
   CardActionArea,
   CardMedia,
   Card,
   Avatar,
   Hidden,
   Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Skeleton from '@material-ui/lab/Skeleton'
import StarRateIcon from '@material-ui/icons/StarRate'
import what2 from './Image/what2.jpg'
import what3 from './Image/what3.jpg'
import what4 from './Image/what4.jpg'
import moment from 'moment'
import _ from 'lodash'

const styles = theme => ({
   viewPhone: {
      [theme.breakpoints.down('xs')]: {
         padding: '8px'
      },
   },
   card: {
      maxWidth: 200,
      border: '3px solid white',
      [theme.breakpoints.down('sm')]: {
         // position: 'fixed',
         maxWidth: 170,
      }
   },
   title: {
      color: 'white',
      padding: 20,
   },
   cssIcon: {
      color: 'white',
      fontSize: '30px'
   },
   imgZoom: {
      transition: "transform .5s, filter 3s ease-in-out",
      filter: "grayscale(100%)",
   },
   imgZoom: {
      "&:hover": {
         filter: "grayscale(0)",
         transform: "scale(1.1)",
         transitionDuration: "1s",
         transitionTimingFunction: "linear",
      }
   }
})

const arrImg = [
   {
      image: "https://thebank.vn/static/6/1135/714/90/2018/10/16/thebank_suthatvephiquetthetindungkhithanhtoan1min_1539654231.jpg",
      title: 'Mua Hàng Tiện Lợi',
   },
   {
      image: what4, //"https://www.thietkekientrucgroup.com/public/upload/images/noi-that-go-phong-khach%20(76).jpg",
      title: 'Bảo Hành Hậu Mãi',
   },
   {
      image: what2, //"https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg",
      title: 'Giá Cả Hợp Lý',
   },
   {
      image: what3, //"https://i2.wp.com/dogoquoccuong.com/wp-content/uploads/2014/08/DSC09545.jpg?fit=3008%2C2000&ssl=1",
      title: 'Uy Tín Chất Lượng',
   },
]
class Index extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      let { classes } = this.props
      // let img = "url('http://noithatdangcap.vn/app/webroot/uploads/files/1-phong-khach-noi-that-co-dien-chau-au-dinh-thu-tai-Nam-Dinh.jpg')"
      let img = "url('https://tamchuphinhsanpham.com/wp-content/uploads/2019/05/40779055_719896445012913_4364449498798227456_n.jpg')"
      // let img = "url('https://png.pngtree.com/58pic/32/49/67/20U58PICI9dWcd7X7yX8e_PIC2018.jpg')"
      const array = [{ item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }];

      return (
         <div style={{ backgroundImage: img, height: 280, width: '100%', backgroundRepeat: 'repeat' }} >
            <div style={{ color: '#2196f3', textAlign: 'center' }} >
               <Typography className={classes.title} variant='h4' component='h4'>
                  HÃY ĐẾN VỚI CHÚNG TÔI
               </Typography>
               {array.map((item, index) => <StarRateIcon key={index} className={classes.cssIcon} />)}
               <br></br>
               <center>
                  <Grid container spacing={0} alignItems='center' justify='center' direction='row' >
                     {
                        arrImg.map((element, index) => {
                           return (
                              <Grid item xs={6} sm={3} md={3} key={index} className={classes.viewPhone}>
                                 <Card className={classes.card}>
                                    <CardActionArea>
                                       <CardMedia
                                          className={classes.imgZoom}
                                          component="img"
                                          alt="Contemplative Reptile"
                                          height="100"
                                          image={element.image}
                                          title={element.title}
                                       />
                                       <div style={{ backgroundColor: '#2196f3', padding: 4 }} >
                                          <Typography variant="body2" style={{ color: 'white', fontSize: 16, fontWeight: 500 }} >
                                             {element.title}
                                          </Typography>
                                       </div>
                                    </CardActionArea>
                                 </Card>
                              </Grid>
                           )
                        })
                     }
                  </Grid>
               </center>
            </div>
         </div>
      )
   }
}

Index.propTypes = {
   classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Index)