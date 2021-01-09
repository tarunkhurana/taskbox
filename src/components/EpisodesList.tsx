import * as React from 'react';
import { IEpisode, IEpisodeProps } from '../types/interface';

const EpisodesList: Function = (props: IEpisodeProps): JSX.Element[] => {
  const { episodes, toggleFavAction, store, favourites } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className='episode-box'>
        <img
          src={episode.image ? episode.image.medium : ''}
          alt={`Money Heist - ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button
            type='button'
            onClick={() => toggleFavAction(state, dispatch, episode)}>
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'Unfav'
              : 'Fav'}
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodesList;
