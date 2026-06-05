import { useState, useEffect } from 'react';

export default function App() {
  const [list, setList] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    fetch('http://4.224.186.213/evaluation-service/notifications', {
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJiaGFyZ2F2c2FpYWRoaW11bGFtMTJAZ21haWwuY29tIiwiZXhwIjoxNzgwNjM4Mzk0LCJpYXQiOjE3ODA2Mzc0OTQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJlOWQwNjlhNS02OGU3LTQ5ZWUtYjRkZS0wYWRiYTA3Y2QzNDIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhZGhpbXVsYW0gYmhhcmdhdiBzYWkgdmlzd2FuYXRoIiwic3ViIjoiMTEwMzQzYjQtNGFmNS00ODQxLWJiYTgtZjZkOTdhOWQ4ZTUzIn0sImVtYWlsIjoiYmhhcmdhdnNhaWFkaGltdWxhbTEyQGdtYWlsLmNvbSIsIm5hbWUiOiJhZGhpbXVsYW0gYmhhcmdhdiBzYWkgdmlzd2FuYXRoIiwicm9sbE5vIjoiMjNicTFhNDIwMSIsImFjY2Vzc0NvZGUiOiJRUWRFWXkiLCJjbGllbnRJRCI6IjExMDM0M2I0LTRhZjUtNDg0MS1iYmE4LWY2ZDk3YTlkOGU1MyIsImNsaWVudFNlY3JldCI6InlOQ0RtU1loRGFZc0h4aFcifQ.cvSpcjxFmzFCvMMe4IdGsb39tKqRcJY2vhjfSdcuSGs' 
      }
    }) 
      .then(r => r.json())
      .then(d => setList(d.notifications || []));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Unread: {list.filter(x => !read.includes(x.ID)).length}</h1>

      {list.map(x => (
        <p 
          key={x.ID} 
          onClick={() => setRead([...read, x.ID])}
      
          style={{ cursor: 'pointer', padding: '5px', borderBottom: '1px solid #eee' }}
        >
          <b>[{x.Type}]</b> {x.Message} — {read.includes(x.ID) ? 'Read' : 'New'}
        </p>
      ))}
    </div>
  );
}