import { ChangeEvent, FormEvent } from "react";

interface IProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    form: {
        item: string;
        amount: string;
    }
}


export const Form = ({onSubmit, onInputChange, form}: IProps) => {


    return (<form className="row g-3" onSubmit={(e)=>onSubmit(e)}>
    <div className="col-6">
      <label htmlFor="item">Item Name*</label>
      <input onChange={e=>onInputChange(e)} type="text" name="item" id="item" value={form.item} className="form-control" required />
    </div>
    <div className="col-3">
      <label htmlFor="amount">Amount*</label>
      <input onChange={e=>onInputChange(e)} type="number" name="amount" id="amount" value={form.amount} className="form-control" required />
    </div>
    <div className="col-3 d-flex align-items-end">
      <button type="submit" className="btn btn-primary form-control">Add</button>
    </div>
  </form>)
}