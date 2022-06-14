import React from 'react'
import loadable from '@loadable/component';
const Search = () => {
    const CropList = loadable(() => import('./CropList'));
  return (
    <>
 <CropList fallback={<p>Loading...</p>}/>
    </>
  )
}

export default Search