import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import Footer from './components/Home/Footer/index.jsx'
import '@testing-library/jest-dom'; // Import this line


jest.mock('axios');

describe('Footer component', () => {
    it('displays thank you message after successful form submission', async () => {
        const { getByText, getByPlaceholderText } = render(<Footer />);

        const emailInput = getByPlaceholderText('Enter your email');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        axios.post.mockResolvedValueOnce({});

        fireEvent.submit(emailInput);

        await waitFor(() => {
            const form = emailInput.form;
            const formData = new FormData(form);

            expect(axios.post).toHaveBeenCalledWith(
                'https://84574316.sibforms.com/serve/MUIEAPO4ndBpCiDNaGmsPq_U3W9ZwOoMaRU4ctW1MD9F6VBBqJdf9yTDl_vdH5jwrFOTt3t9mnvN1DxIWkIL-gtqnATF2H97YLcRtkih9HiCMZb_JGjMzgZct6mou6UOXDPO5rWVsAi_zaPZMZbJwoWe2-A9XSdCAIfIcZB9E2kgMqCY3hXM5ATl2chAAA3qTjvuZY_jdoGBkFXF',
                formData
            );
            expect(getByText('Thank you for subscribing!')).toBeInTheDocument();

        });


    });

    it('displays form when not submitted', () => {
        render(<Footer />);

        expect(screen.queryByText('Thank you for subscribing!')).not.toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    });
});
