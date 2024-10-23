# Personal Finance API

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Bhargavi2769/personal-finance-api.git
    cd personal-finance-api
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the server**:
    ```bash
    node src/server.js
    ```

## API Documentation

### Endpoints

#### POST /api/transactions
- **Description**: Add a new transaction.
- **Request Body**:
    ```json
    {
        "type": "income",
        "category": "salary",
        "amount": 5000,
        "date": "2023-10-01",
        "description": "Monthly Salary"
    }
    ```
- **Response**: 
    - 201 Created: `{ "id": 1 }`

#### GET /api/transactions
- **Description**: Retrieve all transactions.
- **Response**: 
    - 200 OK: `[
    {
        "id": 1,
        "type": "expense",
        "category": "groceries",
        "amount": 150.75,
        "date": "2023-10-15",
        "description": "Weekly grocery shopping"
    },
    {
        "id": 2,
        "type": "expense",
        "category": "subscriptions",
        "amount": 15,
        "date": "2023-10-05",
        "description": "Streaming Subscription"
    },
    {
        "id": 4,
        "type": "income",
        "category": "rental",
        "amount": 750,
        "date": "2023-10-22",
        "description": "Rental Income"
    },
    {
        "id": 5,
        "type": "expense",
        "category": "repairs",
        "amount": 400,
        "date": "2023-10-25",
        "description": "Home Repairs"
    },
    {
        "id": 6,
        "type": "expense",
        "category": "groceries",
        "amount": 250.75,
        "date": "2023-8-14",
        "description": "Weekly grocery shopping"
    },
    {
        "id": 7,
        "type": "income",
        "category": "salary",
        "amount": 5000,
        "date": "2023-10-01",
        "description": "Monthly Salary"
    },
    {
        "id": 8,
        "type": "income",
        "category": "freelance",
        "amount": 1200,
        "date": "2023-10-05",
        "description": "Freelance Project Payment"
    },
    {
        "id": 9,
        "type": "expense",
        "category": "groceries",
        "amount": 150.75,
        "date": "2023-10-02",
        "description": "Weekly Grocery Shopping"
    },
    {
        "id": 10,
        "type": "expense",
        "category": "utilities",
        "amount": 90,
        "date": "2023-10-10",
        "description": "Electricity Bill"
    },
    {
        "id": 11,
        "type": "expense",
        "category": "entertainment",
        "amount": 50,
        "date": "2023-10-12",
        "description": "Movie Tickets"
    },
    {
        "id": 12,
        "type": "expense",
        "category": "transportation",
        "amount": 40,
        "date": "2023-10-15",
        "description": "Gas for Car"
    },
    {
        "id": 13,
        "type": "income",
        "category": "investment",
        "amount": 800,
        "date": "2023-10-20",
        "description": "Dividend Income"
    },
    {
        "id": 14,
        "type": "expense",
        "category": "rent",
        "amount": 1200,
        "date": "2023-10-01",
        "description": "Monthly Rent Payment"
    },
    {
        "id": 15,
        "type": "expense",
        "category": "health",
        "amount": 200,
        "date": "2023-10-07",
        "description": "Health Insurance"
    },
    {
        "id": 16,
        "type": "income",
        "category": "bonus",
        "amount": 1000,
        "date": "2023-10-15",
        "description": "Year-end Bonus"
    },
    {
        "id": 17,
        "type": "expense",
        "category": "dining",
        "amount": 80,
        "date": "2023-10-05",
        "description": "Dinner at Restaurant"
    },
    {
        "id": 18,
        "type": "income",
        "category": "gift",
        "amount": 250,
        "date": "2023-10-10",
        "description": "Birthday Gift"
    },
    {
        "id": 19,
        "type": "expense",
        "category": "shopping",
        "amount": 300,
        "date": "2023-10-14",
        "description": "Clothes Shopping"
    },
    {
        "id": 20,
        "type": "income",
        "category": "consulting",
        "amount": 1500,
        "date": "2023-10-17",
        "description": "Consulting Services"
    },
    {
        "id": 22,
        "type": "income",
        "category": "royalties",
        "amount": 300,
        "date": "2023-10-30",
        "description": "Book Royalties"
    }
]`

#### GET /api/transactions/5
- **Description**: Retrieve a transaction by ID.
- **Response**: 
    - 200 OK: `{
    "id": 5,
    "type": "expense",
    "category": "repairs",
    "amount": 400,
    "date": "2023-10-25",
    "description": "Home Repairs"
}`

#### PUT /api/transactions/16
- **Description**: Update a transaction by ID.
- **Request Body**: Same as POST.
- **Response**: 
    - 200 OK: `{ "updatedID": 16 }`

#### DELETE /api/transactions/5
- **Description**: Delete a transaction by ID.
- **Response**: 
    - 200 OK: `{ "deletedID": 5 }`

#### GET /api/summary
- **Description**: Retrieve a summary of transactions.
- **Response**: 
    - 200 OK: `[ { "type": "income", "total": 5000 }, { "type": "expense", "total": 2000 } ]`

## Postman Screenshots
Screehshots images are avaiable in images folder.


