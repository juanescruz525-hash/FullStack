import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products = [], onAdd }){
	return (
		<div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
			{products.map(p => (
				<ProductCard key={p.id} {...p} onAdd={onAdd} />
			))}
		</div>
	);
}
