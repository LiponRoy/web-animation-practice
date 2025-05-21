import React from "react";

const StackingCards = () => {
  return (

        <div className="w-full h-screen border border-[#171717] relative overflow-y-auto">
        <div className="sticky top-0 w-[80%] h-[560px] mx-auto mb-5 bg-red-400 border-8 border-slate-300 rounded-4xl p-4 scroll-smooth">
          <h1>Card 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis quis? Inventore voluptate quas aut, deserunt vel blanditiis
            facilis, nobis eius nihil reiciendis, nemo ut quia. Quisquam iusto
            numquam veniam!
          </p>
        </div>
        <div className="sticky top-10 w-[80%] h-[560px] mx-auto mb-5 bg-green-400 border-8 border-slate-300 rounded-4xl p-4 scroll-smooth">
          <h1>Card 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis quis? Inventore voluptate quas aut, deserunt vel blanditiis
            facilis, nobis eius nihil reiciendis, nemo ut quia. Quisquam iusto
            numquam veniam!
          </p>
        </div>
        <div className="sticky top-20 w-[80%] h-[560px] mx-auto mb-5 bg-blue-400 border-8 border-slate-300 rounded-4xl p-4 scroll-smooth">
          <h1>Card 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis quis? Inventore voluptate quas aut, deserunt vel blanditiis
            facilis, nobis eius nihil reiciendis, nemo ut quia. Quisquam iusto
            numquam veniam!
          </p>
        </div>
        <div className="sticky top-32 w-[80%] h-[560px] mx-auto mb-5 bg-cyan-400 border-8 border-slate-300 rounded-4xl p-4 scroll-smooth">
          <h1>Card 4</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis quis? Inventore voluptate quas aut, deserunt vel blanditiis
            facilis, nobis eius nihil reiciendis, nemo ut quia. Quisquam iusto
            numquam veniam!
          </p>
        </div>
        <div className="sticky top-0 w-[80%] h-[560px] mx-auto mb-5 bg-pink-400 border-8 border-slate-300 rounded-4xl p-4 shadow-2xl">
          <h1>Card 5</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            debitis quis? Inventore voluptate quas aut, deserunt vel blanditiis
            facilis, nobis eius nihil reiciendis, nemo ut quia. Quisquam iusto
            numquam veniam!
          </p>
        </div>
      </div>
      
  );
};

export default StackingCards;

