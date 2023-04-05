import Navbar from "@/components/Navbar";
import { meals } from "@/utils/meals";
import { mulberry32 } from "../utils/rand";
import { useMemo, useState } from "react";
import About from "@/components/About";

const Index = () => {
  const [counter, setCounter] = useState(0);
  const randomNumber = useMemo(() => {
    return Math.floor(mulberry32(new Date().getTime() + counter)() * 1000000);
  }, [counter]);

  const [revealed, setReveal] = useState(false);

  // PH
  const todayMeal = meals[randomNumber % meals.length];

  return (
    <div className="pt-24 lg:pt-32">
      <div className="flex flex-col gap-y-6">
        <h3 className="text-xl md:text-2xl text-center">
          ไม่รู้จะกินอะไรดี คิดถึง &quot;แล้วแต่แอป&quot;
        </h3>
        <h2 className="text-2xl md:text-3xl text-center font-semibold">
          มื้อเที่ยงของฉันในวันนี้คือ
        </h2>
        <div className="mx-8 my-4 grid place-items-center">
          {!revealed ? (
            <button
              onClick={() => {
                setReveal(true);
              }}
              className="bg-secondary text-4xl font-bold px-8 py-6 rounded-lg text-white cursor-pointer"
            >
              กดเพื่อดู
            </button>
          ) : (
            <div className="flex flex-col items-center gap-y-4">
              {counter < 20 ? (
                <h1 className="text-center text-4xl md:text-6xl font-extrabold text-primary underline">
                  {todayMeal}
                </h1>
              ) : (
                <h1 className="text-center text-4xl md:text-6xl font-extrabold text-red-700 underline">
                  ไม่ต้องแดกแล้วไหม?
                </h1>
              )}
              <span
                onClick={() => setCounter(counter + 1)}
                className="underline text-lg md:text-2xl text-center cursor-pointer"
              >
                {counter < 20 ? "กินอย่างอื่น" : "เรื่องมากชิบหาย"}
              </span>
            </div>
          )}
        </div>
      </div>
      <About />
    </div>
  );
};

export default Index;
