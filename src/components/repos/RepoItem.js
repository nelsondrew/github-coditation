import React from "react";
import PropTypes from "prop-types";

export const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <ul>
        <li>
          {" "}
          <strong>Forks:</strong> {repo.forks}
        </li>
        <li>
          <strong>Issues:</strong> {repo.open_issues_count}
        </li>
      </ul>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
