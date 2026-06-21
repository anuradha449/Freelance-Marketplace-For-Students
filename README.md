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

This text looks **perfect**! 🎉 It has all the instructions exactly as they should be. 

The reason it looks "messy" and not properly formatted on GitHub is because **you need to paste this text with proper Markdown formatting (like adding `#`, `---`, and ` ``` ` blocks)** so GitHub knows how to display it beautifully.

**Here is exactly what you need to do in 2 steps:**

---

### ✅ Step 1: Copy this FINAL formatted code
Copy the block below (it is the exact text you just sent, but correctly formatted for GitHub):

```markdown
# Freelance Marketplace For Students

A full-stack web application connecting Freelancers and Clients. Built with Spring Boot (Backend) and React + Vite (Frontend).

---

## 📂 Project Structure

```
Freelance-Marketplace-For-Students/
├── backend/          # Spring Boot Backend (Port 8086)
└── frontend/         # React + Vite Frontend (Port 5173)
```

---

## 🚀 How to Run This Project (For Anyone)

Follow these steps to run the project on your own computer.

---

### Step 1: Clone the Repository

Open your terminal (Command Prompt, PowerShell, or Git Bash) and run this command:

```bash
git clone https://github.com/anuradha449/Freelance-Marketplace-For-Students.git
cd Freelance-Marketplace-For-Students
```

---

### Step 2: Run the Backend (Spring Boot)

**Prerequisites:** You must have Java 17+ and Maven installed.

1. Open a terminal inside the project folder.
2. Run these commands:

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

3. The backend will start at: **`http://localhost:8086`**
4. The H2 Database is available at: **`http://localhost:8086/h2-console`**

---

### Step 3: Run the Frontend (React + Vite)

**Prerequisites:** You must have Node.js and npm installed.

1. Open a **new** terminal window (keep the backend running in the first one).
2. Navigate to the frontend folder and run:

```bash
cd frontend
npm install
npm run dev
```

3. The frontend will start at: **`http://localhost:5173`**

---

### Step 4: Open the App

Open your web browser and go to:

> **`http://localhost:5173`**

You will see the Freelance Marketplace home page.

---

## 🔑 Test Login Credentials

The database already comes pre-loaded with test users. Use these to log in:

| Role        | Email               | Password      |
|-------------|---------------------|---------------|
| Freelancer  | `alice@test.com`    | `password123` |
| Freelancer  | `bob@test.com`      | `password123` |
| Client      | `olivia@test.com`   | `password123` |

---

## 📚 How to Use the App

### 👨‍💻 Freelancer Workflow

1. Login with a Freelancer email (e.g., `alice@test.com`).
2. Go to **Projects** → Find a project you like.
3. Go to **Place Bid** → Select the project, enter your price and proposal.
4. Check **My Bids** to track your active proposals.
5. Wait for a Client to review and accept your bid.

---

### 🏢 Client Workflow

1. Login with a Client email (e.g., `olivia@test.com`).
2. Go to **Add Project** → Post a new job with a budget.
3. Go to **All Bids** → Review proposals from freelancers.
4. Click the **✔ Accept Bid** button to mark a bid as completed.
5. Or go to the **Review** tab to rate the freelancer.

---

## ⚙️ Technologies Used

- **Frontend:** React, Vite, Axios, CSS3
- **Backend:** Java 17, Spring Boot, Spring Data JPA, H2 Database
- **Tools:** Git, GitHub, Maven, npm

---

## 📧 Contact

Created by **Anuradha**  
GitHub: [anuradha449](https://github.com/anuradha449)
```

