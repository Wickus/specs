import ActionBar from '@/components/actionbar'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 bg-gray-800 w-full h-full'>
      <ActionBar/>
    </div>
  )
}

export default Home
