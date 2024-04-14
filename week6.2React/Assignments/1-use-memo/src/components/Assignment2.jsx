import React, { useMemo, useState } from 'react'

// in this assignment you will create  a component that renders a large list of sentences and includes
//an input field for filtereing these items

// the goal is use useMemo to optimise the filtering process ,ensuring the  list is only recalculated when necessary
// 

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"]
const TOTAL_LINES = 1000
const ALL_WORDS = []
for (let i=0; i <= TOTAL_LINES; i++){
    let sentence = ""
    for (let j = 0; j <words.length; j++){
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence)
}

const Assignment2 = () => {
    const [sentences, setSentences] = useState(ALL_WORDS)
    const [ filter, setFilter] = useState("")

    // now get the filtered value from sentences that chosen from input field
    // const fiteredSentences = sentences.filter(x=>x.includes(filter))

    const fiteredSentences =useMemo(()=>{
        console.log("filtering operation start")
        const filteredValue = sentences.filter(x=>x.includes(filter))
        return filteredValue
    },[filter,sentences]) 

  return (
    <div>
        Assignment2
        <input type="text" onChange={(e)=>
        setFilter(e.target.value) } />

        <br />
        {fiteredSentences.map(word=> <div> {word} </div>)}

    </div>
  )
}

export default Assignment2