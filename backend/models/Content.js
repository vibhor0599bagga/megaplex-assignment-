import mongoose from 'mongoose';

const ContentSchema = new mongoose.Schema(
    {
        section: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        data: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
    },
    { timestamps: true }
);

const Content = mongoose.model('Content', ContentSchema);

export default Content;
