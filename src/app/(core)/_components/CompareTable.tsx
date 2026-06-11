import { Icon } from "@/components/icons/Icon";
import { compareRows } from "@/data/compare";

export default function CompareTable() {
  return (
    <section className="py-24">
      <div className=" overflow-hidden rounded-[40px] bg-white/[0.03] backdrop-blur-xl ">
        {/* header */}
        <div className="  grid  grid-cols-3  bg-gradient-to-b from-primary/30  to-transparent text-center ">
          <div className="py-5 font-bold">ویژگی</div>

          <div className=" border-x border-white/10 py-5 font-bold ">
            دستیارهای معمولی
          </div>

          <div className="py-5 font-bold">AgenX</div>
        </div>

        {/* rows */}
        {compareRows.map((row, index) => (
          <div
            key={row.title}
            className={` grid  grid-cols-3 text-center  ${index !== compareRows.length - 1 ? "border-b border-white/10   shadow-[0_0_4px_rgba(139,92,246,0.15)]" : ""} `}>
            <div className="py-5 text-sm">{row.title}</div>

            <div className=" flex  justify-center  border-x  border-white/10  py-5 ">
              {row.normal ? (
                <div className="bg-primary rounded-full absolute  h-5 w-5">
                  <Icon
                    name="check"
                    className="h-10 w-10 pt-1 relative -top-0.5 left-1"
                  />
                </div>
              ) : (
                <div className="bg-states-error rounded-full absolute  h-5 w-5">
                  <Icon
                    name="close"
                    className="h-10 w-10 pt-1 relative -top-0.5 left-1"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-center py-5 ">
              <div className="bg-primary rounded-full absolute  h-5 w-5">
                <Icon
                  name="check"
                  className="h-10 w-10 pt-1 relative -top-0.5 left-1"
                />
              </div>
            </div>
          </div>
        ))}

        {/* footer */}
        <div className=" h-20  bg-gradient-to-t from-primary/30 to-transparent " />
      </div>
    </section>
  );
}
