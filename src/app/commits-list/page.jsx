import CommitList from '@/components/CommitList';
import React from 'react'

export const metadata = {
  title: 'Commits',
};

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Commits</h1>
      <CommitList />
    </div>
  )
}

export default page