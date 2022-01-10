export default async function sendContactRequest({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): Promise<{
  detail: string;
}> {
  const config = {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let data: {
    detail: string;
  };

  try {
    const response = await fetch('/api/sendgrid/', config);
    data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Promise.reject(err.message);
    } else {
      return Promise.reject('something went wrong');
    }
  }
}
