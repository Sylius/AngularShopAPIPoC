/* tslint:disable */

/**
 * Body of request with a channel code.
 */
export interface AddReviewRequest {
  title: string;
  rating: number;
  comment: string;

  /**
   * Email of an author.
   */
  email: string;
}
