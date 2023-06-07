import React from 'react'

const Body = () => {
  return (
    <div className='mx-auto px-8  max-w-lg text-sm' >

      <img className='w-full h-auto ' src="https://images.squarespace-cdn.com/content/v1/5a78ab8490badee028bef0e9/1568935524292-TPSLMXHD9HE6PKN02YOG/Interstellar.jpg?format=1500w " alt="" />

      <div className='bg-[#17151D] px-4'>
        <h1 className='text-white font-bold text-4xl'>Interstellar</h1>
        <p className='text-blue-gray-300'>PG-13/ 2h 49min/ Adventure, Drama, Sci-Fi,</p>

        <div className='text-white py-5 ' >
          <div className='flex justify-between' >
            <h1>SUMMARY</h1>
            <div className='space-x-3 text-red-800'>
              <i className="  fa-regular fa-face-smile fa-sm">124</i>
              <i className="fa-regular fa-face-frown fa-sm">12</i>

            </div>

          </div>

          <p className='text-justify tracking-tight py-2 '>
            A group of elderly people are giving interview about having lived in a climate of crop blight and constant dust reminiscent of The Great Depression fo the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way.
          </p>
          <p className='italic py-1'>Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
        </div>

        <div className='text-red-800 py-5'>
          <div className='flex justify-between'>
            <div className='border rounded border-red-600'>
              <i className="fa-solid fa-play fa-sm">   WATCH TRAILER</i>
            </div>

            <div className='space-x-12 '>
              <i className="fa-solid fa-floppy-disk fa-xl"></i>
              <i className="fa-regular fa-bookmark fa-xl"></i>
              <i className="fa-solid fa-share-nodes fa-xl"></i>
            </div>
          </div>



        </div>

      </div>




    </div>
  )
}

export default Body