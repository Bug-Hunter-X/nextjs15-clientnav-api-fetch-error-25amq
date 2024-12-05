# Next.js 15 Client-Side Navigation Crash on API Fetch Failure

This repository demonstrates a bug in Next.js 15 where client-side navigation to a page that fetches data from an API results in a crash if the API request fails. The issue stems from the lack of proper error handling for failed fetch requests.

## Bug Description

A Next.js application with client-side navigation is used to navigate between pages. One page fetches data from an API endpoint. If the API request fails, the application crashes with a runtime error instead of gracefully handling the failure.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.
5. If the API request (`/api/data`) fails (e.g., due to a network error or the server not being available), the application will crash.

## Solution

The solution involves adding proper error handling to the API request. The `fetch` function's promise should be handled using `.then` and `.catch` blocks to gracefully handle both success and failure scenarios.  The updated code is provided in the `bugSolution.js` file.  This includes a fallback mechanism to display an error message when the API call fails.