<template>
    <div class="contact-form">
      <h2>Contact Me</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            :class="{'error': errors.name}"
          />
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
        </div>
  
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            :class="{'error': errors.email}"
          />
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>
  
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Your Message"
            :class="{'error': errors.message}"
            rows="10"
          ></textarea>
          <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
        </div>
  
        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
  
        <!-- <p v-if="formStatus" :class="formStatus.type">{{ formStatus.message }}</p> -->
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  
  export default defineComponent({
    name: 'Contact',
    setup() {
      // Form data and state
      const form = ref({
        name: '',
        email: '',
        message: '',
      });
  
      const errors = ref({
        name: '',
        email: '',
        message: '',
      });
  
      const isSubmitting = ref(false);
      const formStatus = ref<{ type: string; message: string } | null>(null);
  
      const validateForm = () => {
        errors.value.name = form.value.name ? '' : 'Name is required.';
        errors.value.email = form.value.email ? '' : 'Email is required.';
        errors.value.message = form.value.message ? '' : 'Message is required.';
        return !Object.values(errors.value).some((error: string) => error !== '');
      };
  
      const handleSubmit = async () => {
        if (!validateForm()) return;
  
        isSubmitting.value = true;
        formStatus.value = null;
  
        try {
          const response = await axios.post('https://your-api-endpoint.com/contact', form.value, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.status === 200) {
            formStatus.value = {
              type: 'success',
              message: 'Your message has been sent successfully!',
            };
            toast('Your message has been sent successfully!');
            form.value = { name: '', email: '', message: '' };
          } else {
            throw new Error('Failed to send the message');
          }
        } catch (error: any) {
          formStatus.value = {
            type: 'error',
            message: 'Something went wrong. Please try again later.',
          };
          toast('Something went wrong. Please try again later.');
        } finally {
          isSubmitting.value = false;
        }
      };
  
      return {
        form,
        errors,
        isSubmitting,
        formStatus,
        handleSubmit,
      };
    },
  });
  </script>
  
  
  <style scoped>
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    color: #052C58;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .form-group {
    margin-bottom: 15px;
    width: 100%;
  }
  
  input, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #052C58;
  }
  
  button {
    width: auto;
    padding: 10px 20px;
    background-color: #052C58;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 70px;
  }
  
  button:disabled {
    background-color: #ccc;
  }
  
  .error {
    border-color: red;
  }
  
  .error-message {
    color: red;
    font-size: 0.875rem;
  }
  
  .success {
    color: green;
    font-size: 1rem;
  }
  
  .error {
    color: red;
    font-size: 1rem;
  }
  </style>
  