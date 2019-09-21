/* tslint:disable */
export interface GeneralError {
  code?: number;
  message?: string;

  /**
   * Keys reference to the fields where the error occurred.
   */
  errors?: {[key: string]: Array<string>};
}
