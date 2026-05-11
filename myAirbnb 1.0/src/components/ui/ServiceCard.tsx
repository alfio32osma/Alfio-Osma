import BadgeTag from "@/components/ui/BadgeTag";
import { ServiceQuickCard } from "@/types/explore";

interface ServiceCardProps {
  service: ServiceQuickCard;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article className="w-[6.4rem] shrink-0">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-200">
        <img src={service.imageUrl} alt={service.title} className="h-20 w-full object-cover" loading="lazy" />
        {service.badge ? (
          <div className="absolute left-2 top-2">
            <BadgeTag label={service.badge.label} tone={service.badge.tone} />
          </div>
        ) : null}
      </div>
      <h3 className="mt-2 text-[19px] leading-5 font-medium text-zinc-900">{service.title}</h3>
      <p className="mt-1 text-[15px] leading-4 text-zinc-600">{service.availability}</p>
    </article>
  );
};

export default ServiceCard;
