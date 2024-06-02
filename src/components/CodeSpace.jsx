import React, { useState } from 'react'


const CodeSpace = () => {
    const {Lang, Set_lang} = useState(1);
    console.log('lang is ',Lang);
  return (
    <div>
      {Lang}
    </div>
  )
}

export default CodeSpace
