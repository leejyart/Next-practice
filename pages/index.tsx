import * as axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import Itemlist from '../src/component/Itemlist';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    axios.get(API_URL).then((res: any) => {
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>HOME | next app</title>
      </Head>
      {isLoading ? (
        <div style={{ padding: '300px 0' }}>
          <Loader inline-='centered' active>
            Loading
          </Loader>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Home;
