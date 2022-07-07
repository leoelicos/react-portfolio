import React from 'react';
import Project from './Project';
export default function Portfolio() {
  const projects = [
    {
      title: 'MOOVEE',
      description: 'YouTube Trailer Search',
      deployedURL: 'https://leoelicos.github.io/bcs-07-moovee/',
      repoURL: 'https://github.com/leoelicos/bcs-07-moovee',
      imageURL: 'https://leoelicos.github.io/bcs-02-professional-portfolio/assets/images/project/moovee.png'
    },
    {
      title: 'Just Kidding!',
      description: 'Image Sharing Forum',
      deployedURL: 'https://just-kidding-baby.herokuapp.com/',
      repoURL: 'https://github.com/leoelicos/bcs-14-tech-blog',
      imageURL: 'https://leoelicos.github.io/bcs-02-professional-portfolio/assets/images/project/jk.jpg'
    },
    {
      title: 'Submitted!',
      description: 'Wordpress-style Tech Blog',
      deployedURL: 'https://leoelicos-tech-blog.herokuapp.com/',
      repoURL: 'https://github.com/leoelicos/bcs-14-tech-blog',
      imageURL: 'https://leoelicos.github.io/bcs-02-professional-portfolio/assets/images/project/submitted.jpg'
    },
    {
      title: 'Employee Management System',
      description: 'Command Line CMS',
      deployedURL: 'https://www.youtube.com/watch?v=W58SFkcsXkM',
      repoURL: 'https://github.com/leoelicos/bcs-12-employee-management-system/',
      imageURL: 'https://leoelicos.github.io/bcs-02-professional-portfolio/assets/images/project/ems.jpg'
    },
    {
      title: 'WWAG',
      description: 'Weather Data Visualization',
      deployedURL: 'https://leoelicos.github.io/bcs-06-weather-dashboard/',
      repoURL: 'https://github.com/leoelicos/bcs-06-weather-dashboard',
      imageURL: 'https://leoelicos.github.io/bcs-02-professional-portfolio/assets/images/project/wwag.jpg'
    },
    {
      title: 'SYTYCJ',
      description: 'Timed Javascript Quiz',
      deployedURL: 'https://github.com/leoelicos/bcs-04-code-quiz',
      repoURL: 'https://leoelicos.github.io/bcs-04-code-quiz/',
      imageURL: 'https://leoelicos.github.io/bcs-02-professional-portfolio/assets/images/project/sytycj.jpg'
    },
    {
      title: 'KIDDLE',
      description: 'Wordle for kids',
      deployedURL: 'https://github.com/leoelicos/bcs-04-word-guess',
      repoURL: 'https://leoelicos.github.io/bcs-04-word-guess/',
      imageURL: 'https://leoelicos.github.io/bcs-02-professional-portfolio/assets/images/project/kiddle.jpg'
    }
  ];
  const renderedProjects = projects.map((project) => {
    return <Project key={project.title} title={project.title} description={project.description} deployedURL={project.deployedURL} repoURL={project.repoURL} imageURL={project.repoURL} />;
  });
  return (
    <div>
      <h1>My Applications</h1>
      <ol>{renderedProjects}</ol>
    </div>
  );
}
