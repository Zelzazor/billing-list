

interface IProps {
    items: {item: string; amount: string}[];
    deleteItem: (i: number) => void;
}

export const List = ({items, deleteItem}: IProps) => {


    return (
        <div className={`container-fluid px-0 d-flex ${items.length > 0 ? "mt-3": "align-items-center"} justify-content-center w-100`} style={items.length===0 ?{minHeight: "50vh"}:{}}>
            {items.length > 0 ? 
              <div className="list-group w-100">
                {items.map(({item,amount}, i) => 
                    <div className="list-group-item d-flex align-items-center" key={`${item}-${i}`}>
                        <button onClick={()=>deleteItem(i)} className="btn btn-danger me-3" >X</button>
                        <div className="d-flex w-100 justify-content-between py-4">
                            <h2 className="m-0">{item}</h2>
                            <h3 ><span className="text-muted me-2">USD$</span>{amount}</h3>
                        </div>
                    </div>)}
              </div> 
            : 
              <div>
                <h2 className="text-muted text-center">Add items in the form above</h2>
                <h3 className="text-center">No items in the invoice</h3>
              </div>
            
            }
          </div>
    )
}