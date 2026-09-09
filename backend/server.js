const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Demo Products
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 1200
    },
    {
        id: 2,
        name: "Mouse",
        price: 25
    },
    {
        id: 3,
        name: "Keyboard",
        price: 70
    }
];

// Home
app.get("/", (req, res) => {
    res.send("🚀 AKS Backend is Running");
});

// Liveness Probe
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "Healthy"
    });
});

// Readiness Probe
app.get("/ready", (req, res) => {
    res.status(200).json({
        status: "Ready"
    });
});

// Business API
app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Backend API running on port ${PORT}`);
});