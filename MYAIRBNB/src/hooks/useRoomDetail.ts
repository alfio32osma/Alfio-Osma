"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getRoomDetailById } from "@/services/roomService";
import { RoomDetail } from "@/types/room";
import { calculateNights } from "@/utils/calculateNights";

interface UseRoomDetailResult {
  room: RoomDetail | null;
  isLoading: boolean;
  currentPhotoIndex: number;
  guests: number;
  checkInDate: string;
  checkOutDate: string;
  nights: number;
  totalPrice: number;
  goToPreviousPhoto: () => void;
  goToNextPhoto: () => void;
  increaseGuests: () => void;
  decreaseGuests: () => void;
  setCheckInDate: (value: string) => void;
  setCheckOutDate: (value: string) => void;
}

export function useRoomDetail(roomId: string): UseRoomDetailResult {
  const [room, setRoom] = useState<RoomDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setRoom(null);
    setCurrentPhotoIndex(0);
    setGuests(1);
    setCheckInDate("");
    setCheckOutDate("");

    const timer = window.setTimeout(() => {
      const roomData = getRoomDetailById(roomId);
      setRoom(roomData ?? null);
      setIsLoading(false);
    }, 1500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [roomId]);

  const goToPreviousPhoto = useCallback(() => {
    setCurrentPhotoIndex((previousIndex) => {
      const totalPhotos = room?.photos.length ?? 0;

      if (totalPhotos === 0) {
        return 0;
      }

      return previousIndex === 0 ? totalPhotos - 1 : previousIndex - 1;
    });
  }, [room?.photos.length]);

  const goToNextPhoto = useCallback(() => {
    setCurrentPhotoIndex((previousIndex) => {
      const totalPhotos = room?.photos.length ?? 0;

      if (totalPhotos === 0) {
        return 0;
      }

      return previousIndex === totalPhotos - 1 ? 0 : previousIndex + 1;
    });
  }, [room?.photos.length]);

  const increaseGuests = useCallback(() => {
    setGuests((previousGuests) => Math.min(previousGuests + 1, 10));
  }, []);

  const decreaseGuests = useCallback(() => {
    setGuests((previousGuests) => Math.max(previousGuests - 1, 1));
  }, []);

  const nights = useMemo(() => {
    return calculateNights(checkInDate, checkOutDate);
  }, [checkInDate, checkOutDate]);

  const totalPrice = useMemo(() => {
    if (!room || nights === 0) {
      return 0;
    }

    return room.pricePerNight * nights;
  }, [nights, room]);

  return {
    room,
    isLoading,
    currentPhotoIndex,
    guests,
    checkInDate,
    checkOutDate,
    nights,
    totalPrice,
    goToPreviousPhoto,
    goToNextPhoto,
    increaseGuests,
    decreaseGuests,
    setCheckInDate,
    setCheckOutDate
  };
}
