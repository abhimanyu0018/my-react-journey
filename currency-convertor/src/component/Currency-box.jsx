import '../App.css'

function CurrencyBox(){
    return (
        <div className="component">
          <input type="text"/>
          <select name="unit">
            <option value="dollar">dollar</option>
            <option value="rupee">rupee</option>
          </select>
        </div>
    )
}

export default CurrencyBox