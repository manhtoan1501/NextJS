const mainURL = "https://nhadatmoi.net";
const upgradePlanURL = "https://nhadatmoi.net";

const upgradeIconURL = "https://react-material-dashboard.devias.io/images/undraw_resume_folder_2_arse.svg";
const logoURL = "https://static.nhadatmoi.net/default/nhadatmoi.svg";

const apiBaseURL = "https://graph.nhadatmoi.net";
const googleLogin = `${apiBaseURL}/auth/google`;
const facebookLogin = `${apiBaseURL}/auth/facebook`;
const zaloLogin = `${apiBaseURL}/auth/zalo`;
const apiGraphQLURL = `${apiBaseURL}/graphql`;

const urlImageAdSellLease = "https://static.nhadatmoi.net/data/ad_sell_lease_image/";
const urlImageProject = "https://static.nhadatmoi.net/data/project_image/";
const urlImageBroker = "https://static.nhadatmoi.net/data/broker_image/";

const imageDefaultProject = "https://static.nhadatmoi.net/default/home_default.jpg";
const imageDefaultSlider = "https://static.nhadatmoi.net/default/nhadatmoi-default.svg";
const imageDefaultBroker = "https://static.nhadatmoi.net/default/user.png";
const googleAnalyticsCode = 'UA-60767998-8';
const googleSearchConsole = 'cyMkTndHdE95cFgv7H5_otuDy-X6N7qdXEuNOPiJ0GQ';
const localStorageCompareKey = 'ndm_compare';
const localStorageViewed = 'ndm_asl_viewed';
const localStorageProjectViewed = 'ndm_project_viewed';

const adSellLeaseCategory = [
  {
    id: '5e11b046521813a78cde85b9',
    slug: '/cho-thue-cac-loai-bat-dong-san-khac',
    name: 'Cho thuê các loại bất động sản khác',
    parent_slug: '',
    type1_slug: '/nha-dat-thue'
  }
];

const color = {
  baseColor: '#1976d2',
  baseBackgroundColor: '#D9EDFE',
  baseLightColor: '#a3d2fa',
  baseLightBackgroundColor: '#f5fcff',
  baseBoldColor: '#045EA8',
  baseTitleColor: '#444',
  baseTitleLightColor: '#aaa',
};

const titles = [
  {
    title: 'Giường ngủ',
    elements: [
      { element: 'Giường ngủ tự nhiên', image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg' },
      { element: 'Giường ngủ công nghiệp', image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg' },
      { element: 'Giường ngủ hiện đại', image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg' },
      { element: 'Giường ngủ cổ điển', image: 'https://mundecor.vn/uploads/sanpham/giuongngugotunhien/giuong-ngu-go-tu-nhien-dep-GN034.jpeg' },
    ]
  },
  {
    title: 'Bàn ăn',
    elements: [
      { element: 'Bàn ăn tự nhiên', image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg' },
      { element: 'Bàn ăn ép cao cấp', image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg' },
      { element: 'Bàn ăn nhà hàng', image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://dogonoithatviet.com/upload/sanpham/large/bo-ban-an-go-tu-nhien-cam-xe-mat-go-co-dien-1m8-8-ghe.jpg' },
    ]
  },
  {
    title: 'Bàn phòng khách',
    elements: [
      { element: 'Bàn ăn tự nhiên', image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg' },
      { element: 'Bàn ăn ép cao cấp', image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg' },
      { element: 'Bàn ăn nhà hàng', image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://noithatduongdai.vn/wp-content/uploads/2018/10/ban-ghe-phong-khach-go-oc-cho.jpg' },
    ]
  },
  {
    title: 'Kệ tivi',
    elements: [
      { element: 'Bàn ăn tự nhiên', image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg' },
      { element: 'Bàn ăn ép cao cấp', image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg' },
      { element: 'Bàn ăn nhà hàng', image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://gochuan.com/wp-content/uploads/2018/09/326841f37c759d2bc464.jpg' },
    ]
  },
  {
    title: 'Tủ quần áo',
    elements: [
      { element: 'Bàn ăn tự nhiên', image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg' },
      { element: 'Bàn ăn ép cao cấp', image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg' },
      { element: 'Bàn ăn nhà hàng', image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://dogolegia.com/wp-content/uploads/2018/03/Mau-tu-quan-ao-dep-LG-TQA030.jpg' },
    ]
  },
  {
    title: 'Bàn trang điểm',
    elements: [
      { element: 'Bàn ăn tự nhiên', image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg' },
      { element: 'Bàn ăn ép cao cấp', image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg' },
      { element: 'Bàn ăn nhà hàng', image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://noithatluongson.vn/wp-content/uploads/2019/08/ban-trang-diem-60-1.jpg' },
    ]
  },
  {
    title: 'Tủ giày',
    elements: [
      { element: 'Tủ giày tự nhiên', image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg' },
      { element: 'Tủ giày ép cao cấp', image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg' },
      { element: 'Tủ giày nhà hàng', image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg' },
      { element: 'Bàn ăn 4 ghế', image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg' },
      { element: 'Bàn ăn 6 ghế', image: 'https://file.hstatic.net/1000294146/file/3_grande.jpg' },
    ]
  },
];

const listMenu = [
  {
    title: 'Bàn ghế',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Giường ngủ',
    rooms: [
      { room: 'Bàn ghế gỗ' },
      { room: 'Tủ Giày Dép' },
      { room: 'Kệ Tivi' },
      { room: 'Kệ để giày' },
      { room: 'Tủ rượu' },
    ]
  },
  {
    title: 'Tủ quần áo',
    rooms: [
      { room: 'Tủ bếp' },
      { room: 'Bộ bàn ăn' },
      { room: 'Ghế phòng ăn' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Bàn ăn',
    rooms: [
      { room: 'Bàn Thờ' },
      { room: 'Tủ Thờ' },
      { room: 'Bàn Thờ Thần Tài' },
      { room: 'Bàn Thờ Treo Tường' },
      { room: 'Sập Thờ' },
    ]
  },
  {
    title: 'Tủ kệ tivi',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Đơn hàng đã đặt',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  },
  {
    title: 'Sản phẩm bán chạy',
    rooms: [
      { room: 'Giường ngủ' },
      { room: 'Tủ quần áo' },
      { room: 'Bàn trang điểm' },
      { room: 'Bàn ghế phòng ngủ' },
      { room: 'Tủ đầu giường' },
      { room: 'Giường tầng' },
      { room: 'Bộ phòng ngủ' },
    ]
  }
];

const products = [
  {
    image: 'https://dienmaycholon.vn/public/userupload/images/ke%20tivi%20go%20cao%20cap.png',
    title: 'Giường ngủ gỗ tự nhiên - GNCD01',
    moneyOld: 3000000,
    moneyNew: 2000000,
  },
  {
    image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
    title: 'Giường ngủ thời trang - G003',
    moneyOld: 4500000,
    moneyNew: 3500000,
  },
  {
    image: 'https://phogovip.vn/uploads/news/2017_12/giuong-ngu-go-tu-nhien-4-copy.jpg',
    title: 'Giường ngủ hiện đại - GN003',
    moneyOld: 4000000,
    moneyNew: 3500000,
  },
  {
    image: 'https://noithatihouse.com/wp-content/uploads/2019/11/O1CN01Ziuj8F1ySlsFWXvny_27360165.jpg',
    title: 'Kệ Tivi phòng khách',
    moneyOld: 6000000,
    moneyNew: 5000000,
  },
  {
    image: 'https://noithatihouse.com/wp-content/uploads/2019/11/O1CN01Ziuj8F1ySlsFWXvny_27360165.jpg',
    title: 'Bàn ăn 6 ghế - BA001',
    moneyOld: 4000000,
    moneyNew: 3000000,
  },
  {
    image: 'https://noithatthaibinh.com/wp-content/uploads/2018/10/giuong-ngu-go-go-do-9656.jpg',
    title: 'Giường ngủ thời trang - G003',
    moneyOld: 4500000,
    moneyNew: 3500000,
  },
  {
    image: 'https://www.nhadepkientruc.net/wp-content/uploads/2014/06/tu-quan-ao-go-dep-01.jpg',
    title: 'Tủ quần áo đẹp- TQA099',
    moneyOld: 4000000,
    moneyNew: 3500000,
  },
  {
    image: 'https://dienmaycholon.vn/public/userupload/images/ke%20tivi%20go%20cao%20cap.png',
    title: 'Kệ Tivi phòng khách',
    moneyOld: 6000000,
    moneyNew: 5000000,
  },
];

export {
  mainURL,
  upgradePlanURL,
  upgradeIconURL,
  logoURL,
  apiBaseURL,
  apiGraphQLURL,
  googleLogin,
  zaloLogin,
  facebookLogin,
  urlImageAdSellLease,
  urlImageBroker,
  urlImageProject,
  imageDefaultBroker,
  imageDefaultProject,
  imageDefaultSlider,
  googleAnalyticsCode,
  googleSearchConsole,
  localStorageCompareKey,
  localStorageViewed,
  localStorageProjectViewed,
  adSellLeaseCategory,
  color,
  titles,
  listMenu,
  products,
};
