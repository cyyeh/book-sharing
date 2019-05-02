import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ErrorPage = center => (
  <Layout>
    <Helmet title={'404'} />
    <Header title="404" />
    <Container center={center}>
      <h1>哦，看來發生了點問題！</h1>
      <h3>這頁內容不存在</h3>
      <h3>
        您可以<Link to="/">點擊此處回到首頁</Link>
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

Container.propTypes = {
  center: PropTypes.object,
};
