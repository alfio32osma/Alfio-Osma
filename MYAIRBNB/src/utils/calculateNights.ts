export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) {
    return 0;
  }

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  if (Number.isNaN(checkInDate.getTime()) || Number.isNaN(checkOutDate.getTime())) {
    return 0;
  }

  const millisecondsPerNight = 1000 * 60 * 60 * 24;
  const nights = Math.floor((checkOutDate.getTime() - checkInDate.getTime()) / millisecondsPerNight);

  return nights > 0 ? nights : 0;
}
