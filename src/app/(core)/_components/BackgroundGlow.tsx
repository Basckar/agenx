export default function BackgroundGlow() {
  return (
    <>
      <div className=" pointer-events-none fixed bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-primary/30 blur-[140px] " />
      <div className=" pointer-events-none fixed right-[-120px] top-[30%] h-[380px] w-[380px] rounded-full bg-primary/20 blur-[140px] " />
    </>
  );
}
