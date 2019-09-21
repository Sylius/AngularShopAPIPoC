/* tslint:disable */

/**
 * Body of request with a channel code.
 */
export interface AddReviewRequest {
  channelCode: string;
  title: string;
  rating: number;
  comment: string;

  /**
   * Email of an author.
   */
  email: string;
}
