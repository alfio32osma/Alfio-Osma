import ListingCard from "@/components/ui/ListingCard";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import { ExploreTabContent } from "@/types/explore";

interface ExploreSectionsProps {
  content: ExploreTabContent;
}

const ExploreSections = ({ content }: ExploreSectionsProps) => {
  return (
    <div className="space-y-8 px-4 pb-28 pt-5">
      {content.topServices?.length ? (
        <section>
          <SectionHeader title="Servicios en Malaga" />
          <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 pl-1 pr-1">
            {content.topServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      ) : null}

      {content.sections.map((section) => (
        <section key={section.id}>
          <SectionHeader title={section.title} subtitle={section.subtitle} />
          {section.services?.length ? (
            <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 pl-1 pr-1">
              {section.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : null}
          {section.listings?.length ? (
            <div className="-mx-1 flex gap-3 overflow-x-auto pb-1 pl-1 pr-1">
              {section.listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
};

export default ExploreSections;
