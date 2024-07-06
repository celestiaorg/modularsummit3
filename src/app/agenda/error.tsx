'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">Oops! Something went wrong</h1>
      <p className="mb-4 text-xl">We couldn&apos;t find the agenda page you&apos;re looking for.</p>
      <div className="space-x-4">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" onClick={() => reset()}>
          Try again
        </button>
        <Link href="/agenda/day1/stage1" className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          Go to Main Agenda
        </Link>
      </div>
    </div>
  )
}
