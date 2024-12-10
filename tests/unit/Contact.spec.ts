import { render, screen, fireEvent, waitFor } from '@testing-library/vue';
import Contact from '../../src/views/Contact.vue'; // Adjust path as needed

describe('Contact Form', () => {
  it('should display error when the name field is empty', async () => {
    render(Contact);

    const nameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email Address');
    const messageInput = screen.getByLabelText('Message');
    const submitButton = screen.getByRole('button', { name: /Send Message/i });

    // Simulate empty name field
    await fireEvent.update(nameInput, '');
    await fireEvent.update(emailInput, 'test@example.com');
    await fireEvent.update(messageInput, 'Test message');

    await fireEvent.click(submitButton);

    // Wait for error message
    expect(screen.getByText('Name is required.')).toBeInTheDocument();
  });

  it('should submit form when all fields are valid', async () => {
    render(Contact);

    const nameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email Address');
    const messageInput = screen.getByLabelText('Message');
    const submitButton = screen.getByRole('button', { name: /Send Message/i });

    await fireEvent.update(nameInput, 'John Doe');
    await fireEvent.update(emailInput, 'john.doe@example.com');
    await fireEvent.update(messageInput, 'Test message');

    await fireEvent.click(submitButton);

    // Check for button text message
    await waitFor(() => screen.getByText('Sending...'));

    expect(screen.getByText('Sending...')).toBeInTheDocument();
  });
});
