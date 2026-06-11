import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section className=" flex  py-26 flex-col items-center justify-center text-center ">
      <h1 className=" max-w-4xl text-3xl font-black leading-tight text-white ">
        به جای یک AI عمومی
      </h1>
      <h1 className=" mt-3 text-2xl font-black text-white ">
        با هزاران متخصص AI حرف بزن
      </h1>
      <HeroButtons />
    </section>
  );
}
