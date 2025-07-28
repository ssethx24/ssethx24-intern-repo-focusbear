### Reflection

**Why is it useful to create a reusable Axios instance?**  
A reusable Axios instance centralizes configuration like base URLs, headers, and timeouts, making your code cleaner and easier to maintain. It ensures all API requests use consistent settings and allows you to update configurations in one place.

**How does intercepting requests help with authentication?**  
Request interceptors let you automatically attach authentication tokens to every outgoing request. This means you don’t have to manually add tokens each time, reducing errors and keeping your code DRY (Don’t Repeat Yourself).

**What happens if an API request times out, and how can you handle it?**  
If an API request times out, Axios throws an error. You can handle this by catching the error and showing a user-friendly message or retrying the request. Setting a timeout prevents your app from hanging if the server is slow or unresponsive.

API setup can be found in my react app folder. 