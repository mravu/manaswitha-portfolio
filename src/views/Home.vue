<template>
    <div class="home-container">
      <!-- Profile Section -->
      <div class="profile-container">
        <img class="profile-pic" src="@/assets/picture.jpg" alt="Profile Picture" />
        <h1>{{ name }}</h1>
        <p class="job-title">Senior Software Engineer - Frontend</p>
        <div class="contact-info">  
            <p>Phone: 
      <a :href="`tel:${phone}`">  
       <i class="fa fa-phone" aria-hidden="true"></i>  {{phone}}
      </a>  </p>
      <p>Email: 
      <a :href="`mailto:${email}`">  
       <i class="fa fa-envelope" aria-hidden="true"></i>  {{ email }}
      </a>  </p>
    </div>  
        <div class="social-links">
          <a href="https://www.linkedin.com/in/manaswitha-ravu/" target="_blank" rel="noopener noreferrer"> <i class="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
          <a href="https://github.com/mravu" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
  
      <!-- About Section -->
      <section id="about" class="about-section">
        <h2>Professional Summary</h2>
        <p>{{ aboutText }}</p>
      </section>
  
      <!-- Skills Section -->
      <section id="skills" class="skills-section">
        <h2>Skills</h2>
        <div class="skills">
          <div class="skill" v-for="(skill, index) in skills" :key="index">
            <span>{{ skill }}</span>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  
  export default {
    name: 'Home',
    setup() {
      const profilePic = ref('@/assets/picture.jpg');
      const name = ref('Manaswitha Ravu');
      const phone = ref('216-496-2565');
      const email = ref('manaswitha.ravu@gmail.com');
      const aboutText = ref(`A senior Frontend Engineer with 9+ years of experience in Frontend development, responsive web designing, web accessibility adhering to WCAG guidelines. Delivered high-quality web applications and user interfaces using HTML, CSS, and JavaScript, with expertise in frontend frameworks like React, Angular, and Vue & Node. A strong history of leading diverse web development teams in agile methodology. Experienced in leading and collaborating with cross-functional teams, providing technical guidance and mentorship in delivering a world- class user experience.`);
      const skills = ref(['HTML', 'Web Development', 'JavaScript', 'Vue', 'TypeScript', 'React', 'Angular','SCSS', 'Webbpack', 'ES6', 'WCAG', 'Material UI', 'Kendo UI','Story book', 'Figma', 'Jest', 'Jasmine', 'Karma', 'Node', 'SDLC', 'MySQL', 'Java Spring', 'Rest API']);
      
      return {
        profilePic,
        name,
        phone,
        email,
        aboutText,
        skills
      };
    }
  };
  </script>
  
  <style scoped>
  .home-container {
    text-align: center;
    padding: 40px 20px;
    color: #052C58;
  }
  
  .profile-container {
    margin-bottom: 40px;
  }
  
  .profile-pic {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-top: 20px;
    color: #052C58;
  }
  
  .job-title {
    font-size: 1.2rem;
    margin-top: 10px;
    color: #052C58;
  }

  .contact-info {  
  margin-top: 20px;  
  color: #052C58;
}  
  
.contact-info a {  
  margin: 0 10px;  
  font-size: 12px;  
  color: #052C58;
}  
  
.contact-info a:hover {  
    color: #052C58;
}  
  
  .social-links a {
    margin: 10px;
    font-size: 12px; 
    color: blue;
    text-decoration: none;
    font-weight: bold;
  }
  
  .social-links a:hover {
    text-decoration: underline;
  }
  
  #about,
  #skills {
    padding: 20px;
    margin-top: 40px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  #about h2,
  #skills h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
  
  .skill {
    background-color: #f1f1f1;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #052C58;
  }
  </style>
  