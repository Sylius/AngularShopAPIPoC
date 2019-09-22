/* tslint:disable */
import { Page } from './page';
export interface ProductReviewsPage extends Page {
  title?: string;
  rating?: number;
  createdAt?: string;
  comment?: string;
  author?: string;
}
