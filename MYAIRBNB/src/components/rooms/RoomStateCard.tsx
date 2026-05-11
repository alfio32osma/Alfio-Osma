interface RoomStateCardProps {
  message: string;
}

const RoomStateCard = ({ message }: RoomStateCardProps) => {
  return (
    <div className="flex min-h-[18rem] items-center justify-center rounded-3xl border border-zinc-200 bg-white">
      <p className="text-base font-medium text-zinc-600">{message}</p>
    </div>
  );
};

export default RoomStateCard;
