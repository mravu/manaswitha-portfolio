<template>
    <div class="about-me">
      <div class="content">
        <h1>About Me</h1>
        <p>
          Hi there! I’m <strong>Manaswitha Ravu</strong>, an engineer by profession and an adventurer at heart. 
          When I’m not designing solutions, I’m exploring new hobbies, traveling, or simply enjoying 
          life’s simple pleasures.
        </p>
        <ul>
          <li><strong>Morning Ritual:</strong> Start my day with a run and a good cup of coffee.</li>
          <li><strong>Weekend Escapes:</strong> Spend time with my one-year-old boy, and discovering new places.</li>
          <li><strong>Creative Passion:</strong> Experimenting with cooking and DIY projects.</li>
        </ul>
        <p>
          Life to me is about creating, exploring, and connecting with the world around us. Let’s make 
          every moment count!
        </p>
      </div>
      <div class="image">
        <img src="@/assets/family2.jpeg" alt="Lifestyle" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'About',
  };
  </script>
  
  <style scoped>
  .about-me {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    color: #052C58;
  }
  
  .content {
    max-width: 50%;
  }
  
  .content h1 {
    font-size: 1.8rem;
    color: #052C58;
  }
  
  .content p {
    color: #052C58;
    line-height: 1.6;
  }
  
  .content ul {
    list-style-type: none;
    padding: 0;
    color: #052C58;
  }
  
  .content li {
    margin: 10px 0;
    color: #052C58;
  }
  
  .image {
    max-width: 40%;
    display: flex;
    justify-content: center;
  }
  
  .image img {
    width: 300px;  
    height: 300px; 
    border-radius: 50%;  
    object-fit: cover;  
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
    border: 3px solid #fff;
  }
  </style>
  