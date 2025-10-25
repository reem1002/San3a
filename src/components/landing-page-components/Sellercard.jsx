import React from 'react';
import './sellercard.css';

export default function SellerCard({ image, name, description, color, rating }) {
    return (
        <div className={`seller-card-container ${color}`}>
            <img
                src={image}
                alt={name}
                className="seller-image"
            />
            <div className="rating-box">
                <span>{rating}</span>
                <span>
                    <img src="/imgs/star.png" alt="star" className="w-4 h-4" />
                </span>
            </div>
            <div className="seller-info">
                <h3 className="seller-name">{name}</h3>
                <p className="seller-description">
                    {description.length >= 25 ? `${description.slice(0, 25)}...` : description}
                </p>
                <hr className="seller-separator" />
                <div className={`seller-icons ${color}`}>
                    {
                        color === "pink" ? (
                            <>
                                <img src="/imgs/palette.png" alt="icon" />
                                <img src="/imgs/light.png" alt="icon" />
                                <img src="/imgs/bag.png" alt="icon" />
                                <img src="/imgs/gift.png" alt="icon" />
                            </>
                        ) : (
                            <>
                                <img src="/imgs/key.png" alt="icon" />
                                <img src="/imgs/sewing.png" alt="icon" />
                                <img src="/imgs/ruler.png" alt="icon" />
                                <img src="/imgs/wrench.png" alt="icon" />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
