import React from 'react'
import BlogList from '@/components/Blog/BlogList'
import HeroSub from '@/components/SharedComponent/HeroSub'
import { Metadata } from 'next'
import Trans from '@/components/i18n/Trans'
export const metadata: Metadata = {
  title: 'Blog | mehmetk',
}

const BlogPage = () => {
  return (
    <>
      <HeroSub
        title={<Trans tr='Blog' en='Blog' />}
        description={
          <Trans
            tr='En güncel trendleri daha iyi anlaman için özenle hazırlanmış içerikleri keşfet.'
            en='Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends.'
          />
        }
      />
      <BlogList />
    </>
  )
}

export default BlogPage
