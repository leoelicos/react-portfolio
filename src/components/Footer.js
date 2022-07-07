import React from 'react';
const styles = {
  footerLinks: {
    margin: '0 1rem -1px 1rem',
    background: '0 0',
    borderTopLeftRadius: '0.25rem',
    borderTopRightRadius: '0.25rem',
    fontSize: '1rem'
  }
};
export default function Header(props) {
  return (
    <footer>
      <ul className="nav">
        <li className="nav-item deployed">
          <a href="https://www.linkedin.com/in/leo-wong-b9b570129/" style={styles.footerLinks}>
            Linkedin
          </a>
        </li>
        <li className="nav-item deployed">
          <a href="https://github.com/leoelicos?tab=repositories" style={styles.footerLinks}>
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
