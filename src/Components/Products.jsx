import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../features/counter/whishListSlice';
import { FaHeart } from "react-icons/fa";

export default function Products() {

    const productList = [

        {
            id: 1,
            producImg: 'https://printer.kalimstores.com/wp-content/uploads/20pum_mgl_black_04_2.jpg.jpg',
            productTitle: 'Product 1',
            productDesc: 'Some quick example text to build on the card title and make up the bulk of the card’s content',
        },
        {
            id: 2,
            producImg: 'https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296',
            productTitle: 'Product 2',
            productDesc: 'Some quick example text to build on the card title and make up the bulk of the card’s content',
        },
        {
            id: 3,
            producImg: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MA7E4_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723930328706',
            productTitle: 'Product 3',
            productDesc: 'Some quick example text to build on the card title and make up the bulk of the card’s content',
        },
    ];

    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist.items);

    function handleAddWishList(product) {
        dispatch(toggleWishlist(product));
    }


    return (

        <div className="productListRow">
            {productList.map((product) => (
                <Card key={product.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.producImg} />
                    <Card.Body>
                        <Card.Title>{product.productTitle}</Card.Title>
                        <Card.Text>{product.productDesc}</Card.Text>
                        <div className="d-flex gap-2 align-items-center">
                            <Button variant="danger">Go somewhere</Button>
                            <FaHeart
                                id='whishList'
                                onClick={() => handleAddWishList(product)}
                                style={{ color: wishlist.some(item => item.id === product.id) ? 'red' : 'black' }}
                            />
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
