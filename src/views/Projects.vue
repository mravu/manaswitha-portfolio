<template>
    <div class="projects">
      <h1>My Experience</h1>
  
      <div class="project-list">
        <div v-for="project in sortedProjects" :key="project.id" class="project-item">
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-date">
            <span>{{ project.startDate }} - {{ project.endDate }}</span>
          </p>
          <p class="project-location">{{ project.location }}</p>
  
          <button @click="toggleDescription(project.id)">
            {{ isExpanded[project.id] ? 'Collapse' : 'Expand' }}
          </button>
  
          <div v-if="isExpanded[project.id]" class="project-description">
            <ul>
              <li v-for="(point, index) in project.description" :key="index">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  
  interface Project {
    id: number;
    title: string;
    description: string[];
    location: string;
    startDate: string;
    endDate: string;
  }
  
  export default defineComponent({
    name: 'Projects',
    setup() {
      const projects = ref<Project[]>([
        {
          id: 1,
          title: 'Nutravel Technology Solutions',
          description: [
            'Managed and implement all code changes via SVN, GIT. Deployed builds across development, staging and production instances and maintain code integrity.',
            'Using UI Frameworks like Javascript, Vue, Angular ES6 and implemented Validation using Frameworks.',
            'Responsible for checking cross browser compatibility and hence worked on different browsers like Google Chrome, Safari, Opera, Firefox, and Internet Explorer.',
            'Developed and direct software system testing and validation procedures, programming, and documentation.',
          ],
          location: 'New York, USA',
          startDate: 'Sep 2015',
          endDate: 'July 2022',
        },
        {
          id: 2,
          title: 'Bigleaf Networks',
          description: [
            'Developed frontend components and features for a large-scale web application using React and TypeScript & Storybook.',
            'Utilized ES6 Modules and component-based architecture to build scalable and reusable code.',
            'Applied promises and async/await syntax to handle asynchronous operations to improve the performance and maintainability of the code.',
            'Implemented frontend testing strategies to identify and fix bugs and improve overall software quality.',
          ],
          location: 'Oregon, USA',
          startDate: 'July 2022',
          endDate: 'July 2023',
        },
        {
          id: 3,
          title: 'Wells Fargo',
          description: [
            'Designed and developed responsive user interfaces for web applications using Angular and Typescript & React, ensuring a seamless user experience across multiple devices',
            'Built reusable, accessible components with Material UI and Angular Material, enhancing design consistency and improving UI development speed.',
            'Proficient in building reusable components, managing state, optimizing for performance, and implementing responsible designs with best practices of WCAG guidelines.',
            'Optimized front-end performance by implementing efficient coding practices, utilizing technologies such as HTML, CSS, and JavaScript.',
          ],
          location: 'New Jersey, USA',
          startDate: 'July 2023',
          endDate: 'Present',
        },
      ]);
  
      const isExpanded = ref<{ [key: number]: boolean }>({});
  
      const sortedProjects = computed(() => {
        return projects.value.sort((a, b) => {
          return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        });
      });
  
      const toggleDescription = (projectId: number) => {
        isExpanded.value[projectId] = !isExpanded.value[projectId];
      };
  
      return {
        projects,
        sortedProjects,
        isExpanded,
        toggleDescription,
      };
    },
  });
  </script>
  
  <style scoped>
  .projects {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 40px;
    color: #052C58;
  }
  
  .project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
  
  .project-item {
    background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    flex-basis: calc(33.33% - 20px);
    transition: transform 0.3s, box-shadow 0.3s;
    color: #052C58;
    box-sizing: border-box;
  }
  
  .project-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .project-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #052C58;
  }
  
  .project-date,
  .project-location {
    font-size: 1rem;
    color: #555;
    margin-bottom: 5px;
  }
  
  .project-description {
    list-style-type: disc;
    padding-left: 20px;
    color: #052C58;
    word-wrap: break-word;
  }
  
  .project-description li {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  
  button {
    background-color: #052C58;
    color: white;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #1a3d6d;
  }
  
  @media (max-width: 1024px) {
    .project-item {
      flex-basis: calc(50% - 20px);
    }
  }
  
  @media (max-width: 768px) {
    .project-item {
      flex-basis: 100%;
    }
  
    h1 {
      font-size: 1.5rem;
      color: #052C58;
    }
  }
  </style>
  