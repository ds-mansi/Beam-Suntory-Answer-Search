// import { StandardCard } from '../components/cards/StandardCard';
import { ProductsCard } from '../components/cards/ProductsCard';
import { ArticlesCard } from '../components/cards/ArticlesCard';
import { FaqCard } from '../components/cards/FaqCards';
import { VideosCard } from '../components/cards/VideoCard';
import { VerticalConfig } from '../components/UniversalResults';
import { LocationCard } from '../components/cards/LocationCard';
import LocationSection from '../sections/LocationSection';
import ProductsSection from '../sections/ProductSection';
import { ProviderSwitchingCard } from '../components/cards/ProviderSwitchingCard';

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  
  products: {
    SectionComponent:ProductsSection,
    label: 'Products',
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductsCard,
      showOrdinal: false
    }
  },
  articles: {
    label: 'Articles',
    viewAllButton: true,
    cardConfig: {
      CardComponent: ArticlesCard,
      showOrdinal: false
    }
  },
  faq: {
    label: 'FAQ',
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false
    }
  } 
}