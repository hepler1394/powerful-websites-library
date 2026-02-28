import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCftljTkWcA2-CyojsF40Dpjm9rAiSlKNc",
    authDomain: "plexmovies-530e4.firebaseapp.com",
    projectId: "plexmovies-530e4",
    storageBucket: "plexmovies-530e4.appspot.com",
    messagingSenderId: "560555365545",
    appId: "1:560555365545:web:2a3250fd21bc82dc8dce85",
    measurementId: "G-VKX4F2X9J3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const testAccounts = [
    { email: "desktop1@test.com", type: "desktop" },
    { email: "desktop2@test.com", type: "desktop" },
    { email: "desktop3@test.com", type: "desktop" },
    { email: "desktop4@test.com", type: "desktop" },
    { email: "desktop5@test.com", type: "desktop" },
    { email: "mobile1@test.com", type: "mobile" },
    { email: "mobile2@test.com", type: "mobile" },
    { email: "mobile3@test.com", type: "mobile" },
    { email: "mobile4@test.com", type: "mobile" },
    { email: "mobile5@test.com", type: "mobile" }
];

const sampleFavoritesDesktop = [
    { url: "https://www.midjourney.com/", name: "Midjourney", dateAdded: new Date().toISOString() },
    { url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui", name: "Stable Diffusion WebUI (AUTOMATIC1111)", dateAdded: new Date().toISOString() }
];

const sampleFavoritesMobile = [
    { url: "https://www.retrogames.cc/", name: "RetroGames.cc", dateAdded: new Date().toISOString() },
    { url: "https://www.capcut.com/", name: "CapCut", dateAdded: new Date().toISOString() }
];

async function createAccounts() {
    console.log("Starting account generation...");

    for (const acc of testAccounts) {
        try {
            // Create user
            const userCredential = await createUserWithEmailAndPassword(auth, acc.email, "Password123!");
            const user = userCredential.user;

            const favorites = acc.type === "desktop" ? sampleFavoritesDesktop : sampleFavoritesMobile;

            // Update Firestore with sample data
            await setDoc(doc(db, "users", user.uid), {
                favorites: favorites,
                theme: acc.type === "desktop" ? "dark" : "glass",
                accountType: acc.type,
                createdAt: new Date().toISOString()
            });

            console.log(`✅ Successfully created and seeded ${acc.type} account: ${acc.email}`);
            await signOut(auth);
        } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
                console.log(`⚠️ Account ${acc.email} already exists. Attempting to seed data anyway.`);
                try {
                    const sc = await signInWithEmailAndPassword(auth, acc.email, "Password123!");
                    const favorites = acc.type === "desktop" ? sampleFavoritesDesktop : sampleFavoritesMobile;
                    await setDoc(doc(db, "users", sc.user.uid), {
                        favorites: favorites,
                        theme: acc.type === "desktop" ? "dark" : "glass",
                        accountType: acc.type,
                        createdAt: new Date().toISOString(),
                        updatedTest: true
                    }, { merge: true });
                    console.log(`✅ Seeded existing ${acc.type} account: ${acc.email}`);
                    await signOut(auth);
                } catch (e2) {
                    console.error(`❌ Failed to update existing account ${acc.email}: `, e2.message);
                }
            } else {
                console.error(`❌ Failed to create account ${acc.email}: `, e.message);
            }
        }
    }
    console.log("All 10 accounts fully processed with saved data and configurations.");
    process.exit(0);
}

createAccounts();
