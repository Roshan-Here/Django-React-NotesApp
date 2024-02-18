import React from "react";
import { Link } from "react-router-dom";

function Listitem({ notes }) {
  const getTimeAMPMFormat = (note) => {
    let hours = getHour(note);
    let minutes = getMinitue(note);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes.toString().padStart(2, "0");
    let mergeTime = `${hours}:${minutes} ${ampm}`;
    return mergeTime;
  };

  const getYear = (note) => {
    const time = getTime(note);
    return time.getFullYear();
  };
  const getMonth = (note) => {
    const time = getTime(note);
    return time.toLocaleString("default", { month: "short" }).toLowerCase();
  };
  const getDate = (note) => {
    const time = getTime(note);
    return time.getDate();
  };
  const getHour = (note) => {
    const time = getTime(note);
    return time.getHours();
  };
  const getMinitue = (note) => {
    const time = getTime(note);
    return time.getMinutes();
  };
  const getTime = (note) => {
    const time = new Date(note.updated);
    return time;
    // return new Date(note.updated).toLocaleDateString()
  };
  const singleNotes = () => {
    const ss = notes.map((s) => (
      <Link to={`/note/${s.id}`} key={s.id}>
        <div className="py-1 items-center justify-center">
          <div className="flex flex-col mx-auto bg-yy rounded-xl shadow-md overflow-hidden md:max-w-xl m-1">
            <div className="px-24 flex items-center">
              <div className="sm:pr-16">
                <p className="text-4xl font-bold">{getDate(s)}</p>
              </div>
              <div>
                <div className="uppercase tracking-wide text-lg text-black font-semibold">
                  {getYear(s) + " " + getMonth(s)}
                </div>
                <p className="mt-2 text-black text-md">
                  {getTimeAMPMFormat(s)}
                </p>
                <p className="px-8 mt-2 text-black text-lg">
                  {s.body.slice(0, 25) + "......"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ));
    return ss;
  };
  return <div>{singleNotes()}</div>;
}

export default Listitem;
