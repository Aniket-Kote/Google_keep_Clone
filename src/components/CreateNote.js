import React, { useState } from "react";


// var title=document.getElementById('title');
// var content=document.getElementById('content');
function CreateNote({onAdd}) {
  const [isExpanded, setisExpanded] = useState(false);
  
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setnote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleExpanded() {
    setisExpanded(true);
  }

  function submitButton(e) {
    onAdd(note);
    setnote({
      title: "",
      content: "",
    });
    e.preventDefault();
}
// console.log(note);
  return (
    <div>
      <form>
        
          <input
            type="text"
            placeholder="Title"
            value={note.title}
            onClick={handleExpanded}
            onChange={handleChange}
            name="title"
            id="title"
          />
        
        <p>
        {isExpanded && (
          <textarea
            value={note.content}
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
            name="content"
            id="content"
            placeholder="Enter your note here"
          ></textarea>
        )}
        </p>
        <button onClick={submitButton}>+</button>
      </form>
    </div>
  );
}

export default CreateNote;
