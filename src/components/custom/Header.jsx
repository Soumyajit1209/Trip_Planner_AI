// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className=' shadow-sm flex justify-between items-center'>
      <img src='/logo.svg'/>
      <div>
          <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
