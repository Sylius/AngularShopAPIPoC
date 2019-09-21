/* tslint:disable */
export interface Price {

  /**
   * Calculated price for given channel. Price is stored as an integer, so by default it should be divided by 100.
   */
  current?: number;
  currency?: string;
}
