import React from 'react'

const App = () => {

  const relatives = ['Hanuman Ji', 'Ram Ji', 'Sita Maa', 'Lakshaman Bhaiya', 'Brahma Ji', 'Vishnu Ji', 'Shankar Ji' ]
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ul>
                {relatives.map((item)=>{

                  return  <li key={item}>{item}</li>
                })}
               </ul>
    </div>
  )
}

export default App
