import React, { useState, useContext } from "react";
import alertContext from "../../context/Alert/alertContext";
import githubContext from "../../context/github/githubContext";

const Search = () => {
  const [text, setText] = useState("");
  const GithubContext = useContext(githubContext);
  const AlertContext = useContext(alertContext);

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      AlertContext.setAlert("Please Enter Something", "Danger");
    } else {
      GithubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {GithubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={GithubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
