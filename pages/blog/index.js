import React from 'react';
import Blog from '../../components/blog/blog';
import {API_URL} from '../../config/urls';
import qs from 'qs';

export default function BlogPage(props) {
  const blogs = props.blogs;

  return <Blog blogs={blogs} />;
}

export async function getStaticProps() {
  const queryBlog = qs.stringify(
    {
      sort: ['createdAt:asc'],
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  );

  const resBlog = await fetch(`${API_URL}/api/blogs?${queryBlog}`);

  const blogs = await resBlog.json();

  return {
    props: {
      blogs,
    },
    revalidate: 30,
  };
}
