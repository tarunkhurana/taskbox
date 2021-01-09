import * as React from 'react';

interface IImage {
  medium: string;
  original: string;
}

type String = string;
type Number = number;

export interface IEpisode {
  id: number;
  airdate: String;
  airstamp: String;
  airtime: String;
  image: IImage;
  name: String;
  runtime: Number;
  season: Number;
  number: Number;
  summary: String;
  url: String;
}

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export interface IEpisodeProps extends IState {
  store: { state: IState; dispatch: Dispatch };
  toggleFavAction: FavAction;
}

export interface IAction {
  type: String;
  payload: Array<IEpisode> | any;
}

export interface ITask {
  id: string;
  title: string;
  state: string;
  updatedAt: Date;
}

export interface TaskProps {
  task: ITask;
  onArchiveTask?: (id: string) => void;
  onPinTask?: (id: string) => void;
}

export interface TaskListProps {
  loading: boolean;
  tasks: Array<ITask>;
  onPinTask?: (id: string) => void;
  onArchiveTask?: (id: string) => void;
}

export type FavAction = (
  state: IState,
  dispatch: Dispatch,
  episode: IEpisode
) => void;

export type Dispatch = React.Dispatch<IAction | any>;
