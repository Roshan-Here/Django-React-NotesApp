import React from "react";
import { Link } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddButton() {
  return (
    <Link to={"/note/new"}>
      <FontAwesomeIcon
        icon={faPlus}
        className="h-24 text-slate-950 bg-yy hover:bg-slate-950 hover:text-yy rounded-full"
      />
    </Link>
  );
}

export default AddButton;
