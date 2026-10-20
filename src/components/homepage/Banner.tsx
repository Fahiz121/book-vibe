import bannerImage from "@/assets/hero_img.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="py-20">
    <div className="container mx-auto grid grid-cols-2 gap-4 items-center bg-slate-300 rounded-4xl p-10">
      <div className="space-y-4">
        <h2 className="font-bold text-5xl">
          Books to freshen up <br /> your bookshelf
        </h2>
        <Link href={'/books'}>
        <button className="btn btn-success bg-[#23BE0A] text-[#ffffff]">View The List</button>
        </Link>
      </div>
      <div className="aura aura-dual">
        <Image src={bannerImage} alt="Banner Image" />
      </div>
    </div>
    </section>
  );
};

export default Banner;
