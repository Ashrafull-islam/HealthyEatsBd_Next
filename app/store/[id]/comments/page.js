import React from 'react'

export default async function page({params}) {
  const {id} = await params;
  console.log(id);
  return (
    <div>
      <h2>comments are here {id} </h2>
    </div>
  )
}
