import './index.css'

export interface IContentItem {
  name: string;
  id: string;
  image: string;
  status?: string;
}

const ContentItem: React.FC<IContentItem> = ({id, image, name}) => {
  return (
    <div key={id}>
        <img src={image} alt={`${name} character`}/>
        <div>{name}</div>
    </div>
  )
}

export default ContentItem;
