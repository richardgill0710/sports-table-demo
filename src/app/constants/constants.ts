import { SportType } from 'src/app/constants/sport-type';

export const SportTitles: Record<SportType, string> = {
  [SportType.FOOTBALL]: 'Football',
  [SportType.TENNIS]: 'Tennis',
  [SportType.NBA]: 'NBA',
};

export const SportResultKey: Record<SportType, string> = {
  [SportType.FOOTBALL]: 'f1Results',
  [SportType.TENNIS]: 'Tennis',
  [SportType.NBA]: 'nbaResults',
};
