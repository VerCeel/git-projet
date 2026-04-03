import React from 'react'
import BranchList from '@/components/BranchList';

export const metadata = {
  title: 'Branches',
};

const page = () => {
  return (
    <div className='md:px-4 px-2'>
      <h1 className="text-3xl font-bold mb-4">Branches</h1>
      <BranchList />
    </div>
  )
}

export default page