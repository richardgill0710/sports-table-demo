import { SportType } from './sport-type';

export const ColumnToDisplay: Record<SportType | 'Default', string[]> = {
  Default: ['tournament', 'winner', 'publicationDate'],
  [SportType.FOOTBALL]: ['tournament', 'winner', 'publicationDate', 'seconds'],
  [SportType.TENNIS]: ['tournament', 'winner', 'looser', 'numberOfSets', 'publicationDate'],
  [SportType.NBA]: ['tournament', 'winner', 'looser', 'gameNumber', 'mvp', 'publicationDate'],
};

export const DefaultSortKey = 'publicationDate';

export const ColumnNames: Record<string, string> = {
  tournament: 'Tournament',
  winner: 'Winner',
  publicationDate: 'Publication Date',
  seconds: 'Seconds',
  looser: 'Looser',
  numberOfSets: 'Number Of Sets',
  gameNumber: 'Game Number',
  mvp: 'MVP',
};
