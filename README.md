# Freelance Marketplace For Students

A full-stack web application connecting Freelancers and Clients. Built with Spring Boot (Backend) and React + Vite (Frontend).

---

## 📂 Project Structure
Freelance-Marketplace-For-Students/
├── backend/ # Spring Boot Backend (Port 8086)
└── frontend/ # React + Vite Frontend (Port 5173)

---

## 🚀 How to Run This Project (For Anyone)

Follow these steps to run the project on your own computer.

---

Step 1: Clone the Repository

Open your terminal (Command Prompt, PowerShell, or Git Bash) and run this command:

```bash
git clone https://github.com/anuradha449/Freelance-Marketplace-For-Students.git
cd Freelance-Marketplace-For-Students


Step 2: Run the Backend (Spring Boot)
Prerequisites: You must have Java 17+ and Maven installed.

Open a terminal inside the project folder.

Run these commands:

bash
cd backend
mvn clean install
mvn spring-boot:run
The backend will start at: http://localhost:8086

The H2 Database is available at: http://localhost:8086/h2-console

Step 3: Run the Frontend (React + Vite)


Prerequisites: You must have Node.js and npm installed.

Open a new terminal window (keep the backend running in the first one).

Navigate to the frontend folder and run:

bash
cd frontend
npm install
npm run dev
The frontend will start at: http://localhost:5173

Step 4: Open the App
Open your web browser and go to:

http://localhost:5173

You will see the Freelance Marketplace home page.

🔑 Test Login Credentials
The database already comes pre-loaded with test users. Use these to log in:

Role	Email	Password
Freelancer	alice@test.com	password123
Freelancer	bob@test.com	password123
Client	olivia@test.com	password123
📚 How to Use the App
👨‍💻 Freelancer Workflow
Login with a Freelancer email (e.g., alice@test.com).

Go to Projects → Find a project you like.

Go to Place Bid → Select the project, enter your price and proposal.

Check My Bids to track your active proposals.

Wait for a Client to review and accept your bid.

🏢 Client Workflow
Login with a Client email (e.g., olivia@test.com).

Go to Add Project → Post a new job with a budget.

Go to All Bids → Review proposals from freelancers.

Click the ✔ Accept Bid button to mark a bid as completed.

Or go to the Review tab to rate the freelancer.

⚙️ Technologies Used
Frontend: React, Vite, Axios, CSS3

Backend: Java 17, Spring Boot, Spring Data JPA, H2 Database

Tools: Git, GitHub, Maven, npm

📧 Contact
Created by Anuradha
GitHub: anuradha449
