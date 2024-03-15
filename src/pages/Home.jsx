import React from 'react'

import useRefreshToken from '../web/middleware/useRefreshToken';
import HeaderContainer from '../components/container/HeaderContainer';
import PostContainer from '../components/container/PostContainer';
import FeatureContainer from '../components/container/FeatureContainer';
import FooterContainer from '../components/container/FooterContainer';

const Home = () => {
  useRefreshToken();

  return (
    <>
      <HeaderContainer />
      <PostContainer />
      <FeatureContainer />
      <FooterContainer />
    </>
  )
}

export default Home