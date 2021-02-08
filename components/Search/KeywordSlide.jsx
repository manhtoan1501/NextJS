import React, { FunctionComponent } from "react";
import Slider from "react-slick";

import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import Link from 'next/link';
import { keys } from "@material-ui/core/styles/createBreakpoints";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ThemeContext from '../ThemeContext';

const useStyles = makeStyles((theme) => ({
}));

const KeywordSlide = (props) => {
  const classes = useStyles();

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={'keyword-search__next__arrow'}
        onClick={onClick}>
        <NavigateNext />
      </div>
    );
  }


  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={'keyword-search__prev__arrow'}
        onClick={onClick}>
        <NavigateBefore />
      </div>
    );
  }

  const dataSearch = [
    {
      backgroundColor: '#9c27b0',
      title: "Giường ngủ hiện đại",
      path: "/du-an/vinhomes-central-park-pid-35872",
    },
    {
      backgroundColor: '#007bb2',
      title: "Tủ quần áo thời trang",
      path: "/du-an/vinhomes-grand-park-quan-9-pid-37584",
    },
    {
      backgroundColor: '#618833',
      title: "Bàn trà phòng khách hiện đại",
      path: "/du-an/vinhomes-smart-city-pid-37191",
    },
    {
      backgroundColor: '#ef6c00',
      title: "Bàn trà phòng khách cổ điển",
      path: "/du-an/vinhomes-ocean-park-gia-lam-pid-37597",
    },
    {
      backgroundColor: '#827717',
      title: "Tủ bếp tiện nghi",
      path: "/du-an/vung-tau-pearl-pid-48674",
    },
    {
      backgroundColor: '#357a38',
      title: "Nội thất sang trọng",
      path: "/du-an/grandeur-palace-pid-50234"
    },
    {
      backgroundColor: '#0091ea',
      title: "Giường ngủ cổ điển",
      path: "/du-an/diamond-island-pid-335"
    },
    {
      backgroundColor: '#1565c0',
      title: "Nội thất sang trọng",
      path: "/du-an/the-sun-avenue-pid-15"
    },
    {
      backgroundColor: '#006064',
      title: "Bàn ăn cổ điển",
      path: "/nha-dat-ban/nha-dat-ban-tai-hai-phong"
    },
    {
      backgroundColor: '#ec407a',
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

  return (
    <ThemeContext.Consumer>
      {context => {
        const { color } = context;
        const { baseColor } = color;
        console.log('color', color);
        return (
          <div className="keyword-search">
            <Typography style={{ fontSize: 20, padding: 10, fontWeight: 700, color: baseColor }}>Từ khóa tìm kiếm HOT</Typography>
            <Slider {...settings}>
              {
                dataSearch.map((searchObject, index) => {
                  const { backgroundColor, path, title } = searchObject;
                  return (
                    <div key={index}>
                      <Link href={path} as={path}>
                        <a>
                          <div
                            style={{
                              backgroundColor: backgroundColor,
                              color: 'white',
                              alignItems: 'center',
                              display: 'flex',
                              fontSize: 16,
                              fontWeight: 400,
                            }}
                            className="keyword-search__item"
                          >{title}
                          </div>
                        </a>
                      </Link>
                    </div>
                  );
                })
              }
            </Slider>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

KeywordSlide.contextType = ThemeContext;

export default KeywordSlide
