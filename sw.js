self.addEventListener('fetch', async event => {
    // Get the response from the server
    const response = await event.respondWith(fetch(event.request));
  
    // Set the COOP header
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin same-origin-allow-popups');
  
    // Return the modified response
    return response;
  });