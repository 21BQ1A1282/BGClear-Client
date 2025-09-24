<h2 align="center">
   🎨 BGClear Frontend
    <div><a href="https://bgclear-v1.netlify.app/">🚀 Live At </a></div>
</h2>

<h3>A modern, responsive React application for instant background removal with AI-powered image processing and credit-based payment system.</h3>

## 📸 Screenshots
<div>
  <h3>Landing Page</h3>
  <img width="1882" height="837" alt="Screenshot (82)" src="https://github.com/user-attachments/assets/100e14e4-6503-470e-88f3-6b53dd5980a6" />
</div>

<div>
  <h3>Credit Purchase Pricing Page</h3>
  <img width="1878" height="845" alt="Screenshot (85)" src="https://github.com/user-attachments/assets/f77c39e9-13fd-4263-b9c2-ab832ae7819d" />
</div>

## ✨ Features
🤖 **AI Background Removal** - Instant background removal using Clipdrop AI API

🔐 **Secure Authentication** - Clerk.com integration with seamless login/signup

💳 **Credit-Based System** - Purchase credits with Razorpay payment integration

📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

🔄 **Real-time Sync** - Automatic user credit synchronization across all components

🎨 **Modern UI/UX** - Beautiful gradients and smooth animations with Tailwind CSS

📊 **Image Comparison** - Interactive before/after slider for quality demonstration

⚡ **Fast Processing** - Optimized image upload and processing pipeline

## 🛠️ Technology Stack
- **Framework**: React 18.2.0
  
- **Build Tool**: Vite
  
- **Styling**: Tailwind CSS
  
- **Authentication**: Clerk React SDK
  
- **Payment Integration**: Razorpay Checkout
  
- **Routing**: React Router DOM
  
- **HTTP Client**: Axios
  
- **Icons**: Lucide React
  
- **Notifications**: React Hot Toast
  
- **State Management**: React Context API + Hooks
  
- **Image Processing**: Base64 encoding/decoding

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

  1. **Clone the repository**
     ```bash
     git clone https://github.com/21BQ1A1282/BGClear-Client.git
     cd BGClear-Client
     ```
  2. **Install dependencies**
     ```bash
     npm install
     ```
     
  3. **Configure environment variables**
     ```bash
     cp .env
     ```
  4. **Edit .env with your configuration**
     ```env
     VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
     VITE_BACKEND_URL=https://your-spring-boot-api.com
     VITE_RAZORPAY_KEY_ID=your-razorpay-key-id
     ```
  5. **Start the development server**
     ```bash
     npm run dev
     ```
  6. **Open your browser**
     Navigate to
     ```bash
     http://localhost:5173
     ```

## 🔌 API Integration
The frontend communicates with a Spring Boot backend through REST APIs:

- Authentication: JWT token-based authentication via Clerk
- User Management: Sync user data and credit balances
- Image Processing: Upload images for background removal
- Credit Management: Real-time credit updates and validation

## 🎨 UI/UX Features
- Gradient Design System - Consistent red-orange-yellow gradients
- Interactive Sliders - Before/after image comparison
- Loading States - Smooth loading animations for image processing
- Mobile-First - Responsive design for all screen sizes
- Error Handling - User-friendly error messages and fallbacks

## ⚠️ Note
This frontend requires the BGClear Backend to be running for full functionality.

<h2 align="center"> 🎨 Transform Your Images Instantly with BGClear AI Magic </h2> 
