import React from 'react'
import Search from '../components/Search'
import IntroPost from '../components/IntroPost'
import Blogs from '../components/Blogs'
import GlobalData from '../assets/blogpost_data.json'


function Home() {
  const PostsData = GlobalData.blogposts;

  // console.log(GlobalData.blogposts.length);
  // console.log(PostsData);

  return (
    <div>
      {/* Search */}
      <Search />
      {/* IntroPost */}
      {/* <IntroPost /> */}
      {PostsData.length>0 ? <IntroPost PostData={PostsData[0]} /> :null}
      {/* Blogs */}
      {/* <Blogs />   */}
      {PostsData.length>0 ? <Blogs PostData={PostsData} /> :null}
    </div>
  )
}

export default Home