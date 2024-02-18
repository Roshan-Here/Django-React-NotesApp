import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Headers from "../components/Headers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

function NotePage() {
  const { id } = useParams();
  // console.log(id)
  const [note, setNote] = useState([]);
  const navigate = useNavigate();
  const header = {
    "Content-Type": "application/json",
  };

  const getNote = async () => {
    if (!id || id === "new") return;
    const resp = await fetch(`http://192.168.1.7:8000/api/${id}`);
    const data = await resp.json();
    // console.log(data)
    setNote(data);
  };
  useEffect(() => {
    getNote();
  }, [id]);

  /// onchange...
  const noteUpdate = (e) => {
    setNote({ ...note, body: e.target.value });
    // console.log(note)
    // updateNote()
  };
  //
  const updateNote = async () => {
    const resp = fetch(`http://192.168.1.7:8000/api/${id}/update`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(note),
    });
    console.log(resp);
  };

  const createNote = async () => {
    const resp = fetch(`http://192.168.1.7:8000/api/create`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(note),
    });
    console.log(resp);
  };

  const handleSubmit = () => {
    if (id !== "new" && note.body == "") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note !== null) {
      createNote();
    }
    navigate("/");
  };

  const deleteNote = async () => {
    const resp = fetch(`http://192.168.1.7:8000/api/${id}/delete`, {
      method: "DELETE",
      headers: header,
    });
    // navigate('/')
  };

  const showDeleteButton = () => {
    if (id !== "new") {
      const wow = (
        <Link to={"/"}>
          <figure>
            <FontAwesomeIcon
              onClick={() => deleteNote()}
              icon={faTrash}
              className="h-11 text-yy"
            />
          </figure>
        </Link>
      );
      return wow;
    } else {
      const wow = (
        <>
          <div className="flex flex-row m-4">
            <h3 className="text-yy text-2xl">Create new Note</h3>
          </div>
          <div className="flex flex-row m-4 px-12">
            <Link to={"/"}>
              <button
                onClick={() => handleSubmit()}
                className="font-extrabold text-yy text-xl"
              >
                Done
              </button>
            </Link>
          </div>
        </>
      );
      return wow;
    }
  };

  return (
    <div>
      <Headers notes={note} />
      <div className="mx-auto">
        <div className="flex flex-row justify-between bg-slate-950 ">
          <div className="flex flex-row px-14">
            <figure>
              <FontAwesomeIcon
                onClick={() => handleSubmit()}
                icon={faAngleLeft}
                className="h-16 text-yy"
              />
            </figure>
          </div>

          {showDeleteButton()}
        </div>
        <div className=" bg-slate-950 p-4">
          <textarea
            id={note.id}
            rows="12"
            className="block p-8 w-full overflow-hidden text-xl bg-slate-950 text-yy"
            defaultValue={note?.body}
            onChange={(e) => {
              noteUpdate(e);
            }}
          >
            {}
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default NotePage;
