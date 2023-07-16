import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return (
    <section className="host-van-photo">
      <img src={currentVan.imageUrl} className="host-van-detail-image" />
    </section>
  );
}
