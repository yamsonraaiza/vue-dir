module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.gmail.com'),
          port: env('SMTP_PORT', 465),
          auth: {
            user: env('GMAIL_USER'),
            pass: env('GMAIL_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'noreply@recipee.com',
          defaultReplyTo: 'noreply@recipee.com',
        },
      },
    },
  });