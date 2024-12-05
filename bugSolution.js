```javascript
// pages/about.js

export default async function About() {
  try {
    const data = await fetch('/api/data');
    if (!data.ok) {
      throw new Error(`API request failed with status ${data.status}`);
    }
    const json = await data.json();
    return (
      <div>
        <h1>About Page</h1>
        <p>Data from API: {JSON.stringify(json)}</p>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>About Page</h1>
        <p>Error fetching data: {error.message}</p>
      </div>
    );
  }
}
```