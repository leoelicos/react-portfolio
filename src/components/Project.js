import React from 'react';

const Project = ({ title, description, deployedURL, repoURL, imageURL }) => {
  return (
    <li>
      <div background={imageURL}>
        {title}
        <br />
        {description}
        <br />
        <a href={deployedURL} target="_blank" rel="noreferrer">
          Deployed
        </a>
        <a href={repoURL} target="_blank" rel="noreferrer">
          GitHub Repo
        </a>
      </div>
    </li>
  );
};

export default Project;
