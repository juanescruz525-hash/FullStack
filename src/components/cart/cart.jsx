import React from 'react';

export default function Cart({ open = false, items = [], onClose, onRemove }){
  const total = items.reduce((s,i)=>s + i.price * i.qty, 0);

  return (
    <aside style={{border:'1px solid #e5e7eb', padding:12, borderRadius:8, background:'#fff', display:'flex', flexDirection:'column', height: '100%'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h3 style={{margin:0}}>Carrito</h3>
        <div>
          <button onClick={onClose} style={{padding:6, borderRadius:6}}>Cerrar</button>
        </div>
      </div>

      <div style={{marginTop:12, flex:1, overflow:'auto'}}>
        {items.length === 0 && <p>El carrito está vacío.</p>}
        {items.map(i => (
          <div key={i.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 0', borderBottom:'1px solid #f3f4f6'}}>
            <div>
              <div style={{fontWeight:600}}>{i.name}</div>
              <div style={{color:'#6b7280', fontSize:13}}>{i.qty} x ${i.price.toFixed(2)}</div>
            </div>
            <div>
              <button onClick={() => onRemove && onRemove(i.id)} style={{background:'#ef4444', color:'#fff', border:'none', padding:'6px 8px', borderRadius:6}}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:12}}>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:8}}>
          <strong>Total</strong>
          <strong>${total.toFixed(2)}</strong>
        </div>
        <button style={{width:'100%', padding:10, background:'#111827', color:'#fff', border:'none', borderRadius:8}}>Pagar</button>
      </div>
    </aside>
  );
}
