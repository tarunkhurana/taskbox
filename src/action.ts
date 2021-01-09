import { Dispatch, IAction, IEpisode, IState } from './types/interface';

export const fetchDataAction = async (dispatch: Dispatch) => {
  const url =
    'https://api.tvmaze.com/singlesearch/shows?q=la-casa-de-papel&embed=episodes';
  const data = await fetch(url);
  const dataJSON = await data.json();

  dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes,
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: Dispatch,
  episode: IEpisode | any
) => {
  const episodeInFav = state.favourites.includes(episode);

  let dispatchObj: IAction = {
    type: 'ADD_FAV',
    payload: episode,
  };

  if (episodeInFav) {
    const favWithoutEpisode = state.favourites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: favWithoutEpisode,
    };
  }
  dispatch(dispatchObj);
};
