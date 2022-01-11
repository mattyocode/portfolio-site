import 'whatwg-fetch';
import { rest } from 'msw';

// const apiUrl = `${process.env.API_ROUTE}`;

const handlers = [
  rest.post(`/api/sendgrid/`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ detail: 'Message sent successfully.' })
    );
  }),
];

export { handlers };
