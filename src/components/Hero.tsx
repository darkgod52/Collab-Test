import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <span className="section-subtitle">2026 Collection</span>
                    <h1 className="hero-title">Experience <br />Pure <span className="highlight">Elegance</span></h1>
                    <p className="hero-description">
                        Discover our curated collection of premium essentials designed for the modern lifestyle. Quality meets timeless design in every piece.
                    </p>
                    <div className="hero-btns">
                        <a href="#shop" className="btn btn-primary">Shop Now</a>
                        <a href="#collections" className="btn btn-outline" style={{ marginLeft: '1rem' }}>View Lookbook</a>
                    </div>
                </div>
            </div>
            <div className="hero-image-container">
                <div className="hero-image-overlay"></div>
                <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop"
                    alt="Luxury product"
                    className="product-image"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </section>
    );
}
