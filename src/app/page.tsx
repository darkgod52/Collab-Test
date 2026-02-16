import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section className="collections" id="collections" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <span className="section-subtitle">Exclusives</span>
          <h2 className="section-title">The Winter Edit</h2>
          <div style={{ position: 'relative', height: '500px', marginTop: '3rem' }}>
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
              alt="Collection banner"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '10%',
              transform: 'translateY(-50%)',
              color: 'white',
              maxWidth: '400px'
            }}>
              <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'Playfair Display' }}>Timeless Fashion</h3>
              <p style={{ marginBottom: '2rem' }}>Discover pieces that transcend seasons. Handcrafted with the finest Italian silks and wools.</p>
              <a href="#shop" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'black' }}>Explore Collection</a>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />

      {/* Why Choose Us Section */}
      <section style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', textAlign: 'center' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600' }}>Free Shipping</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Complimentary standard shipping on all orders over $200.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600' }}>Sustainable Luxury</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We are committed to ethical sourcing and sustainable production.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '600' }}>Expert Support</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Our lifestyle consultants are here to assist you 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
