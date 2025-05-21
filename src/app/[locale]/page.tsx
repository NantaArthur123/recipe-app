import { useTranslations } from "next-intl";
import Carousel from "../components/carousel";

export default function HomePage() {
  const t = useTranslations();
  const banner_album = [
    `https://images6.alphacoders.com/136/1363442.jpeg`,
    `https://images.alphacoders.com/135/1350221.jpeg`,
    `https://images6.alphacoders.com/134/1344008.jpeg`,
  ];
  const desc = [`Frieren`, `The end's Journey`, `The mighty Heroes`];

  return (
    <>
      <Carousel images={banner_album} desc={desc} />
    </>
  );
}
