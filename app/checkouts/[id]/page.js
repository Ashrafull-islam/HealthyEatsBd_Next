import React from 'react';
// import Checkout from '../../../components/Checkout';

export default async function Page({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/data.json`);
  const data = await res.json();
  const product = data.find(item => item.id == id);

  // return <Checkout Products={product} />;
}
