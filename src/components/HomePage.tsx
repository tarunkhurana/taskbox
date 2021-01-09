import * as React from 'react';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../store';
import { fetchDataAction, toggleFavAction } from '../action';
import { IEpisodeProps } from '../types/interface';

import App from './App';
import EpisodesList from './EpisodesList';

// const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

const HomePage = (): JSX.Element => {
  const { state, dispatch } = useContext(StoreContext);

  useEffect(() => {
    if (state.episodes.length === 0) fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <App>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className='episode-layout'>
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </App>
  );
};

export default HomePage;
