/* tslint:disable */
import { Page__links } from './page-__links';

/**
 * Generic page object.
 */
export interface Page {

  /**
   * Current page number.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  limit?: number;

  /**
   * Number of available pages for given limit.
   */
  pages?: number;

  /**
   * Amount of all paginated resources.
   */
  total?: number;
  _links?: Page__links;
}
