import React, { useState } from 'react'
const frameworks = ["next js", "remix", "gatsby", "svelte"]

const OtherInputs = () => {
    const [shipping,setShipping] = useState(false)
    const [framework,setFramework] = useState("react")
    const handleShipping = (e)=>{
        console.log(e.target.checked)
        setShipping(e.target.checked)
    }
    const handleFramework = (e)=>{
        console.log(e.target.value)
        setFramework(e.target.value)
     
    }
  return (
    <div>
        OtherInputs

        <form action="">

            <div className='form-row' style={{textAlign:"left"}}>
                <label htmlFor="shipping" className='form-label'>FreeShipping</label>
                <input type="checkbox" value={shipping} checked={shipping} onChange={handleShipping}/>

            </div>
            <div className='form-row' style={{textAlign:"left"}}>
                <label htmlFor="Framework" className='form-label'>Framework</label>
                <select name="framework" id="framework" value={framework} onChange={handleFramework}>

                    {frameworks.map((framework)=>{
                        return (
                           <option value={framework}>{framework}</option>
                        )
                    })}


                </select>
               


            </div>
            <button type='submit' className='btn btn-block'> submit</button>

        </form>
    </div>
  )
}

export default OtherInputs