import CatalogPageView from "@/components/pages/CatalogPageView";
import { getHomeDataset } from "@/services/homeService";

const CatalogPage = () => {
  const { properties } = getHomeDataset();

  return <CatalogPageView properties={properties} />;
};

export default CatalogPage;
