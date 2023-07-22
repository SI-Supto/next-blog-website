import React from "react";

const TrialPage = () => {
  return (
    <div>
      <div className="flex justify-center flex-col gap-10 items-center">
        <div className="text-center text-2xl md:text-4xl font-bold tracking-widest uppercase">
          let’s take your experience on moon
        </div>
        <div className="px-6 rounded-full ring-1 ring-white md:w-[353px] w-[300px] flex justify-center">
          start you 7 day free trial
        </div>
      </div>
      <div className="pt-24 flex justify-between px-3 pb-7">
        <div>&copy; Shefat</div>
        <div>Developed by Shefat</div>
      </div>
    </div>
  );
};

export default TrialPage;
