/**
 *
 * @param {string} stack
 * @param {string} level 
 * @param {string} pkg 
 * @param {string} message 
 */
export async function Log(stack, level, pkg, message) {
  // Put your active authorization token here
  const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJiaGFyZ2F2c2FpYWRoaW11bGFtMTJAZ21haWwuY29tIiwiZXhwIjoxNzgwNjM3MzIwLCJpYXQiOjE3ODA2MzY0MjAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhNzcwYTBiMS00NzU5LTQyODgtOWQyNi05NDBmNjg3MDEwZGQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhZGhpbXVsYW0gYmhhcmdhdiBzYWkgdmlzd2FuYXRoIiwic3ViIjoiMTEwMzQzYjQtNGFmNS00ODQxLWJiYTgtZjZkOTdhOWQ4ZTUzIn0sImVtYWlsIjoiYmhhcmdhdnNhaWFkaGltdWxhbTEyQGdtYWlsLmNvbSIsIm5hbWUiOiJhZGhpbXVsYW0gYmhhcmdhdiBzYWkgdmlzd2FuYXRoIiwicm9sbE5vIjoiMjNicTFhNDIwMSIsImFjY2Vzc0NvZGUiOiJRUWRFWXkiLCJjbGllbnRJRCI6IjExMDM0M2I0LTRhZjUtNDg0MS1iYmE4LWY2ZDk3YTlkOGU1MyIsImNsaWVudFNlY3JldCI6InlOQ0RtU1loRGFZc0h4aFcifQ.5nEorFq6ABHh6rZ89b_5bCPH10f-pYqqcuHDmmWylfo";

  const payload = {
    stack: stack,
    level: level,
    package: pkg,
    message: message
  };

  try {
    const response = await fetch('http://4.224.186.213/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log("Log recorded successfully on server. ID:", data.logID);
    return data;
  } catch (error) {
    console.error("Failed to send log to evaluation server:", error);
  }
}