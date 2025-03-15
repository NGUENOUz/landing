// app/api/lygosProxy/route.ts

export async function POST(req: Request) {
    try {
      const body = await req.json();
      const response = await fetch('https://api.lygosapp.com/v1/gateway', {
        method: 'POST',
        headers: {
          'api-key': 'lygosapp-cd79b88c-1318-4e88-abff-804a77da140d',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return Response.json(data);
    } catch (error: any) {
      console.error('Error proxying request:', error);
      return Response.json({ error: 'Proxy error' }, { status: 500 });
    }
  }