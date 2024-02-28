import { useEffect, useRef, useState } from "react";
import spinner from "../assets/Ball-1s-200px.svg";
import { Product } from "./Product";
const productPerPage = 9;
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(
                `https://dummyjson.com/products?limit=${productPerPage}&skip=${
                    page * productPerPage
                }`
            );
            const data = await res.json();
            if (data.products.length === 0) {
                setHasMore(false);
            } else {
                setProducts((prevProduct) => [
                    ...prevProduct,
                    ...data.products,
                ]);
                setPage((prevPage) => prevPage + 1);
            }
        };

        const onIntersection = (items) => {
            const isInterSect = items[0].isIntersecting;
            if (isInterSect) {
                fetchProduct();
            }
        };
        const observer = new IntersectionObserver(onIntersection);

        if (observer && loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        // cleanup observer
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [page]);

    return (
        <div>
            <h1 className='text-4xl font-semibold text-teal-600'>
                Product List
            </h1>

            <div className='product-list flex justify-center items-center flex-wrap gap-5 m-auto w-[calc(100vw_-_10%)]'>
                {products && products.length ? (
                    products.map((product) => {
                        return (
                            <Product
                                key={product.is}
                                title={product.title}
                                desc={product.description}
                                thumbnail={product.thumbnail}
                            />
                        );
                    })
                ) : (
                    <h2>No Products Found</h2>
                )}
            </div>

            {hasMore ? (
                <p
                    ref={loaderRef}
                    className='loader flex justify-center items-center'>
                    <img
                        className='size-12'
                        src={spinner}
                        alt=''
                    />
                    Loading more data...
                </p>
            ) : (
                <p>You have reached the limit</p>
            )}
        </div>
    );
};

export default ProductList;

