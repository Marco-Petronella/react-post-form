
export default function AppForm({formData, onHandleForm}) {
    return (
        <>
        <div className="row justify-content-center align-items-center m-2">
        <div className="col">
          <input
            type="text"
            name="author"
            value={formData.name}
            onChange={onHandleForm}
            placeholder="Inserisci autore"
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="title"
            value={formData.name}
            onChange={onHandleForm}
            placeholder="Inserisci titolo"
          />
        </div>
        <div className="col">
          <input
            id="Pubblica"
            type="checkbox"
            name="private"
            value={formData.name}
            onChange={onHandleForm}
          />
          <label htmlFor="Private">Privato</label>
        </div>
      </div>
      <div className="row justify-content-center align-items-center m-2">
        <textarea
          className="m-2"
          type="text"
          name="body"
          value={formData.name}
          onChange={onHandleForm}
          rows={4}
          placeholder="Inserisci descrizione"
        />
      </div>
        </>
    )
}