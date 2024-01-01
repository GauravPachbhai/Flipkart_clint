// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { styled } from "@mui/material";
// import { bannerData } from "../../constants/data";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1

//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1

//   }
// };

// const CustomCarousel = styled("div")({
//   "& .react-multi-carousel-item img.css-yo1co2": {
//     width: "100%",
//     height: "280px",
//     objectFit: "cover"
//   },
//   "& .react-multi-carousel-item": {
//     display: "flex",
//     justifyContent: "center"
//   }
// });

// const Banner = () => {
//   return (
//     <div>
//       <CustomCarousel>
//         <Carousel
//           responsive={responsive}
//           swipeable={false}
//           draggable={false}
//           autoPlay={true}
//           autoPlaySpeed={4000}
//           dotListClass="custom-dot-list-style"
//           itemClass="carousel-item-padding-40-px"
//           containerClass="carousel-container"
//           infinite={true}
//           centerMode={true} 
// dotListClass = "custom-dot-list-style"
// itemClass = "carousel-item-padding-40-px"
// containerClass = "carousel-container"

//         >
//           {bannerData.map((data, index) => (
//             <img
//               key={index}
//               src={data.url}
//               alt={`banner-${index}`}
//               className="css-yo1co2"
//             />
//           ))}
//         </Carousel>
//       </CustomCarousel>
//     </div>
//   );
// };
// export default Banner;


import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bannerData } from '../../constants/data'; // Assuming bannerData contains the image URLs
import { Box } from '@mui/material';

const Banner = () => {
  const carouselItemStyle = {
    maxHeight: '290px',
    width: '100%',
    objectFit: 'cover',

    marginTop: 2
  };

  const crouselSty = {
    background:'#F2F2F2',  }

  return (
    <Box style={crouselSty}>
      <Carousel interval={4000} pause={false} >
        {bannerData.map((data, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={data.url}
              alt={`banner-${index}`}
              style={carouselItemStyle}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>

  );
};

export default Banner;


