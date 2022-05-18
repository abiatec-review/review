import React from 'react';
interface IProps{
  type: string
  className: string
}

export const Image:React.FC<IProps> = ({type, className}) => {
  switch(type) {
    case 'list':
      return <svg id="outline" className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="m440 496a8.00039 8.00039 0 0 0 8-8v-464a8.00039 8.00039 0 0 0 -8-8h-360a8.00039 8.00039 0 0 0 -8 8v464a8.00039 8.00039 0 0 0 8 8zm-352-464h344v448h-344z"/>
        <path d="m136 112a32 32 0 1 0 -32-32 32.03667 32.03667 0 0 0 32 32zm0-48a16 16 0 1 1 -16 16 16.01833 16.01833 0 0 1 16-16z"/>
        <path d="m192 56h24v16h-24z"/><path d="m232 56h72v16h-72z"/><path d="m272 88h16v16h-16z"/><path d="m192 88h64v16h-64z"/>
        <path d="m400 128h-280a8.00039 8.00039 0 0 0 -8 8v120a8.00039 8.00039 0 0 0 8 8h280a8.00039 8.00039 0 0 0 8-8v-120a8.00039 8.00039 0 0 0 -8-8zm-8 16v70.606l-33.44043-28.66358a41.30127 41.30127 0 0 0 -52.67773-.89258l-29.478 23.58155-46.24564-39.13039a40.14786 40.14786 0 0 0 -52.6084.64062l-49.5498 44.04393v-70.18555zm-264 91.59229 60.17969-53.49268a24.14795 24.14795 0 0 1 31.64258-.38477l78.3374 66.28516h-170.15967zm194.93115 12.40771-34.07934-28.83594 27.02519-21.62006a25.30108 25.30108 0 0 1 32.27051.54687l43.85249 37.58857v12.32056z"/><path d="m152 313.86914a24 24 0 1 0 0-35.73828 24 24 0 1 0 0 35.73828zm16-25.86914a8 8 0 1 1 -8 8 8.00917 8.00917 0 0 1 8-8zm-40 8a8 8 0 1 1 8 8 8.00917 8.00917 0 0 1 -8-8z"/><path d="m208 288h40v16h-40z"/>
        <path d="m264 288h16v16h-16z"/><path d="m112 328h288v16h-288z"/><path d="m136 360a24 24 0 1 0 24 24 24.0275 24.0275 0 0 0 -24-24zm0 32a8 8 0 1 1 8-8 8.00917 8.00917 0 0 1 -8 8z"/>
        <path d="m176 408h96a8.00039 8.00039 0 0 0 8-8v-32a8.00039 8.00039 0 0 0 -8-8h-96a8.00039 8.00039 0 0 0 -8 8v32a8.00039 8.00039 0 0 0 8 8zm8-32h80v16h-80z"/><path d="m136 416a24 24 0 1 0 24 24 24.0275 24.0275 0 0 0 -24-24zm0 32a8 8 0 1 1 8-8 8.00917 8.00917 0 0 1 -8 8z"/>
        <path d="m320 416h-144a8.00039 8.00039 0 0 0 -8 8v32a8.00039 8.00039 0 0 0 8 8h144a8.00039 8.00039 0 0 0 8-8v-32a8.00039 8.00039 0 0 0 -8-8zm-8 32h-128v-16h128z"/></svg>
    default:
      return null
  }
}

export const allImages = {
  LIST: 'list'
}
