import React from 'react'
import { useRouter } from 'next/router'
// import { userAgent } from 'next/server'

export default function ProtfolioItem() {
    const router  = useRouter();
  return (
    <div>
      {`${router.pathname} ${router.query.projectId}`}
    </div>
  )
}
