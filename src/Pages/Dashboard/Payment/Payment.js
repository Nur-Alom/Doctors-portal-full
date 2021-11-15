import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvmiKK4aMQOy8nYt0GpU5jQSeDqCMwqFw2YU3Rdp4eGT576pYfxA35hNAW1cKNIxfvzXXWb7VqpwIIGQwt9caIx00aLYUuG8M')

const Payment = () => {
    const [appointment, setAppointment] = useState({});
    const { appointmentId } = useParams();

    useEffect(() => {
        fetch(`https://limitless-thicket-61522.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])

    return (
        <div>
            <h2>Please Pay For: {appointmentId}</h2>
            <h1>Pay: ${appointment.price}</h1>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment} />
            </Elements>}
        </div>
    );
};

export default Payment;