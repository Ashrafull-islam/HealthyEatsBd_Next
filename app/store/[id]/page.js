import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({params}) {
  console.log(await params);
  const {id}=await params;
  if(!/^\d+$/.test(id)){
     notFound();
  }
  return (
    <div>
      <h2>The id is: {id}</h2>
    </div>
  )
}
