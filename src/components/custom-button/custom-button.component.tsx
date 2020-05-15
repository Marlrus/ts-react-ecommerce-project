import React from 'react'

import './custom-button.styles.scss'

interface CustomButtonProps {
   children: React.ReactNode
   type?: 'button' | 'submit' | 'reset' 
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...otherProps }) => (
   <button 
      className='custom-button'
      {...otherProps}
   >
      { children }
   </button>
)

export default CustomButton