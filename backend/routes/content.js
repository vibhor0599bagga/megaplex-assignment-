import express from 'express';
import Content from '../models/Content.js';

const router = express.Router();

// GET all content sections
router.get('/', async (req, res) => {
    try {
        const allContent = await Content.find({});
        // Convert array to object keyed by section name
        const result = {};
        allContent.forEach((item) => {
            result[item.section] = item.data;
        });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch content' });
    }
});

// GET single section
router.get('/:section', async (req, res) => {
    try {
        const content = await Content.findOne({ section: req.params.section });
        if (!content) return res.status(404).json({ error: 'Section not found' });
        res.json(content.data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch section' });
    }
});

// PUT update a section (admin only)
router.put('/:section', async (req, res) => {
    try {
        const updated = await Content.findOneAndUpdate(
            { section: req.params.section },
            { $set: { data: req.body } },
            { new: true, upsert: true }
        );
        res.json({ success: true, data: updated.data });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update section' });
    }
});

export default router;
