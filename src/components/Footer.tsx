import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <Link href="/" className="logo-text" style={{ color: 'white' }}>AURA <span className="highlight">LUXE</span></Link>
                        <p>
                            Defining the future of luxury lifestyle. We source the finest materials and partner with world-class artisans to bring you exceptional products.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Shop</h4>
                        <ul>
                            <li><Link href="#">All Products</Link></li>
                            <li><Link href="#">Featured</Link></li>
                            <li><Link href="#">New Arrivals</Link></li>
                            <li><Link href="#">Collections</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Company</h4>
                        <ul>
                            <li><Link href="#">Our Story</Link></li>
                            <li><Link href="#">Sustainability</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Press</Link></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4 className="footer-title">Newsletter</h4>
                        <p style={{ color: '#777', fontSize: '0.85rem' }}>Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <div className="newsletter-input-group">
                            <input type="email" placeholder="Your email address" className="newsletter-input" />
                            <button className="newsletter-btn btn">Join</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Aura Luxe. All rights reserved.</p>
                    <div className="footer-socials" style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link href="#">Instagram</Link>
                        <Link href="#">Twitter</Link>
                        <Link href="#">Facebook</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
