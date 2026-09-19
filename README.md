# DropBack – Don’t Waste the Last Drop 💧

> **An open-source hardware and software system to capture leftover drinking water and divert it for sustainable daily non-potable uses like gardening and cleaning.**

---

## 📌 Overview

### What is DropBack?
**DropBack** (branded as the *Second-Use Water Point*) is an open-source community initiative designed to prevent unconsumed bottled water from ending up in trash cans or drains. It combines a physical filtration bin with an optional IoT digital system to measure and reuse water.

### Why was it built?
Millions of people leave 100–200 ml of clean drinking water in bottles every day. Existing infrastructure treats this water as liquid waste. DropBack provides a simple collection alternative that saves thousands of liters of clean water across campuses, offices, and events.

### Where can it be used?
* **Public Places:** Schools, colleges, corporate campuses, airports, transit hubs, and event grounds.
* **Residential:** Apartments, individual houses, and housing societies.

---

## 🚨 Problem Statement

> **The Problem:** In public spaces, thousands of people discard water bottles with leftover clean drinking water into trash bins or drains. For a campus of 1,000 people, losing 150 ml per person leads to **150+ Liters of potable water wasted every single day**.

**How DropBack solves it:**

* Converts liquid waste points into visible **Second-Use Water Points**.
* Redirects collected clean water to gardens, floor mopping, and flushing.
* Provides real-time visual tracking to reward sustainable habits.

---

## ✨ Features

* **🚰 Specialized Anti-Splash Funnel:** Integrated mesh filter to capture liquid while blocking food particles or trash.
* **📊 Visual Water-Level Tracking:** Real-time feedback showing total volume saved (e.g., *"Today we saved 42 Liters"*).
* **🧹 Easy-Clean Slanted Drain:** Bottom drain valve for daily maintenance and simple flushing cycles.
* **🤖 IoT Smart Sensors (Future/Optional):** Live water flow measurement, ultrasonic depth check, and Wi-Fi cloud reporting.
* **🏆 Gamification & Leaderboard:** Digital dashboard tracking volume saved per class or office floor.

---

## 🛠 Tech Stack

### 1. Current MVP Stack (Simple & Low-Cost)
* **Physical Bin:** Food-grade HDPE Container, 80-Mesh Stainless Strainer, PVC Pipes, Manual Outlet Valve.
* **Software:** HTML/CSS, JavaScript, Node.js (for manual local metric logging).

### 2. Future Advanced Tech Stack (Planned Infrastructure)

| Category | Future Technology / Component | Purpose |
| :--- | :--- | :--- |
| **Microcontrollers** | ESP32 / Raspberry Pi Pico W | Low-power Wi-Fi & Bluetooth microcontroller for live data telemetry. |
| **Sensors** | YF-S201 Water Flow Sensor, HC-SR04 Ultrasonic Sensor | Precise measurement of liquid volume poured and remaining tank capacity. |
| **Smart Display** | 16x2 I2C LCD / 0.96" OLED Display | Mounted directly on the physical bin to show instant feedback ("+200ml Saved!"). |
| **Power Supply** | 5V Solar Panel + 18650 Li-ion Battery | Standalone, zero-grid renewable power for outdoor public bin deployments. |
| **Backend & Cloud** | Node.js / Express, MQTT Protocol, InfluxDB / Firebase | Ultra-fast sensor messaging and real-time data storage. |
| **Frontend & Analytics**| React.js, Tailwind CSS, Chart.js | Interactive live web dashboard showing campus-wide water savings. |
| **Mobile App** | Flutter (iOS & Android) | Community app for scanning QR codes on bins, viewing leaderboard points, and reporting issues. |

---

## 🚀 How to Run & Setup Locally

You can run either the **Hardware Prototype (Mechanical/IoT)** or the **Software Dashboard**.

### Prerequisites
* **For Software:** [Node.js](https://nodejs.org/) (v18 or higher), [Git](https://git-scm.com/)
* **For Hardware Simulation:** [Arduino IDE](https://www.arduino.cc/en/software) or [Wokwi Simulator](https://wokwi.com/)

---

### Method A: Running the Software Dashboard (Local Dev)

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/dropback-water-reuse.git](https://github.com/your-username/dropback-water-reuse.git)
   cd dropback-water-reuse

## 🛠 Tech Stack

**Frontend** | React.js / Tailwind CSS |
| **Backend** | Node.js / Express.js |
| **Database** | SQLite / Firebase (To store daily volume stats) |

### Software Setup (For Smart/Digital Tracking Units)

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/dropback-water-reuse.git](https://github.com/your-username/dropback-water-reuse.git)
   cd dropback-water-reuse


   ### Software Setup (For Smart/Digital Tracking Units)

Project Maintainer:Bebee mishra and Najni  

Project Repository : https://github.com/najanikhatoon25/Drop2Life
