import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

import products from "../../datas/logement.json";

import Rating from "../../components/Rating";
import Host from "../../components/Host";
import Slider from "../../components/Slider";
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";
import Error from '../../layout/Error'

const Logement = () => {

    const loc = useLocation()
    const params = new URLSearchParams(loc.search)
    const productId = params.get("id")   
    
    const product = products.find((product) => product.id === productId);
    
    if (product === undefined) {
        return (
            <Error />
        );
    }

    const { title, location, rating, host, equipments, description, pictures } = product;

    Logement.propTypes = {
        title: PropTypes.string.isRequired,
        location: PropTypes.node.isRequired,
        rating: PropTypes.number.isRequired,
        host: PropTypes.string.isRequired,
        equipments: PropTypes.array.isRequired,
        description: PropTypes.string.isRequired,
        pictures: PropTypes.node.isRequired
    }
    
    return (
        <main className="product">
            <Slider slides={pictures} />
            <div className="product__content">
                <div className="product__content__left">
                    <h1 className="product__content__left__title">{title}</h1>
                    <p className="product__content__left__location">{location}</p>
                    <ul className="product__content__left__tags">

                        {product.tags.map((tag, index) => (
                        <Tags key={index} getTag={tag} />
                        ))}
                    </ul>
                </div>
                <div className="product__content__right">
                    <Host host={host} />
                    <Rating rating={rating} />
                </div>
            </div>
            <div className="product__informations">
                <Collapse categorie="product" title="Description" content={description} />
                <Collapse categorie="product" title="Équipements" content={equipments} />
            </div>
        </main>
    );
}

export default Logement;