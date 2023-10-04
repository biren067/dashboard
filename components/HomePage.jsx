import React from 'react'
import Movies from '@/scene/movies/Movies'
import Link from 'next/link'
function HomePage() {
  return (
    <><div className='app'>HomePage0</div>
      <Movies/>
      <Link href="/testing">Original</Link>
    </>
    
  )
}

export default HomePage