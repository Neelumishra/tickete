import React from 'react'
import Questionfirst from './Questionfirst'
import Questionsecond from './Questionsecond'

function Question() {
  return (
    <>
      {/* <div className="sm:flex flex-col hidden">
        <Questionfirst />
        <Questionsecond />
      </div> */}
      <div className="flex justify-evenly flex-wrap md:flex-nowrap">
        <Questionfirst />
        <Questionsecond />
      </div>
    </>
  );
}

export default Question
//sm:propeties 
//prop will apply from sm to lg 

//md:prop
//prop will apply from md to lg