import React from 'react'
export const ArrowDown = () => (
  <div
    className='arrow_down'
    style={{
      position: 'absolute',
      width: '100%',
      left: 0,
      bottom: '20px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center'
    }}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-chevrons-down'>
      <polyline points='7 13 12 18 17 13' />
      <polyline points='7 6 12 11 17 6' />
    </svg>{' '}
  </div>
)
