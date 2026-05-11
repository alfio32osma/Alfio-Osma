interface RoomHostCardProps {
  hostName: string;
  yearsHosting: number;
}

const RoomHostCard = ({ hostName, yearsHosting }: RoomHostCardProps) => {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-200 text-lg font-bold text-zinc-700">
          {hostName.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <p className="text-base font-semibold text-zinc-900">Anfitrion: {hostName}</p>
          <p className="text-sm text-zinc-600">{yearsHosting} anos como anfitrion</p>
        </div>
      </div>
    </section>
  );
};

export default RoomHostCard;
