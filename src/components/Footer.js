import React from 'react';

export default function Header(props) {
  return (
    <footer>
      <hr />
      <div>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leo-wong-b9b570129/">
          <p className="label">LinkedIn</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/leoelicos?tab=repositories">
          <p className="label">GitHub</p>
        </a>
      </div>
    </footer>
  );
}
