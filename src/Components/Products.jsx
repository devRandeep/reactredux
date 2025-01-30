import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { wishlistcount } from '../features/counter/whishListSlice';

export default function Products() {

    const productList = [

        {
            producImg: 'https://printer.kalimstores.com/wp-content/uploads/20pum_mgl_black_04_2.jpg.jpg',
            productTitle: 'Card Title',
            productDesc: 'Some quick example text to build on the card title and make up the bulk of the cards content',
        },
        {
            producImg: 'https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296',
            productTitle: 'Card Title',
            productDesc: 'Some quick example text to build on the card title and make up the bulk of the cards content',
        },

    ]

  const dispatch = useDispatch();


    function handleAddWishList() {
        dispatch(wishlistcount());
    }

    return (
        <>
            <div className="productListRow">
                {productList.map((key, pro) =>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={key.producImg} />
                        <Card.Body>
                            <Card.Title>{key.productTitle}</Card.Title>
                            <Card.Text>
                                {key.productDesc}
                            </Card.Text>
                            <div className="d-flex gap-2 align-items-center">
                                <Button variant="danger">Go somewhere</Button>
                                <CiHeart id='whishList' onClick={handleAddWishList} />
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </div>

        </>
    )
}
