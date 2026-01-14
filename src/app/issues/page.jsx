"use client";
import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { addIssue, moveIssue } from "../redux/slices/issuesSlice";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function ProjectBoard() {
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { issues } = useSelector((state) => state.issues);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const { currentUserId } = useSelector((state) => state.user)
  const [title, setTitle] = useState({
    name: "",
  });
  const [labels, setLabels] = useState("All labels")
  const [searchText, setSearchText] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("All Labels");
  const [selectedPriority, setSelectedPriority] = useState("All Priorities");




  const columns = {
    backlog: issues.filter(
      (i) =>
        i.status === "backlog" &&
        i.title.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedLabel === "All Labels" ||
          i.labels[0].includes(selectedLabel.toLowerCase())) &&
        (selectedPriority === "All Priorities" ||
          i.priority.toLowerCase() === selectedPriority.toLowerCase())
    ),
    inProgress: issues.filter(
      (i) =>
        i.status === "inProgress" &&
        i.title.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedLabel === "All Labels" ||
          i.labels[0].includes(selectedLabel.toLowerCase())) &&
        (selectedPriority === "All Priorities" ||
          i.priority.toLowerCase() === selectedPriority.toLowerCase())
    ),
   
     done: issues.filter(
      (i) =>
        i.status === "done" &&
        i.title.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedLabel === "All Labels" ||
          i.labels[0].includes(selectedLabel.toLowerCase())) &&
        (selectedPriority === "All Priorities" ||
          i.priority.toLowerCase() === selectedPriority.toLowerCase())
    ),
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setError("Issue name required");
    }
    setError("");
    dispatch(addIssue(title));
    setTitle("");
    setIsOpen(false);
  };

  const changeHandle = (e) => {
    setTitle({ ...title, [e.target.name]: e.target.value })
  }


  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;

    dispatch(
      moveIssue({
        id: Number(draggableId),
        to: destination.droppableId,
      })

    );
  };


  return (
    <div className="max-h-screen bg-white">

      <header className="flex relative top-3 items-center gap-3 px-6 py-4 bg-white">
        <Link href={`/projects?issues=${issues.length}`}>
          <ArrowLeft className="h-5 w-5 text-gray-700 cursor-pointer" />
        </Link>
        <h1 className="text-lg text-gray-800 font-semibold">{name}</h1>
      </header>


      <div className="flex gap-4 w-[850px] px-10 py-4 bg-white">
        <input
          type="text"
          placeholder="Search issues..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-1 bg-gray-100 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select onChange={(e) => setSelectedLabel(e.target.value)} className="bg-gray-100 rounded-md px-3 py-2 text-gray-600 focus:ring-2 focus:ring-indigo-500">
          <option>All Labels</option>
          <option>Bug</option>
          <option>Feature</option>
          <option>Enhancement</option>
        </select>
        <select onChange={(e) => setSelectedPriority(e.target.value)} className="bg-gray-100 rounded-md px-3 py-2 text-gray-600 focus:ring-2 focus:ring-indigo-500">
          <option>All Priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>


      <DragDropContext onDragEnd={onDragEnd}>
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16 py-6 min-h-[443px] bg-gray-100/50 border-t border-gray-200">
          {Object.entries(columns).map(([status, list]) => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-200/60 rounded-lg p-4 shadow-sm min-h-[400px]"
                >

                  <div className="flex justify-between h-[52px] items-center mb-4">
                    <h2 className="font-semibold text-gray-700 capitalize">
                      {status}
                    </h2>
                    <span className="text-sm bg-white rounded-md px-2 py-1 text-gray-600">
                      {list.length}
                    </span>
                  </div>


                  {list.length === 0 ? (
                    <h1 className="text-center text-gray-500 py-6">No issues</h1>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {list.map((issue, index) => (
                        <Draggable
                          key={issue.id}
                          draggableId={issue.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="cursor-grab active:cursor-grabbing bg-white rounded-lg shadow-sm flex flex-col gap-3 p-4 hover:shadow-md transition"
                            >

                              <div className="flex justify-between items-start">
                                <h3 className="font-medium text-gray-800">
                                  {issue.title}
                                </h3>
                                <span
                                  className={`h-3 w-3 rounded-full ${issue.color}`}
                                ></span>
                              </div>


                              <div className="flex gap-2 flex-wrap mt-2">
                                {issue.labels.map((label, i) => (
                                  <div key={i} className="flex gap-2">
                                    <span className="bg-gray-100 text-black text-xs px-2 py-1 rounded-md">
                                      {label[0]}
                                    </span>
                                    <span className="bg-gray-100 text-black text-xs px-2 py-1 rounded-md">
                                      {label[1]}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-3">
                                <span className="h-7 w-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-semibold">
                                  {issue.user}
                                </span>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </div>
              )}
            </Droppable>
          ))}
        </main>
      </DragDropContext>


      {isOpen && (
        <div className="absolute inset-0 bg-black/40  flex items-center justify-center">
          <div className="bg-white min-h-[250px] rounded-lg p-6 w-[450px] shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Create New Issue</h2>
            <p className="text-gray-500 text-sm mb-4">
              Add a new issue to the backlog
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col h-[110px] justify-center">
                {error && <h1 className="text-red-700">{error}</h1>}
                <label
                  for="text"
                  className="block text-sm font-medium mb-1"
                >
                  Issue Title
                </label>
                <input
                  type="text"
                  id="text"
                  name="name"
                  placeholder="Fix navigation bug"
                  value={title.name}
                  onChange={changeHandle}
                  className="w-full border rounded-md px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-[#4f46e5]"
                />
              </div>
              <div className="flex h-[60px] items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md border h-[45px]"
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded-md h-[45px] bg-[#4f46e5] text-white"
                >
                  Create Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-3 right-8 bg-indigo-600 text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg hover:bg-indigo-700 transition"
      >
        <Plus className="h-4 w-4" />
        New Issue
      </button>
    </div>
  );
}
