import React from 'react';
import { Header, Banner, Cards } from '../components';

export default function Home({ GAMES }) {
  return (
    <div>
      <Banner />
      <Cards title="Popular games" data={GAMES} />
      <Cards title="New games" data={GAMES} />
      <Cards title="Promotions" data={GAMES} />
      <Cards title="All Games" data={GAMES} />
      <Cards title="Tournaments" data={GAMES} />
      <Cards title="Popular games" data={GAMES} />
      <Cards title="Popular games" data={GAMES} />
    </div>
  );
}
