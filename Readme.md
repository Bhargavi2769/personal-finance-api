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
    - 200 OK: `[ { "id": 1, "type": "income", ... }, ... ]`

#### GET /api/transactions/:id
- **Description**: Retrieve a transaction by ID.
- **Response**: 
    - 200 OK: `{ "id": 1, "type": "income", ... }`

#### PUT /api/transactions/:id
- **Description**: Update a transaction by ID.
- **Request Body**: Same as POST.
- **Response**: 
    - 200 OK: `{ "updatedID": 1 }`

#### DELETE /api/transactions/:id
- **Description**: Delete a transaction by ID.
- **Response**: 
    - 200 OK: `{ "deletedID": 1 }`

#### GET /api/summary
- **Description**: Retrieve a summary of transactions.
- **Response**: 
    - 200 OK: `[ { "type": "income", "total": 5000 }, { "type": "expense", "total": 2000 } ]`

## Postman Screenshots
Screehshots images are avaiable in images folder.


