import React from 'react'

function page({params}) {
  return (
    <div>
      Groceries Item {params.groid}
    </div>
  )
}

export default page
