import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Content from '../models/Content.js';

dotenv.config();

const seedData = [
    {
        section: 'hero',
        data: {
            heading1: 'THINKING',
            heading2: 'OF A',
            heading3: 'FANTASTIC VICINITY?',
            feature1: '20+ PODIUM LUXURIOUS AMENITIES',
            feature2: 'SPACIOUS BALCONY HOMES*',
            brandSubtitle: 'VIGHNAHARTA',
            brandTitle: 'INFINITY',
            bhk1: {
                title: 'SMART 1 BHK',
                originalPrice: '74.99 Lacs',
                currentPrice: '69.99 Lacs*',
            },
            bhk2: {
                title: 'PREMIUM 2 BHK',
                originalPrice: '1.05 CR',
                currentPrice: '96.99 Lacs*',
            },
            locationLine1: 'BLDG. NO. 223/224,',
            locationLine2: 'CIRCLE  KANNAMWAR NAGAR 1, VIKHROLI (EAST)',
        },
    },
    {
        section: 'aboutProject',
        data: {
            title: 'About Project',
            paragraph1:
                'At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.',
            paragraph2:
                '"The moment I entered the house, it felt welcomed" — this feeling defines the privilege Vighnaharta Enclave offers. Thoughtfully designed with crafted amenities and timeless choices, the space resonates with the warmth and authenticity that you and your family truly deserve. It\'s the place your soul has long been searching for.',
            buttonText: 'Download Brochure',
        },
    },
    {
        section: 'amenities',
        data: {
            title: 'Amenities',
            subtitle:
                'Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach.',
            items: [
                { icon: 'gymnasium', label: 'Gymnasium' },
                { icon: 'kids', label: 'Kids Play Area' },
                { icon: 'kids2', label: 'Kids Play Area' },
                { icon: 'jogging', label: 'Jogging Track' },
                { icon: 'yoga', label: 'Yoga Deck' },
                { icon: 'yoga2', label: 'Yoga Deck' },
            ],
            viewMoreText: 'View more',
        },
    },
    {
        section: 'aboutDeveloper',
        data: {
            title: 'About Developer',
            description:
                'Vighnaharta Developers is more than just a real estate company—we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we\'re transforming skylines and setting new standards in urban living. Our foundation rests on integrity, excellence, and innovation, ensuring every project is a perfect blend of creativity, functionality, and sustainability.',
            stats: [
                { number: '6', label: 'Projects' },
                { number: '1.32 LAC', label: 'sq. ft. area developed' },
                { number: '449+', label: 'Happy Families' },
                { number: '3.77 LAC', label: 'sq. ft. ongoing' },
                { number: '2.7 LAC', label: 'sq. ft. area upcoming' },
            ],
        },
    },
    {
        section: 'constructionUpdates',
        data: {
            title: 'Construction Updates',
            updates: [
                { status: 'Under Construction', label: 'Tower 4', cta: 'Know More' },
                { status: 'Completed', label: '', cta: 'Know More' },
                { status: 'Completed', label: 'Tower 5', cta: 'Know More' },
            ],
        },
    },
    {
        section: 'faq',
        data: {
            title: 'Frequently Asked Questions',
            items: [
                {
                    question: 'What makes Swastik Group a trusted name in real estate in Vikhroli?',
                    answer:
                        'Swastik Group has established itself as a trusted name through consistent quality construction, timely delivery, and customer-centric approach in the Vikhroli area.',
                },
                {
                    question: 'What types of residential projects does Swastik Group offer in Vikhroli?',
                    answer:
                        'Swastik Group offers a range of residential projects including 1 BHK, 2 BHK, and premium apartments with modern amenities and spacious layouts.',
                },
                {
                    question: "Why should I invest in Swastik Group's new projects in Vikhroli?",
                    answer:
                        'Vikhroli is a rapidly developing area with excellent connectivity, infrastructure, and appreciation potential. Swastik Group projects offer premium amenities at competitive prices.',
                },
                {
                    question: 'How does Swastik Group ensure quality and sustainability in its real estate projects?',
                    answer:
                        'Swastik Group follows strict quality standards, uses premium materials, and incorporates sustainable design practices in all their projects.',
                },
                {
                    question: 'How can I learn about upcoming residential projects by Swastik Group in Vikhroli?',
                    answer:
                        'You can stay updated by visiting our website, following us on social media, or contacting our sales team for the latest project information.',
                },
            ],
        },
    },
];

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB');

        for (const item of seedData) {
            await Content.findOneAndUpdate(
                { section: item.section },
                { $set: { data: item.data } },
                { upsert: true, returnDocument: 'after' }
            );
            console.log(`✅ Seeded: ${item.section}`);
        }

        console.log('🎉 All sections seeded successfully!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Seed error:', err.message);
        process.exit(1);
    }
};

seed();
