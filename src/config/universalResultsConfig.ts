// import { StandardCard } from '../components/cards/StandardCard';
import { ProductsCard } from '../components/cards/ProductsCard';
import { ArticlesCard } from '../components/cards/ArticlesCard';
import { FaqCard } from '../components/cards/FaqCards';
import { VerticalConfig } from '../components/UniversalResults';
import { LocationCard } from '../components/cards/LocationCard';
import LocationSection from '../sections/LocationSection';
import ProductsSection from '../sections/ProductSection';


export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  
  products: {
    StandardCardProps:ProductsCard,
    label: 'Products',
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductsCard,
      showOrdinal: false
    }
  },
  articles: {
    StandardCardProps:ArticlesCard,
    label: 'Articles',
    viewAllButton: true,
    cardConfig: {
      CardComponent: ArticlesCard,
      showOrdinal: false
    }
  },
  faq: {
    StandardCardProps:FaqCard,
    label: 'FAQ',
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false
    }
  } 
}