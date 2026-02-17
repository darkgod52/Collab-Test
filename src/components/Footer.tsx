import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div className="footer-grid" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', gap: '2rem' }}>
                    <div className="footer-about">
                        <Link href="/" className="logo-text" style={{ fontSize: '1rem', letterSpacing: '4px' }}>AURA <span className="highlight" style={{ fontWeight: 700 }}>LUXE</span></Link>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1.5rem', maxWidth: '300px' }}>
                            Defining the future of luxury lifestyle. Exceptional products, sustainably sourced.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title" style={{ fontSize: '0.7rem', color: 'var(--text-main)', fontWeight: 600 }}>Shop</h4>
                        <ul style={{ marginTop: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="#" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>All Products</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="#" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Collections</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title" style={{ fontSize: '0.7rem', color: 'var(--text-main)', fontWeight: 600 }}>Legal</h4>
                        <ul style={{ marginTop: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="#" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Privacy</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link href="#" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Terms</Link></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4 className="footer-title" style={{ fontSize: '0.7rem', color: 'var(--text-main)', fontWeight: 600 }}>Journal</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1.5rem' }}>Sign up for our weekly aesthetic.</p>
                        <div className="newsletter-input-group" style={{ marginTop: '1rem' }}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="newsletter-input"
                                style={{ fontSize: '0.8rem' }}
                            />
                            <button className="newsletter-btn btn" style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>Join</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: 'none', color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                    <p>&copy; 2026 Aura Luxe.</p>
                    <div className="footer-socials" style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link href="#">Instagram</Link>
                        <Link href="#">Twitter</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
