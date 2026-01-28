# Vue Blog Application

A simple Vue 3 blog application using Vue Router that fetches blog posts from a live API.  
Users can view a list of posts on the Home Page, click to see a detailed post, and navigate back. The app also handles 404 pages and displays loading states.

## Features

- Home Page: Displays a list of posts with title and excerpt
- Detail Page: Shows the full content of a selected post
- Navigation: Users can go back or return to Home
- 404 Page: Fallback page for invalid routes
- Error Handling: Displays errors when API fails
- Loading States: Shows a spinner while data is being fetched
- Lazy Loading: Components are loaded as needed

## Technologies Used

- Vue 3
- Vue Router 4
- Axios for API requests
- Vite for development and build
- Tailwind CSS for styling (optional, can use plain CSS)

Git repository:

https://github.com/euniicee/vueblogapp.git

Project Structure
src/
  api/          # Axios API calls
    posts.js
  components/   # Reusable components (LoadingSpinner, ErrorBoundary)
  views/        # Pages (HomePage.vue, DetailPage.vue, NotFound.vue)
  router/       # Vue Router configuration
  App.vue       # Root component
  main.js       # App entry