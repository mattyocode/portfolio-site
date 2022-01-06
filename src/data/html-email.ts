import { NextApiRequest } from 'next';

export const htmlEmailContent = (
  req: NextApiRequest
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Portfolio Site Contact Form Message</title>
  <meta name="description" content="Portfolio Site Contact Form Message">
  <meta name="author" content="Portfolio Site">
<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>
  <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
        </div>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
        <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
        <div style="font-size: 16px;">
        <p>Message:</p>
        <p>${req.body.message}</p>
        <br>
        </div>
        <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Matt Oliver</p>
        </div>
</body>
</html>
`;
