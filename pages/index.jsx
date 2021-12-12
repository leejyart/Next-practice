import axios, { AxiosResponse } from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import Itemlist from '../src/component/Itemlist';
import styles from '../styles/Home.module.css';

const Home = ({ list }) => {
  return (
    <div>
      <Head>
        <title>HOME | next app</title>
      </Head>
      <>
        <Header as='h3' style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <Itemlist list={list.slice(0, 9)} />
        <Header as='h3' style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <Itemlist list={list.slice(9)} />
      </>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      list: data,
    },
  };
}
