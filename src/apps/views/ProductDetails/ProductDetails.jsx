import React, { useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import "antd/dist/reset.css";
import { 
    Button,
    Rate,
} from 'antd';
import 'react-slick';
import Slider from "react-slick";
import { getPendingSelector, getProductDetailsSelector } from "../../../redux/reducers/productDetails/selectors";
import { fetchProductDetailsRequest } from "../../../redux/reducers/productDetails/actions";
import { getProductSelector } from "../../../redux/reducers/home/selectors";
import { constantsText } from "../../constant/constant";
import { fetchProductRequest } from "../../../redux/reducers/home/actions";
import CommonSkeleton from "../../components/Skeleton/skeleton";


const {
  ROUTES: {
    PriceTag,
    Details,
    CheckOut,
  }
} = constantsText;

const ProductDetails = ()=> {
    const Product = useLocation();
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const searchParams = new URLSearchParams(Product.search);
    const currentId = searchParams.get('id');
    const catSearch = searchParams.get('cat');
    const navigate = useNavigate();
    const dataStatus = useSelector(getPendingSelector);
    const SingleProduct = useSelector(getProductDetailsSelector);
    const AllProducts = useSelector(getProductSelector);

    useEffect(() => {
        const queryString = catSearch ? `category/${catSearch}` : "";
        dispatch(fetchProductRequest(queryString));
        dispatch(fetchProductDetailsRequest(currentId));
    }, [currentId,catSearch,dispatch]);

    const elem = SingleProduct?.details; 
    const rate = elem?.rating?.rate;
    const title = elem?.title;
    const price = elem?.price;    
    const description = elem?.description;
    const image = elem?.image;
    const count = elem?.rating?.count;
    const category = elem?.category?.toUpperCase();

    const settings = {
        dots: false, 
        infinite: true,
        speed: 1700,
        slidesToShow: isMobile ? 2 : 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        cssEase: "linear",
        pauseOnHover: true,
        draggable: true,
        swipe: true,
    };
    const showProductDetailsl = (elem) => {
        navigate(`?mode=details&cat=${catSearch}&id=${elem?.id}`, {
            state: { productDetails: true }
        });
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 500);
    };
    return dataStatus ? (
        <>
            <div className="mt-4 w-full max-w-[98%] mx-auto flex pt-10">
                <div className="w-2/5 h-full">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="w-3/5 justify-center ml-16">
                    <h2 className="font-extrabold text-2xl text-gray-400 mb-4">{category}</h2>
                    <h2 className="font-light text-2xl text-black">{title}</h2>
                    <p className="mt-2 font-medium text-lg leading-none tracking-tight text-textHcolor">
                        {PriceTag}
                    </p>
                    <p className="font-bold text-[40px]">₹{price}</p>
                    <div className="mt-2 flex gap-2">
                        <Rate allowHalf value={rate} style={{ fontSize: "16px" }} />
                        <span className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                            {rate}
                        </span>
                    </div>
                    <p className="mt-2 font-medium text-lg text-textHcolor">{count} Reviews</p>
                    <h2 className="font-normal text-2xl text-black">{Details}</h2>
                    <p className="mt-2">{description}</p>
                    <Button color="purple" variant="solid" className="mt-4">
                        {CheckOut}
                    </Button>
                </div>
            </div>
    
            <div className="border border-borderClr p-4 mt-14 mb-10 w-full max-w-[98%] mx-auto">
                <h2 className="font-extrabold text-2xl">Suggested Products</h2>
                <Slider {...settings}>
                    {AllProducts?.map((elem) => (
                        <div
                            key={elem?.id}
                            className="mt-6 ml-10 flex flex-col justify-center items-center text-center cursor-pointer"
                            onClick={() => showProductDetailsl(elem)}
                        >
                            <img
                                src={elem?.image}
                                alt={elem?.title}
                                className="w-[150px] h-[150px] object-contain bg-white"
                            />
                            <p className="mt-3 text-[16px] font-medium text-gray-500 float-left">
                                {elem?.title?.split(" ").slice(0, 3).join(" ")}
                                {elem?.title?.split(" ").length > 3 ? "..." : ""}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    ) : (
        <div className="mt-4 w-full max-w-[98%] mx-auto pt-10">
            <div className="mt-6 mb-8 w-full"><CommonSkeleton /></div>
            <div className="mt-6 mb-8 w-full"><CommonSkeleton /></div>
            <div className="mt-6 mb-8 w-full"><CommonSkeleton /></div>
        </div>
    );
}

export  default ProductDetails;