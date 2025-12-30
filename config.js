import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// 1. Firebase Configuration
export const firebaseConfig = {
    apiKey: "FIREBASE_API_KEY_PLACEHOLDER",
    authDomain: "FIREBASE_AUTH_DOMAIN_PLACEHOLDER",
    projectId: "FIREBASE_PROJECT_ID_PLACEHOLDER",
    storageBucket: "FIREBASE_STORAGE_BUCKET_PLACEHOLDER",
    messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID_PLACEHOLDER",
    appId: "FIREBASE_APP_ID_PLACEHOLDER"
};

// 2. Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const APP_ID = 'habit-tracker-live';

// 3. Icons and Constants
export const ICONS = {
    weather: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 9.168A6 6 0 0110 6a6 6 0 015.668 3.168A2 2 0 0114 13H6a2 2 0 01-1.668-3.832z" clip-rule="evenodd" /></svg>`,
    news: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" /><path d="M5 7h10v2H5V7zm0 4h10v2H5v-2zm0 4h5v2H5v-2z" /></svg>`,
    prayer: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a.75.75 0 01.75.75v.512c3.54.341 6.25 3.28 6.25 6.738v3.25a.75.75 0 01-1.5 0v-3.25c0-2.89-2.298-5.25-5-5.25v-1.5a.75.75 0 01-.75-.75zM10 4a6 6 0 00-6 6v3.25a.75.75 0 01-1.5 0V10c0-3.458 2.71-6.397 6.25-6.738V2.75A.75.75 0 0110 2zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" /></svg>`,
    history: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>`
};

// 4. Default Habit Configuration
export const DEFAULT_HABITS = {
    "Health": [
        { id: "h1", name: "Body", type: "checkbox" }, { id: "h2", name: "Face", type: "checkbox" }, { id: "h3", name: "Ears", type: "checkbox" }, { id: "h4", name: "Teeth", type: "checkbox" }, { id: "h5", name: "Smell", type: "checkbox" }, { id: "h6", name: "Calories (>3000)", type: "checkbox" }, { id: "h7", name: "Stretch", type: "checkbox" }, { id: "h8", name: "Sleep (7-8 hours)", type: "checkbox" }, { id: "h9", name: "Hydration", type: "checkbox" }, { id: "h10", name: "Physical Activity", type: "select", options: ["", "Muscle", "Padel", "Running", "Tennis"] },
    ],
    "Mind": [
        { id: "m1", name: "Investments Learning", type: "select", options: ["", "Crypto", "Stock", "News"] }, { id: "m2", name: "CFA Learning", type: "checkbox" }, { id: "m3", name: "Padel Learning", type: "checkbox" }, { id: "m4", name: "Tennis Learning", type: "checkbox" }, { id: "m5", name: "Discipline", type: "checkbox" }, { id: "m6", name: "Talk to one person", type: "checkbox" }, { id: "m7", name: "Family time (30min)", type: "checkbox" }, { id: "m8", name: "Daily Planning/Review", type: "checkbox" }, { id: "m9", name: "Tidying Up", type: "checkbox" },
    ],
    "Spirit": [
        { id: "s1", name: "Affirmations", type: "checkbox" }, { id: "s2", name: "Prayer", type: "checkbox" }, { id: "s3", name: "Quran", type: "checkbox" }, { id: "s4", name: "Dua", type: "checkbox" },
    ],
    "Budget": [ { id: "b1", name: "Spend < 6.67 OMR", type: "checkbox" }, ],
    "Weekly": [ { id: "w1", name: "Family Outing", type: "weekly-checkbox" }, { id: "w2", name: "Extended Family Gathering", type: "weekly-checkbox" }, { id: "w3", name: "Charity", type: "weekly-checkbox" } ]
};

// 5. Attribute Mapping for Gamification
export const ATTRIBUTE_MAP = {
    "h1": "Vitality", "h2": "Vitality", "h3": "Vitality", "h4": "Vitality", "h5": "Vitality", "h6": "Vitality", "h7": "Vitality", "h8": "Vitality", "h9": "Vitality", "h10": "Vitality",
    "m1": "Intellect", "m2": "Intellect", "m3": "Intellect", "m4": "Intellect",
    "m5": "Discipline", "m8": "Discipline", "m9": "Discipline",
    "m6": "Social", "m7": "Social", "w1": "Social", "w2": "Social",
    "s1": "Spirit", "s2": "Spirit", "s3": "Spirit", "s4": "Spirit",
    "b1": "Wealth", "w3": "Social" 
};

// 6. Other Constants
export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const JOURNAL_PROMPTS = [
    "What was one win from today, big or small?", "What is something you're grateful for right now?", "What is one thing you can do to make tomorrow even better?", "Describe a moment today that made you smile.", "What challenge did you face today and how did you handle it?", "What are you most looking forward to this week?", "Write about something you learned today.", "If you could describe today in three words, what would they be?", "What's one thing that's been on your mind lately?"
];
export const HOURLY_CATEGORIES = {
    "Work": "bg-blue-200",
    "Leisure": "bg-green-200",
    "Exercise": "bg-yellow-200",
    "Learning": "bg-purple-200",
    "Family/Social": "bg-pink-200",
    "Chores": "bg-gray-200",
    "Sleep": "bg-indigo-200",
    "Other": "bg-white",
};
