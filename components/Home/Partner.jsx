import React, { FunctionComponent } from "react";
import Slider from "react-slick";
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import Link from 'next/link';
import { keys } from "@material-ui/core/styles/createBreakpoints";
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import InfoIcon from '@material-ui/icons/Info'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import {
  IconButton,
  Icon,
  Tooltip,
  Button,
  Card,
  Grid,
  CardContent,
  CardActions,
  Typography
} from '@material-ui/core'
import OwlCarousel from 'react-owl-carousel2'
import a1 from './Image/a1.jpg'
import a2 from './Image/a2.jpg'
import a3 from './Image/a3.jpg'
import a4 from './Image/a4.jpg'
import a5 from './Image/a5.jpg'
import a6 from './Image/a6.jpg'
import a7 from './Image/a7.jpg'
import a8 from './Image/a8.jpg'
import a9 from './Image/a9.jpg'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    padding: '5px',
    backgroundColor: '#039be5',
    color: 'white',
  },
  imgZoom: {
    transition: "transform .5s, filter 3s ease-in-out",
    filter: "grayscale(100%)",
  },
  // imgZoom: {
  //   "&:hover": {
  //     filter: "grayscale(0)",
  //     transform: "scale(1.1)",
  //     transitionDuration: "1s",
  //     transitionTimingFunction: "linear",
  //   }
  // }
}));

const KeywordSlide = (props) => {
  const classes = useStyles();

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={'partner__next__arrow'}
        onClick={onClick}>
        <NavigateNext />
      </div>
    );
  }

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={'partner__prev__arrow'}
        onClick={onClick}>
        <NavigateBefore />
      </div>
    );
  }

  const dataSearch = [
    {
      title: "Giường ngủ hiện đại",
      path: "/du-an/vinhomes-central-park-pid-35872"
    },
    {
      title: "Tủ quần áo thời trang",
      path: "/du-an/vinhomes-grand-park-quan-9-pid-37584"
    },
    {
      title: "Bàn trà phòng khách hiện đại",
      path: "/du-an/vinhomes-smart-city-pid-37191"
    },
    {
      title: "Bàn trà phòng khách cổ điển",
      path: "/du-an/vinhomes-ocean-park-gia-lam-pid-37597"
    },
    {
      title: "Tủ bếp tiện nghi",
      path: "/du-an/vung-tau-pearl-pid-48674"
    },
    {
      title: "Nội thất sang trọng",
      path: "/du-an/grandeur-palace-pid-50234"
    },
    {
      title: "Giường ngủ cổ điển",
      path: "/du-an/diamond-island-pid-335"
    },
    {
      title: "Nội thất sang trọng",
      path: "/du-an/the-sun-avenue-pid-15"
    },
    {
      title: "Bàn ăn cổ điển",
      path: "/nha-dat-ban/nha-dat-ban-tai-hai-phong"
    },
    {
      title: "Bàn ăn hiện đại",
      path: "/nha-dat-ban/nha-dat-ban-tai-ha-noi"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow onClick={[]} />,
    prevArrow: <PrevArrow onClick={[]} />,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let tileData = [
    { img: a1 },
    { img: a2 },
    { img: a3 },
    { img: a4 },
    { img: a5 },
    { img: a6 },
    { img: a7 },
    { img: a8 },
    { img: a9 },
    { img: a1 },
    { img: a2 },
    { img: a3 },
    { img: a4 },
    { img: a5 },
    { img: a6 },
    { img: a7 },
    { img: a8 },
    { img: a9 }
  ]

  return (
    <div className="partner" style={{ height: 200 }} >
      <Typography style={{ fontSize: 20, padding: 10, fontWeight: 700, color: '#1976d2' }}>
        Khách hàng - đối tác
      </Typography>
      <Slider {...settings}>
        {
          tileData.map((item, index) => {
            return (
              <div
                key={index}
                className="partner__item"
                style={{ height: 200 }}
              >
                <img src={item.img} style={{ height: '100%', width: '100%' }} />
              </div>
            );
          })
        }
      </Slider>
    </div >
  );
}

export default KeywordSlide;
