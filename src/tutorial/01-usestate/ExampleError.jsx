

export  default function  ExampleError(){

    let count = 0

    const handleCount = ()=> {
        count = count+1
        console.log(count) // will not update the count globaaly thats why rerender will not take place
    }
  
    
    return (
        <div>
            <h2>{count}</h2>

            <button onClick={handleCount} className="btn"> click</button>
        </div>
    )
}