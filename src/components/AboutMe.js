import React from 'react';

export default function About() {
  return (
    <article className="box d-flex flex-column align-items-center" id="about">
      <img className="avatar" src="https://leoelicos.github.io/bcs-02-professional-portfolio/assets/images/avatar.jpg" alt="leo wong" />

      <section className="content d-flex flex-column align-items-center">
        <h3>Full Stack Developer</h3>
      </section>

      <section className="content d-flex flex-column align-items-center">
        <h3>My process</h3>
        <h3>
          <span className="hashtag">#TDD</span>
          <span className="hashtag">#DRY</span>
          <span className="hashtag">#agile</span>
        </h3>
      </section>
      <section className="content d-flex flex-column align-items-center">
        <h3>My values</h3>
        <h3>
          <span className="hashtag">#original</span>
          <span className="hashtag">#teamwork</span>
          <span className="hashtag">#bestpractice</span>
        </h3>
      </section>
    </article>
  );
}
