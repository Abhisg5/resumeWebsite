# Resume Website

A visually engaging, animated 3D website showcasing my resume and skills using cutting-edge technologies.

---

## **Technologies Used**

### **Frontend**
- **React**: A JavaScript library for building the user interface.
- **@react-three/fiber**: React renderer for Three.js, enabling declarative 3D scenes.
- **@react-three/drei**: A collection of helpers and abstractions for Three.js, simplifying common 3D tasks.
- **Three.js**: A powerful library for creating and rendering 3D graphics.
- **GSAP (GreenSock Animation Platform)**: Smooth animations for camera movements and interactions.

### **Backend**
- **FastAPI**: A modern, high-performance Python framework for building APIs, serving dynamic resume data.

### **Database**
- **MongoDB**: A NoSQL database for efficiently storing and retrieving structured resume and project information.

### **Containerization**
- **Docker**: Containerized deployment for both the frontend and backend, ensuring consistency across environments.

### **CI/CD**
- **GitHub Actions**: Automated workflows for building, testing, and deploying the application.

---
## **Getting Started**

### **Frontend Setup**
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install Dependencies
   ```bash
      npm install
      ```
3. Start the development server
   ```bash
   npm start
   ```
### **Backend Setup**
1. Navigate to the `backend` directory::
   ```bash
   cd backend
   ```
2. Install Dependencies
   ```bash
      pip install -r requirements.txt
      ```
3. Start the FastAPI server
   ```bash
   uvicorn main:app --reload
   ```
## **Deployment**  
- **Frontend**: Hosted on Vercel
- **Backend**: Hosted on Render
- **DB**: Hosted on MongoDB Atlas
- **CI/CD**: Automated workflows via Github Actions
