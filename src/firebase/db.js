import app from "./config";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const db = getFirestore(app);

export async function getAllProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];

  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });

  return products;
}

export async function getProductsByCat(category) {
  const q = query(
    collection(db, "products"),
    where("category", "==", category)
  );
  const products = [];
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });

  return products;
}

export async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    console.log("No such document!");
  }
}

export async function getCategories() {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const categories = [];

  querySnapshot.forEach((doc) => {
    categories.push({ ...doc.data(), id: doc.id });
  });

  return categories;
}

export async function createOrder(order) {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef; // Devuelve el objeto con .id
  } catch (err) {
    console.error(`Oops, error: ${err.code}`);
    throw err;
  }
}
