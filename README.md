# Digital Wallet API Backend

A server-side digital wallet system (similar to bKash/Nagad) built using **TypeScript**, **Express.js**, **Zod**, and **MongoDB**.

## Live Deployment 

Live Deployment Link: https://digital-wallet-api-backend-six.vercel.app/

## Features

### Authentication
- Role-based access (admin, user, agent)
- JWT access token
- Secure password hashing

### Users
- Withdraw money
- Send money to another user
- View transaction history

###  Agents
- Add money to any user's wallet (cash-in)
- Withdraw money from any user's wallet (cash-out)

### Wallet
- Automatically created upon user registration
- Only 1 wallet per user
- Balance updates via transactions

### Transactions
- `Cash In`: Agent to user
- `Cash Out`: User to agent
- `Send Money`: User to user

### Admin
- View all users, agents, wallets and transactions
- Block/unblock user wallets
- Approve/suspend agents

---

## Stack

- **Runtime**: Bun (TypeScript-first)
- **Backend**: Express.js (modular structure)
- **Validation**: Zod
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: JWT
- **Dev Tools**: ESLint

## API Testing

Use **Postman** or **Thunder Client** to test the following endpoints:

### Req. 1.1 | Add money (top-up)

```http
POST  /api/v1/wallet/top-up 		# Add money by user / Top-Up

{
    "amount": 200
}
```

### Req. 1.2 | Withdraw money

```http
POST  /api/v1/wallet/withdraw		# Withdraw by user

{
    "amount": 100
}
```

### Req. 1.3 | Send money to another user

```http
POST  /api/v1/wallet/send-money	# User to user only

{
    "toUserId": "688ba729ca17a22198dd5228",
    "amount": 50,
    "reference": "this is reference"
}
```

### Req. 1.4 | View transaction history

```
GET /api/v1/transaction/my-history

```

### Req. 2.1 | Add money to any user's wallet (cash-in)

```http
PATCH  /api/v1/wallet/cash-in

{
    "toUserId": "688ba729ca17a22198dd5228", 	# User's ID
    "amount": 500,
    "reference": "cash in to user"
}
```

### Req. 2.2 | Withdraw money from any user's wallet (cash-out)

```http
PATCH  /api/v1/wallet/cash-out

{
    "toUserId": "688ba729ca17a22198dd5228", 	# Agent's ID
    "amount": 50
}
```

### Req. 3.1.1 | View all users

```http
GET  /api/v1/admin/users
```

### Req. 3.1.2 | View all agents

```http
GET  /api/v1/admin/agents
```

### Req. 3.1.3 | View all wallets

```http
GET  /api/v1/admin/wallets
```

### Req. 3.1.4 | View all transactions

```http
GET  /api/v1/admin/transactions
```

### Req. 3.2 | Block/unblock user wallets

```http
PATCH  /api/v1/admin/wallets/688ba729ca17a22198dd522b/status

{
    "status": true		# unblock => true, block => false
}

```

### Req. 3.3 | Approve/suspend agents

```http
PATCH /api/v1/admin/agents/688ba729ca17a22198dd522b/status

{
    "status": false		# approve => true, suspend => false
}
```

