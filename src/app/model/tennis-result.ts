import { SportResult } from './sport-result';

export interface TennisResult extends SportResult {
  looser: string;
  numberOfSets: number;
}
