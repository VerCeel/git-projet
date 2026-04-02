import React from 'react'
import BranchList from '@/components/BranchList';

export const metadata = {
  title: 'Branches',
};

const page = () => {
  return (
    <div>
      <h1>branches pages</h1>
      <BranchList />
    </div>
  )
}

export default page