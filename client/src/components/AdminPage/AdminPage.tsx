import { collection, getDocs, query, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import WordAddingForm from "../WordAddingForm/WordAddingForm";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import WordGrid from "../WordGrid/WordGrid";

const AdminPage = () => {
  const [words, setWords] = useState();
  const wordsRef = collection(db, "words");

  const w = query(wordsRef);

  const getWords = async () => {
    const querySnapshot = await getDocs(w);
    const results = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      results.push({ id: doc.id, ...doc.data() });
    });
    setWords(results);
    console.log(words);
  };

  const handleJSONImport = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        try {
          const data = JSON.parse(e.target.result);

          if (Array.isArray(data)) {
            console.log("Valid JSON data:", data);

            // Fetch existing words from Firestore
            const querySnapshot = await getDocs(collection(db, "words"));
            const existingWords = new Set();
            querySnapshot.forEach((doc) => {
              const word = doc.data().french;
              if (word) existingWords.add(word.toLowerCase()); // Case-insensitive comparison
            });

            // Filter out duplicates
            const nonDuplicateWords = data.filter(
              (item) =>
                item.french &&
                !existingWords.has(item.french.toLowerCase()) && // Check if word is unique
                item.english &&
                item.category
            );

            if (nonDuplicateWords.length === 0) {
              alert("No new words to upload; all are duplicates.");
              return;
            }

            // Upload non-duplicate words to Firestore
            for (const item of nonDuplicateWords) {
              await addDoc(collection(db, "words"), item);
            }

            alert(`${nonDuplicateWords.length} words successfully uploaded!`);
          } else {
            alert("Invalid JSON format. Expected an array of objects.");
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
          alert("Error parsing the JSON file. Please check its format.");
        }
      };

      reader.readAsText(file);
    }
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <div>
      <WordAddingForm />
      <WordGrid rows={words} />
      <input type="file" accept=".json" onChange={handleJSONImport} />
    </div>
  );
};

export default AdminPage;
