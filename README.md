# What is this?
A simple project that sends daily astronomy images directly to your email. The tools used are given below:

- [Resend](<https://resend.com>) - for sending emails
- [Api](<https://apis.nasa.gov>) - api to get the images from
- [NextJs](<https://nextjs.com>) - the framework used

# How to setup the project?
1. Clone the repo by using `git clone https://github.com/kxnalpk/nasa-images.git`.
2. Rename `.env.example` to `.env` and add your own api keys and emails.
3. Use `npm install` to install all the packages.
4. Use `npm run dev` to run this locally.

# How to get the API keys?
1. RESEND_API_KEY: Create an account at <https://resend.com> and head over to <https://resend.com/api-keys> and get the key.
2. NASA_API_KEY: Go to <https://api.nasa.gov/> and simply fill the form to get access to NASA's API key.

# How to setup & test emails?
1. First of all, you need to register your domain at <https://resend.com/domains>. Use onboarding@resend.com for testing if you don't own one.
2. Finally, use an application like [postman](<https://postman.com>) to create a `POST` http request for `http://localhost:3000/api/send`.
