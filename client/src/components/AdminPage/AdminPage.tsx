import { collection, getDocs, query, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import WordAddingForm from "../WordAddingForm/WordAddingForm";
import { useEffect, useState } from "react";
import { Typography, Select, MenuItem, Button } from "@mui/material";
import WordGrid from "../WordGrid/WordGrid";

const AdminPage = () => {
  const [words, setWords] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const getWords = async (category) => {
    try {
      const wordsRef = collection(db, "categories", category, "words");
      const querySnapshot = await getDocs(wordsRef);
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setWords(results);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const getCategories = async () => {
    try {
      const categoriesRef = collection(db, "categories");
      const querySnapshot = await getDocs(categoriesRef);
      const categoryList = querySnapshot.docs.map((doc) => doc.id); // Get document IDs as category names
      setCategories(categoryList);

      // Automatically select the first category if none is selected
      if (categoryList.length > 0 && !selectedCategory) {
        setSelectedCategory(categoryList[0]);
        getWords(categoryList[0]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
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

            for (const item of data) {
              if (
                !item.category ||
                !item.english ||
                !item.french ||
                !item.example ||
                !item.difficulty
              ) {
                console.warn("Skipping invalid item:", item);
                continue;
              }

              const categoryRef = doc(db, "categories", item.category);
              const wordsRef = collection(categoryRef, "words");

              await addDoc(wordsRef, {
                english: item.english,
                french: item.french,
                example: item.example,
                difficulty: item.difficulty,
              });
            }

            alert("Words successfully uploaded!");
            getWords(selectedCategory); // Refresh words for the selected category
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
    getCategories(); // Fetch categories on component mount
  }, []);

  return (
    <div>
      <Typography variant="h4">Admin Page</Typography>
      <div style={{ marginBottom: "1rem" }}>
        <Select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            getWords(e.target.value);
          }}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        <Button
          onClick={() => getWords(selectedCategory)}
          variant="contained"
          style={{ marginLeft: "1rem" }}
        >
          Load Words
        </Button>
      </div>
      <WordAddingForm />
      <WordGrid rows={words} />
      <Typography variant="h6" style={{ marginTop: "2rem" }}>
        Import Words from JSON
      </Typography>
      <input type="file" accept=".json" onChange={handleJSONImport} />
    </div>
  );
};

export default AdminPage;
