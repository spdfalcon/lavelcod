import React from 'react'
import Layout from '../../Layout/Layout'

export default function Index() {
  return (
    <Layout>
      <div className='col-span-12 text-6xl'>
        <div className='bg-main-yellow font-first-font'>main-yellow   -    first-font</div>
        <div className=' text-main-text font-second-font'>main-text -    second-font</div>
        <div className=' bg-main-menu'>main-menu</div>
      </div>
    </Layout>
  )
}
