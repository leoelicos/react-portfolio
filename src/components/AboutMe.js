import React from 'react';
const styles = {
  avatar: {
    height: '20vh',
    borderRadius: '50%'
  }
};
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <article class="box" id="about">
        <h1 class="content-header">Leo Wong</h1>

        <img src="https://leoelicos.github.io/bcs-02-professional-portfolio/assets/images/avatar.jpg" alt="leo wong" style={styles.avatar} />

        <section class="content">
          <h3>Full Stack Developer</h3>
        </section>

        <section class="content">
          <h3>My process</h3>
          <h3>
            <span class="hashtag">#TDD</span>
            <span class="hashtag">#DRY</span>
            <span class="hashtag">#agile</span>
          </h3>
        </section>
        <section class="content">
          <h3>My values</h3>
          <h3>
            <span class="hashtag">#original</span>
            <span class="hashtag">#teamwork</span>
            <span class="hashtag">#bestpractice</span>
          </h3>
        </section>
      </article>
    </div>
  );
}
