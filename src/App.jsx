import "bootstrap/dist/css/bootstrap.min.css";
import AppForm from "./assets/components/AppForm";
import { useState } from "react";
// Dovremo creare una nuova app React che contenga un form per creare un nuovo post all’interno di un blog.

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
    public: true,
  });

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  }
  return (
    <>
      <AppForm />
      <div className="row justify-content-center align-items-center m-2">
        <div className="col">
          <input
            type="text"
            name="author"
            value={formData.name}
            onChange={handleFormData}
            placeholder="Inserisci autore"
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="title"
            value={formData.name}
            onChange={handleFormData}
            placeholder="Inserisci titolo"
          />

        </div>
        <div className="col">
            <input
            id="Pubblica"
            type="checkbox"
            name="public"
            value={formData.name}
            onChange={handleFormData}
            placeholder="Inserisci titolo"
          />
          <label for="Private">Privato</label>
          
        </div>
      </div>
<div className="row justify-content-center align-items-center m-2">
      <textarea
       className="m-2"
        type="text"
        name="body"
        value={formData.name}
        onChange={handleFormData}
        rows={4}   
        placeholder="Inserisci descrizione"

      />
      </div>
    </>
  );
}

export default App;
