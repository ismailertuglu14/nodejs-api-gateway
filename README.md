# API Gateway with Express and http-proxy-middleware

This repository contains an example of an API gateway created using Express.js and the http-proxy-middleware. This gateway can route specific API routes to different target backend servers and modify requests as needed. For instance, it can route the "/api/authentication" route to a local server, the "/api/community" route to another server, and the "/api/event" route to yet another server.

## Requirements

To run this project in a local environment, you'll need the following:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)

## Installation

1. Clone this repository or download it as a ZIP file:

   ```shell
   git clone https://github.com/yourusername/your-repo.git
   
2. Navigate to the project directory:
   ```shell
   git clone https://github.com/yourusername/your-repo.git
3. Install project dependencies:
   ```shell
   npm install


## Routing Settings
1. This API gateway includes an array of route settings called routes. Each route setting defines how a specific API route should be routed and modified. Here's an example route setting:
   ```shell
   {
   context: "/api/authentication",
   target: "https://localhost:7232",
   secure: false,
   auth: false,
   changeOrigin: true,
   pathRewrite: { "^/api/authentication": "/authentication" },
   methods: ["GET", "POST", "PUT"],
   }
<br/>
   
| Alan           | Açıklama                                                           |
| ---------------|-------------------------------------------------------------------|
| `context`      | Anahtar bir API rotasını belirtir.                                |
| `target`       | Yönlendirilen hedef sunucunun URL'sini belirtir.                   |
| `secure`       | SSL sertifikası gerekip gerekmediğini belirtir (true veya false).  |
| `auth`         | Kimlik doğrulama gerekip gerekmediğini belirtir (true veya false). |
| `changeOrigin` | İstek başlıklarında `origin` alanının değiştirilip değiştirilmeyeceğini belirtir (true veya false). |
| `pathRewrite`  | Rota yeniden yazma kurallarını tanımlar.                           |
| `methods`      | Hangi HTTP yöntemlerinin bu rotanın yönlendirilmesine izin verildiğini belirtir. |




