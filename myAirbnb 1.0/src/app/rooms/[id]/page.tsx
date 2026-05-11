import RoomDetailPageView from "@/components/pages/RoomDetailPageView";

interface RoomDetailPageProps {
  params: Promise<{ id: string }>;
}

const RoomDetailPage = async ({ params }: RoomDetailPageProps) => {
  const { id } = await params;

  return <RoomDetailPageView roomId={id} />;
};

export default RoomDetailPage;
