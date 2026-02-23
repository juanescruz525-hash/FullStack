import React from 'react';

export default function ProductCard({ id, name, price, onAdd }){
  return (
    <div className="product-card" style={{border:'1px solid #e5e7eb', padding:12, borderRadius:8, width:220}}>
      <div style={{height:120, background:'#f3f4f6', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center'}}> 
        <span style={{color:'#9ca3af'}}>Imagen</span>
      </div>
      <h3 style={{margin:'8px 0 4px'}}>{name}</h3>
      <p style={{margin:0, color:'#6b7280'}}>${price.toFixed(2)}</p>
      <button 
        onClick={() => onAdd && onAdd({ id, name, price })}
        style={{marginTop:10, padding:'8px 10px', background:'#111827', color:'#fff', border:'none', borderRadius:6, cursor:'pointer'}}
      >
        Comprar
      </button>
    </div>
  );
}
