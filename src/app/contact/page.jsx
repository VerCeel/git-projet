import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Link href="https://github.com/VerCeel/git-projet">
        <Button className="bg-white text-black hover:bg-gray-200" variant="outline">Contact Us</Button>
      </Link>
    </div>
  )
}

export default page