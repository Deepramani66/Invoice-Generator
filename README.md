# 🧾 Invoice Generator System

A full-stack Invoice Management System built using Django and Next.js.  
This application allows users to create, manage, and view invoices with automatic calculations.

---

## 🌐 Tech Stack

- Frontend: Next.js (React)
- Backend: Django + Django REST Framework
- Styling: Tailwind CSS
- API Communication: Axios

---

## 🚀 Features

- Create invoices with customer details
- Add multiple line items
- Automatic calculation of subtotal, tax, and total
- Live invoice preview (frontend)
- View all invoices
- View detailed invoice

---

# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/Ramani66/Invoice-Generator.git
cd Invoice-Generator
```

## 2. backend setup
```bash
cd backend
```

## 3. create virtual environment and install dependencies
```bash
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```

## 4. Apply migrations
```bash 
cd invoice_project
python manage.py makemigrations
python manage.py migrate
```

## 5. Run backend server
```bash
python manage.py runserver
```

## Backend runs at:
```bash
http://127.0.0.1:8000/api/invoices/
```

# ⚛️ Frontend Setup (Next.js)

## Step 1: Navigate to frontend
```bash
cd invoice-frontend
```

## Step 2: Install dependencies
```bash
npm install
```

## Step 3: Run frontend
```bash
npm run dev
```

## Frontend runs at:
```bash
http://localhost:3000
```

## API Example
## Create Invoice

## POST /api/invoices/

```bash
{
  "customer_name": "John Doe",
  "customer_email": "john@example.com",
  "items": [
    {
      "product_name": "Laptop",
      "quantity": 2,
      "price": 50000
    }
  ]
}
```