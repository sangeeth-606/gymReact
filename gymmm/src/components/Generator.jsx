import React from "react";
import Sectionwrapper from "./Sectionwrapper";
import { WORKOUTS } from "../utils/swoldier";

function Header(props) {
  const { index, title, description } = props;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base text-center">{description}</p>
    </div>
  );
}

export default function Generator() {



  let showModel=false;

  return (
    <Sectionwrapper
      header={"generate your workout"}
      title={["It's", "huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Choose your workout"}
        description={"Select the type of workout you want to do"}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              key={typeIndex}
              className="bg-slate-950 border border-blue-400 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <p className=" capitalize text-white">
                {type.replaceAll("_", " ")}
              </p>
            </button>
          );
        })}
      </div>
      {/* //----------------------------------- */}
      <Header
        index={"02"}
        title={"Lock on Targets"}
        description={"Select the muscle group you want to target"}
      />

      <div className="bg-slate-950 p-3 border border-solid border-blue-400 rounded-lg" >
        <div className="relative flex items-center">
          <p>Select the muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </div>
        {showModel && (
          <div>modal</div>
        )}
      </div>
    </Sectionwrapper>
  );
}
