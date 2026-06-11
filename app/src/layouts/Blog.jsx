import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BlogItem from '../components/BlogItem'
import Blog1 from '../assets/blog3.png'
import Blog2 from '../assets/blog2.png'
import Blog3 from '../assets/blog1.png'
import Blog4 from '../assets/blog3.png'

const Blog = () => {
  return (
   <section>
    <Container>
      <h1 className="text-xl mt-10 w-full font-mont font-semibold">
              From The Blog
            </h1>
        <Flex className='md:flex-row flex-col w-full'>
            <BlogItem blogitem={'/blogpage3'} ShpBrnd={Blog1} title='sustainable living through cutting-edge prefabricated homes' subtitle='Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...'/>
            <BlogItem blogitem={'/blogpage2'} ShpBrnd={Blog2} title='sustainable living through cutting-edge prefabricated homes' subtitle='Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...'/>
            <BlogItem blogitem={'/blogpage1'} ShpBrnd={Blog3} title='sustainable living through cutting-edge prefabricated homes' subtitle='Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...'/>
            <BlogItem blogitem={'/blogpage3'} ShpBrnd={Blog4} title='sustainable living through cutting-edge prefabricated homes' subtitle='Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g...'/>
        </Flex>
    </Container>
   </section>
  )
}

export default Blog