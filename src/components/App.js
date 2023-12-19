import React from 'react'

const App = () => {

  const relatives = ['Hanuman Ji', 'Ram Ji', 'Sita Maa', 'Lakshaman Bhaiya', 'Brahma Ji', 'Vishnu Ji', 'Shankar Ji' ]
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol id='relativeList'>
                {relatives.map((item,index)=>{

                  return  <li id={'relativeListItem'+index}>{item}</li>
                })}
               </ol>
    </div>
  )
}

export default App
