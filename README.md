# Exara Landing Page

Exara is an AI-powered browser extension that instantly explains unfamiliar words and terms right on the page. This repository contains the landing website built with Nuxt 3 to showcase and promote the extension.

The Chrome extension itself can be found here: [exara-extension](https://github.com/denisoed/exara-extension).

<video src="public/demo.mp4" autoplay loop muted playsinline></video>

## Technologies Used

- **Nuxt 3** and **Vue 3** for the frontend framework
- **Nuxt UI** (Tailwind-based design system)
- **Pinia** for state management
- **TypeScript**
- **Nginx** to serve the generated static site in production

## Docker Setup for Production

The project includes Docker configuration to easily deploy the static site in a production environment.

### Building the Docker Image Manually

To build the Docker image manually, run:

```bash
docker build -t exara-landing .
```

### Running the Docker Container Manually

To run the container after building:

```bash
docker run -p 3000:3000 exara-landing
```

This will start the Nginx server and make the website available at http://localhost:3000.

### Configuration

The Docker setup uses Nginx to serve the static files with the following optimizations:

- Gzip compression for faster content delivery
- Proper cache headers for different file types
- Basic security headers
- Error page handling

You can modify the `nginx.conf` file to adjust the server configuration if needed.

### Troubleshooting

If you encounter 403 Forbidden errors when accessing SVG files:

1. Make sure SVG files exist in the correct location
2. Check that file permissions are set correctly (755)
3. Verify that the Nginx configuration includes proper MIME types for SVG files
