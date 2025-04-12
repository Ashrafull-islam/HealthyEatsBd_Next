import React from 'react'

export default async function page({params}) {
  const {commentId}=await params;
  return (
    <div>
      <h2>The comment id is : {commentId}</h2>
    </div>
  )
}
