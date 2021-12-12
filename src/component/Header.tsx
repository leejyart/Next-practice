import React from 'react';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '100px 0 0' }}>
          <img
            src='/image/logo.png'
            alt='logo'
            style={{ display: 'block', width: 80 }}
          />
        </div>
        <Header as='h1'>Next App</Header>
      </div>
      <Gnb />
    </div>
  );
}
