"use client";

import RoomAmenitiesSection from "@/components/rooms/RoomAmenitiesSection";
import RoomBackLink from "@/components/rooms/RoomBackLink";
import RoomBookingCard from "@/components/rooms/RoomBookingCard";
import RoomHeader from "@/components/rooms/RoomHeader";
import RoomHostCard from "@/components/rooms/RoomHostCard";
import RoomImageGallery from "@/components/rooms/RoomImageGallery";
import RoomPageShell from "@/components/rooms/RoomPageShell";
import RoomStateCard from "@/components/rooms/RoomStateCard";
import { useRoomDetail } from "@/hooks/useRoomDetail";

interface RoomDetailPageViewProps {
  roomId: string;
}

const RoomDetailPageView = ({ roomId }: RoomDetailPageViewProps) => {
  const state = useRoomDetail(roomId);

  if (state.isLoading) {
    return (
      <RoomPageShell>
        <RoomStateCard message="Cargando detalle de la habitacion..." />
      </RoomPageShell>
    );
  }

  if (!state.room) {
    return (
      <RoomPageShell>
        <RoomStateCard message="No se encontro la habitacion solicitada." />
      </RoomPageShell>
    );
  }

  return (
    <RoomPageShell>
      <RoomBackLink />
      <RoomImageGallery
        imageUrl={state.room.photos[state.currentPhotoIndex]}
        title={state.room.title}
        photoIndex={state.currentPhotoIndex}
        onPrevious={state.goToPreviousPhoto}
        onNext={state.goToNextPhoto}
      />
      <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] xl:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="space-y-8">
          <RoomHeader
            title={state.room.title}
            rating={state.room.rating}
            reviewsCount={state.room.reviewsCount}
            location={state.room.location}
          />
          <RoomHostCard hostName={state.room.host.name} yearsHosting={state.room.host.yearsHosting} />
          <RoomAmenitiesSection amenities={state.room.amenities} />
        </div>
        <RoomBookingCard
          pricePerNight={state.room.pricePerNight}
          guests={state.guests}
          checkInDate={state.checkInDate}
          checkOutDate={state.checkOutDate}
          nights={state.nights}
          totalPrice={state.totalPrice}
          onDecreaseGuests={state.decreaseGuests}
          onIncreaseGuests={state.increaseGuests}
          onCheckInChange={state.setCheckInDate}
          onCheckOutChange={state.setCheckOutDate}
        />
      </section>
    </RoomPageShell>
  );
};

export default RoomDetailPageView;
