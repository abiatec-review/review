interface IProps {
  titleText: string
  className: any;
}

export const TitleText: React.FC<IProps> = ( { titleText, className } ) => {
  return ( 
    <h1 className={className} >{titleText}</h1>
  )
}