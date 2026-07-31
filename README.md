# 🏛️ CityPulse — Civic Issue & Municipal Management Platform

> **A Mobile-First, Real-Time Civic Tech & Municipal Dispatch Platform built for Hackathons.**

---

## 🌟 Overview
**CityPulse** bridges the gap between urban residents and municipal public works departments. Citizens can instantly report local infrastructure failures (potholes, streetlights, garbage overflow, water pipe ruptures) with pin-point GPS accuracy, drag-and-drop photo evidence, and community upvoting. Simultaneously, city workers and department managers receive an operational command dashboard to triage tickets, assign repair crews, and track resolution metrics in real time.

---

## ✨ Key Features

### 📱 1. Public Citizen Portal
- **Interactive Leaflet Location Picker:** Click on an interactive dark-themed map to set exact GPS coordinates.
- **Drag-and-Drop Photo Upload:** Upload camera photos or choose pre-loaded evidence presets.
- **Categorized Issue Filing:** Filter & report under *Road & Potholes*, *Waste Management*, *Street Lighting*, and *Water Leakage / Sewage*.
- **Priority Selector:** File reports as *Low*, *Medium*, *High*, or *Emergency*.
- **Live Feed (List vs Map View):** Toggle seamlessly between a card feed and an interactive map showing color-coded priority pins with popups.
- **Community Upvoting:** Citizens upvote existing reports to elevate urgent neighborhood issues.

### 🛡️ 2. Municipal Admin / City Worker Dashboard
- **Real-Time Operational Stats:** Track Total Complaints, Pending Dispatch, Critical Emergencies, and Average Resolution Time (*1.8 Days*).
- **Interactive Management Table:** View category badges, GPS addresses, reporter info, and upvote counters.
- **Live Status Control:** Change ticket lifecycle states in real-time (`Open` → `Assigned` → `In Progress` → `Resolved`).
- **Workforce Assignment:** Dispatch specialized municipal units (*Road Maintenance Dept*, *Water Utilities Rapid Response*, *Sanitation Crew B*, *Electrical Unit*, etc.).
- **Ticket Inspector Modal:** Inspect photos, geolocation links, reporter contacts, and audit controls.

### 🔄 3. Persistent LocalStorage Engine
- **Zero Backend Setup:** Instant persistence across browser refreshes using browser `localStorage`.
- **Pre-Loaded Sample Data:** 6 realistic civic reports pre-loaded out-of-the-box so maps and admin tables populate immediately on demo launch.
- **Role Switcher Header:** Toggle between *Citizen Portal* and *Municipal Admin Dashboard* with 1 click.

---

## 🛠️ Tech Stack

- **Frontend Core:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 + Custom Glassmorphic Dark Tokens
- **GIS Mapping:** Leaflet 1.9 + React-Leaflet
- **Icons:** Lucide React Icons
- **State & Data Persistence:** Browser LocalStorage Engine with Custom Event Emitter
- **antigravity IDE**
- **gemini AI**

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### 2. Installation
```bash
# Clone repository
git clone https://github.com/your-username/citypulse.git
cd vibe-coding

# Install dependencies
npm install
```

### 3. Running Locally (Development Mode)
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

---

## 🌐 Deployment Guide

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project root directory.
3. Select defaults (Build Command: `npm run build`, Output Directory: `dist`).

### Deploying to Netlify / GitHub Pages
1. Push repository to GitHub.
2. Link repository on Netlify or Vercel for instant automated SSL deployment.

---

