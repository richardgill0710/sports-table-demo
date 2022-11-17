import { SportResult } from './sport-result';

export interface TennisResult extends SportResult {
  gameNumber: number;
  looser: string;
  mvp: string;
}
