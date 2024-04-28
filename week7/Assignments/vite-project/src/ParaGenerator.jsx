import React, { useState } from 'react'

const ParaGenerator = () => {
    const [words, setWords] = useState(0)
    const [para, setPara] = useState("")
    
    const wordsArr = ['cat', 'dog', 'house', 'car', 'tree', 'book', 'computer', 'mountain', 'beach', 'sun'];
    let sentence = ''

    function generatePara() {
        for (let i =0; i <= words; i++){
            const  randomNum = Math.floor(Math.random() * wordsArr.length)
            sentence += wordsArr[randomNum] + " "   
            setPara(sentence)
        }
    }
    

  return (
    <div>
        <input type="number" value={words} onChange={(e)=> setWords(e.target.value)} placeholder='Enter number of Words' /> 
        <button onClick={generatePara}>generatePara</button>
        <p>
            {para}
        </p>
    </div>
  )
}

export default ParaGenerator