/* tslint:disable */
import { Image } from './image';
export interface Taxon {
  code?: string;
  name?: string;
  slug?: string;
  description?: string;

  /**
   * Based on this tree one can build a breadcrumb on a frontend. Otherwise (e.g. presenting a tree of all taxons) children will contain all children of given taxon.
   */
  children?: Array<Taxon>;
  images?: Array<Image>;
}
