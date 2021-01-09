import * as React from 'react';
import { lazy, Suspense } from 'react';
import { StoreContext } from '../store';
import { IEpisodeProps } from '../types/interface';
import { toggleFavAction } from '../action';

import App from './App';

const EpisodesList = lazy<any>(() => import('./EpisodesList'));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(StoreContext);
  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };
  return (
    <App>
      <Suspense fallback={<div>loading...</div>}>
        <div className='episode-layout'>
          <EpisodesList {...props} />
        </div>
      </Suspense>
    </App>
  );
}
