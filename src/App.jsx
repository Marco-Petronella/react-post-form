import "bootstrap/dist/css/bootstrap.min.css";
import AppForm from "./assets/components/AppForm";
import { useState } from "react";
// Dovremo creare una nuova app React che contenga un form per creare un nuovo post all’interno
// di un blog.

// I dati che il form dovrà inviare sono i seguenti:

// author (string) - L’autore del post
// title (string) - Il titolo del post
// body (string) - Il testo del post
// public (boolean) - Se il post deve essere pubblico (true) o una bozza (false)

// BONUS

// per gestire il campo "public" proviamo a usare una checkbox,
// invece di un input in cui scrivere "true" o "false".
// possiamo distinguere il campo public verificando il suo .name (o il suo .type) con un if.

function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    private: false,
  });

  function handleFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
    console.log(formData);
  }
  return (
    <>
      <AppForm formData={formData} onHandleForm={handleFormData} />
    </>
  );
}

export default App;
