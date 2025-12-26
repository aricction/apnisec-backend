# 🚀 Issue Tracker App (Next.js + Auth)

A full-stack **Issue Tracker** application built with **Next.js (App Router)** featuring authentication, protected routes, Zustand state management, and transactional emails using **Resend**.

---

## ✨ Features

- ✅ User Registration & Login
- 🔐 JWT-based Authentication
- 🍪 Secure cookie handling
- 🧠 Global auth state with Zustand
- 📧 Welcome email on registration (Resend)
- 🔒 Protected Dashboard routes
- 🧾 Issue creation & listing
- ⚡ Next.js App Router (`/app`)

---

## 🛠️ Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zustand
- Axios

### Backend
- Next.js API Routes
- Prisma ORM
- MongoDB
- JWT Authentication
- Resend Email API

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── register/
│   │       ├── login/
│   │       ├── me/
│   │       └── logout/
│   ├── handlers/
│   ├── services/
│   ├── repositories/
│   ├── validators/
│   ├── utils/
│   ├── Dashboard/
│   └── Login / Register
├── store/
│   └── user-store.ts
├── lib/
│   └── api/
├── types/
└── prisma/
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/issue-tracker.git
cd issue-tracker
```

---

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

---

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```env
# App
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

# Database
DATABASE_URL="mongodb+srv://<user>:<password>@cluster.mongodb.net/dbname"

# Auth
JWT_SECRET=your_jwt_secret

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM="Your App <no-reply@yourdomain.com>"
```

⚠️ **Important Notes**
- Verify your sender email or domain in **Resend**
- Free Resend accounts can only send emails to verified addresses

---

### 4️⃣ Prisma Setup

```bash
npx prisma generate
npx prisma db push
```

(Optional)
```bash
npx prisma studio
```

---

### 5️⃣ Run the Application

```bash
npm run dev
```

Open in browser:

👉 **http://localhost:3000**

---

## 🔐 Authentication Flow

1. User registers → password hashed
2. JWT generated and stored in HTTP-only cookies
3. Zustand stores authentication state
4. `/api/auth/me` validates session
5. Protected routes redirect unauthenticated users

---

## 📧 Email (Resend)

A **welcome email** is automatically sent after successful registration using **Resend**.

Emails are sent **asynchronously** to avoid blocking API responses.

---

## 🧠 Zustand Auth Store

```ts
user: AuthResponse["data"] | null
isAuthenticated: boolean
```

Access user info:

```ts
user?.user?.name
```

---

## 🛡️ Protected Routes

Dashboard access is guarded using authentication state:

```ts
if (!isAuthenticated) router.replace("/Login");
```

---

## 🐞 Common Issues

### ❌ Not redirecting after register
- Ensure `setUser(response.data)` is called
- Redirect only after successful state update
- Confirm `isAuthenticated` is set correctly

---

### ❌ CORS errors
- Use relative API paths (`/api/auth/...`)
- Avoid calling backend using `localhost:3001`

---

## 🚀 Future Enhancements

- Email verification
- Password reset
- Role-based access control
- Persistent issues using database
- Middleware-based route protection

---

## 👤 Author

**Govind Purty**  
MCA @ NIT Raipur  
Frontend & Full-Stack Developer

---

## 📄 License

MIT License

