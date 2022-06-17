import { ChangeEvent, FormEvent, useState } from "react"
import { Form } from "./components/Form";
import { List } from "./components/List";


function App() {


  const [form, setForm] = useState({item: "", amount: ""})
  const [items, setItems] = useState<{item: string; amount: string}[]>([])
  const result = items.reduce((acc, curr) => {
    return acc + parseFloat(curr.amount)
  }
  , 0)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>)  => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const deleteItem = (i: number) => {
    setItems(items.filter((_, index) => index !== i))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()  
    setItems([...items, form])
    setForm({item: "", amount: ""})
    
  }

  return (
    <div className="container d-flex flex-column" style={{minHeight: "100vh"}}>
      <header className="row mt-5">
        <h1>Create an invoice</h1>
      </header>
      <main>
          <Form onSubmit={onSubmit} onInputChange={onInputChange} form={form} />
          <List items={items} deleteItem={deleteItem} />
          <div className="d-flex mt-5 justify-content-end">
              <h3 className="me-3"><span className="text-muted me-2">USD$</span>{result}</h3>
          </div>
      </main>
      <footer className="text-center small mt-auto">
        <div>
          <a target="_blank" href="https://icons8.com/icon/Qd0k8d5D0tSe/invoice">Invoice</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <p>Made by Felipe Ramírez &copy; 2022</p>
      </footer>
    </div>
  )
}

export default App
