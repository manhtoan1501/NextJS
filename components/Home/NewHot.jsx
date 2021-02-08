import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import {
  IconButton,
  Icon,
  Tooltip,
  Button,
  Card,
  Grid,
  CardContent,
  CardActions,
  Typography,
  AppBar,
  Toolbar,
  CardActionArea,
  CardMedia,
  Avatar,

} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Skeleton from '@material-ui/lab/Skeleton'
import moment from 'moment'
import _ from 'lodash'

const styles = theme => ({
  card: {
    maxWidth: 300,
  },
  imgZoom: {
    width: '100%',
    height: '120px',
    '&:hover': {
      boxShadow: '2px 2px 8px 2px #aaa',
    },
  },
})

const img = [
  {
    img: 'https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg',
    title: 'Hiện đại vuông vắn lịch lãm quý phái',
    content: ''
  },
  {
    img: 'https://sdk.vn/wp-content/uploads/2018/11/s%C6%A1n-g%E1%BB%97-ph%E1%BB%A7-m%E1%BB%9D.jpg',
    title: 'Phong cách hoàng gia, đậm chất cổ điển',
    content: '',
  },
  {
    img: 'https://nhadepnhaxinh.vn/images/p.kh%C3%A1ch_t%E1%BA%A7ng_1_.2_1.jpg',
    title: 'Thiết kế tiện nghi sang trọng',
    content: '',
  },
  {
    img: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2017/10/04/59d4564373a4f_1507087939.jpg',
    title: 'Sang trọng với giường ngủ cổ điển',
    content: ''
  },
  {
    img: 'https://vatlieuxaydung.org.vn/Upload/48/Nam_2018/Thang_12/Ngay_19/vlxd.org_nguyentac2.jpg',
    title: '',
    content: ''
  },
  {
    img: 'https://vecto.com.vn/wp-content/uploads/2017/04/tu_bep_soi_nga-500x495.jpg',
    title: '',
    content: ''
  },
  {
    img: 'http://noithatdephanoi.com.vn/uploads/images/tu-bep-go-son-mau-chu-l-co-dien/n9.jpg',
    title: '',
    content: ''
  },
  {
    img: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2018/09/04/5b8e559546990_1536054677.jpg',
    title: '',
    content: ''
  }
]

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let { classes } = this.props
    return (
      <div>
        <Typography variant='h6' color='primary' style={{ textAlign: 'center' }}>
          Khuyến mãi
        </Typography>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Index);