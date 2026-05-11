import Button from "@/components/ui/Button";

interface RoomBookingCardProps {
  pricePerNight: number;
  guests: number;
  checkInDate: string;
  checkOutDate: string;
  nights: number;
  totalPrice: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
}

const RoomBookingCard = ({
  pricePerNight,
  guests,
  checkInDate,
  checkOutDate,
  nights,
  totalPrice,
  onDecreaseGuests,
  onIncreaseGuests,
  onCheckInChange,
  onCheckOutChange
}: RoomBookingCardProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
      <div className="mb-5 border-b border-zinc-200 pb-4">
        <p className="text-2xl font-bold text-zinc-900">{pricePerNight} EUR <span className="text-base font-medium text-zinc-600">/ noche</span></p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700">Check-in<input type="date" value={checkInDate} onChange={(event) => onCheckInChange(event.target.value)} className="h-10 rounded-xl border border-zinc-300 px-3 text-zinc-900 outline-none transition focus:border-zinc-500" /></label>
          <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700">Check-out<input type="date" value={checkOutDate} onChange={(event) => onCheckOutChange(event.target.value)} className="h-10 rounded-xl border border-zinc-300 px-3 text-zinc-900 outline-none transition focus:border-zinc-500" /></label>
        </div>
        <div className="rounded-xl border border-zinc-200 p-3">
          <p className="text-sm font-medium text-zinc-700">Huespedes</p>
          <div className="mt-2 flex items-center justify-between"><button type="button" onClick={onDecreaseGuests} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-lg text-zinc-700 transition hover:bg-zinc-100" aria-label="Reducir huespedes">-</button><p className="text-base font-semibold text-zinc-900">{guests}</p><button type="button" onClick={onIncreaseGuests} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-lg text-zinc-700 transition hover:bg-zinc-100" aria-label="Aumentar huespedes">+</button></div>
          <p className="mt-1 text-xs text-zinc-500">Minimo 1 - Maximo 10 huespedes</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700"><p className="font-medium text-zinc-900">Desglose del precio</p><div className="mt-2 space-y-1"><p>{pricePerNight} EUR x {nights} noches</p><p className="text-xs text-zinc-500">Selecciona fechas validas para calcular el total.</p></div><p className="mt-2 border-t border-zinc-200 pt-2 text-base font-semibold text-zinc-900">Total: {totalPrice} EUR</p></div>
        <Button type="button" className="h-11 w-full rounded-xl text-base font-semibold">Reservar</Button>
      </div>
    </aside>
  );
};

export default RoomBookingCard;
