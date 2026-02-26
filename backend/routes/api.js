import express from 'express';

const router = express.Router();

// Sample route
router.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString()
    });
});

// Example data endpoint
router.get('/data', (req, res) => {
    res.json({
        message: 'Sample data endpoint',
        data: []
    });
});

export default router;
