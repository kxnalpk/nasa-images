import { Resend } from 'resend';
import * as React from 'react';
import { Img, Hr, Container, Text, Heading, Html } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Template {
  firstName: string;
  nasaData: any;
}

const Email: React.FC<Readonly<Template>> = ({
  nasaData,
}) => (
  <Html>
<Container>

  <Heading>{nasaData.title}</Heading>
  <Text>{nasaData.explanation}</Text>
  
  <Hr/>

<Img src={nasaData.url} alt='image' width={600}></Img>
</Container>
</Html>
);

export async function GET() {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`);
    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

export async function POST() {
  try {
    const nasaResponse = await GET();
    const nasaData = await nasaResponse.json();

    const { data, error } = await resend.emails.send({
<<<<<<< HEAD
      from: `Nasa <${process.env.SENDER}>`,
      to: [`${process.env.RECEIVER}`],
=======
      from: "Nasa <noreply@kunalsh.com>",
      to: ["kunalsh5739@gmail.com"],
>>>>>>> 41bb29d40c2310c0f36a0e09b4e5ede9611bd33a
      subject: "Your daily dose of space images",
      react: <Email firstName="astronomy" nasaData={nasaData} />,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ data }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
