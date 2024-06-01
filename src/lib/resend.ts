import EmailTemplate from '@/components/email-template';
import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (to = [], payload: any) => {
  const { data, error } = await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: to,
    subject: 'Hello world',
    react: EmailTemplate(payload) as React.ReactElement,
  });
  if (error) {
    throw error;
  }
  return data;
};
