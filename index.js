const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const routes = [
  {
    context: "/api/authentication",
    target: "https://localhost:7232",
    secure: false,
    auth: false,
    changeOrigin: true,
    pathRewrite: { "^/api/authentication": "/authentication" },
    methods: ["GET", "POST", "PUT"],
  },
  {
    context: "/api/community",
    target: "https://localhost:7132",
    pathRewrite: { "^/api/community": "/community" },
    methods: ["GET", "POST", "PUT"],
  },
  {
    context: "/api/event",
    target: "https://localhost:7050",
    pathRewrite: { "^/api/event": "/event" },
    methods: ["GET", "POST", "PUT"],
  },
  // Add more routes as needed
];

routes.forEach((route) => {
  app.use(
    route.context,
    createProxyMiddleware({
      target: route.target,
      pathRewrite: route.pathRewrite,
      changeOrigin: true,
      secure: false,
      onProxyReq: (proxyReq, req) => {
        if (route.methods.includes(req.method)) {
          // Modify headers or perform other actions before sending the request
        }
      },
    })
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Gateway server is running on port ${PORT}`);
});
