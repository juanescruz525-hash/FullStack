import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ logo = 'Logo', links = [], cartCount = 0, onCartToggle }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (onCartToggle) onCartToggle();
    navigate('/cart');
  };
  return (
    <nav style={{display:'flex', justifyContent:'space-between', padding:12}}>
      <div style={{display:'flex', alignItems:'center', gap:20}}>
        <h1 style={{margin:0}}>{logo}</h1>
        <ul style={{display:'flex', gap:12, listStyle:'none', margin:0, padding:0}}>
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.to}
                onClick={(e) => { e.preventDefault(); navigate(link.to); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handleCartClick} style={{position:'relative', padding:8, borderRadius:6, border:'1px solid #e5e7eb', background:'#fff', cursor:'pointer'}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="10" cy="20" r="1" fill="#111827" />
            <circle cx="18" cy="20" r="1" fill="#111827" />
          </svg>
          {cartCount > 0 && (
            <span style={{position:'absolute', top:-6, right:-6, background:'#ef4444', color:'#fff', borderRadius:999, padding:'2px 6px', fontSize:12}}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;