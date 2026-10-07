import Image from "next/image";

export default function ContextSection() {
  return (
    <section id="context" className="min-h-screen">
      <div className="mx-auto w-full max-w-[1440px] px-5">
        {/* Text */}
        <div className="mt-[200px] grid grid-cols-12 gap-[15px]">
          {/* Left */}
          <div className="col-span-4 pt-[23px]">
            <h2 className="text-[64px] font-semibold leading-none tracking-tight">
              KATARSIS
            </h2>

            <p className="mt-[18px] max-w-xs text-[24px] font-light italic leading-[1.15] text-neutral-500">
              (n.) an intimacy in the sense of the sacred
            </p>
          </div>

          {/* Right */}
          <div className="col-span-8">
            <p className="mb-3 text-[16px] leading-none text-neutral-400">
              Description
            </p>

            <div className="text-[18px] leading-[1.2]">
              <p>
                A stage where the truth falls right into your hands. When you
                find yourself morally purified, whether you want to or not,
                simply because the time has come. You come to embrace yourself,
                becoming tenderness itself. Life asks questions, and the answers
                emerge on their own in the thick smoke of incense.
              </p>

              <p className="mt-6">
                Legs crossed in svastikasana, it feels as if everything around
                is intensifying to the point where you begin to hear phantom,
                fateful bells. This is how personal liberation arrives. Now
                &apos;on the other side&apos; of human existence. A moment so
                fragile and reverent that it is impossible to put into words.
              </p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="mt-9 grid grid-cols-12 gap-[15px]">
          <div className="col-span-4">
            <Image
              src="/context/context_1.png"
              alt=""
              width={457}
              height={441}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="col-span-8">
            <Image
              src="/context/context_2.png"
              alt=""
              width={928}
              height={592}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
