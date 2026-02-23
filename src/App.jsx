import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/section/Hero';
import ProfileCard from './components/product/ProfileCard';
import ProductList from './components/product/ProductList';
import Cart from './components/cart/cart';
import './App.css';

function App() {
  // Estado centralizado de la aplicación
  const [profile, setProfile] = useState({
    name: 'Sophie Bennett',
    description: 'A Product Designer focused on intuitive user experiences.',
    imageUrl: '/profile.jpg',
    followers: 99999,
    likes: 12345,
    isVerified: true,
  });

  const [hero, setHero] = useState({
    title: 'Bienvenidos',
    buttonText: 'Iniciar'
  });

  const [navbar, setNavbar] = useState({
    logo: 'Logo',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/services', label: 'Services' },
      { to: '/contact', label: 'Contact' },
    ]
  });

  // Productos de ejemplo
  const [products] = useState([
    { id: 'p1', name: 'Product A', price: 19.99 },
    { id: 'p2', name: 'Product B', price: 29.99 },
    { id: 'p3', name: 'Product C', price: 9.99 },
  ]);

  // Estado del carrito
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleToggleCart = () => setCartOpen(v => !v);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(i => i.id !== productId));
  };

  // Handler centralizado para la acción del botón Hero
  const handleStart = () => {
    // ejemplo: incrementar likes al iniciar
    setProfile(prev => ({ ...prev, likes: prev.likes + 1 }));
  };

  // Handler para el botón Follow de ProfileCard
  const handleFollow = () => {
    setProfile(prev => ({ ...prev, followers: prev.followers + 1 }));
  };

  const cartCount = cartItems.reduce((s,i)=>s+i.qty,0);

  const MainContent = () => (
    <div>
      <Hero title={hero.title} buttonText={hero.buttonText} onStart={handleStart} />
      <div style={{display:'grid', gridTemplateColumns:'1fr 380px', gap:20, padding:12}}>
        <div>
          <ProfileCard 
            name={profile.name}
            description={profile.description}
            imageUrl={profile.imageUrl}
            followers={profile.followers}
            likes={profile.likes}
            isVerified={profile.isVerified}
            onFollow={handleFollow}
          />

          <h2 style={{marginTop:20}}>Productos</h2>
          <ProductList products={products} onAdd={handleAddToCart} />
        </div>

        <Cart 
          open={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemoveFromCart}
        />
      </div>
    </div>
  );

  const CartPage = ({}) => {
    const navigate = useNavigate();

    return (
      <div style={{padding:12}}>
        <h2>Tu Carrito</h2>
        <Cart items={cartItems} onRemove={handleRemoveFromCart} onClose={() => navigate(-1)} open={true} />
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
        <Navbar logo={navbar.logo} links={navbar.links} cartCount={cartCount} onCartToggle={handleToggleCart} />
        <Routes>
          <Route path="/" element={<MainContent/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/about" element={<div style={{padding:12}}><h2>About</h2><p>Sobre nosotros.</p></div>} />
          <Route path="/services" element={<div style={{padding:12}}><h2>Services</h2><p>Servicios ofrecidos.</p></div>} />
          <Route path="/contact" element={<div style={{padding:12}}><h2>Contact</h2><p>Contacto.</p></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;