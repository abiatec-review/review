import './index.css'

export interface IContentItem {
  name: string;
  id: string;
  image: string;
}

const ContentItem: React.FC<IContentItem> = ({id, image, name}) => {

  return (
    <figure key={id}>
        <img src={image} alt={`${name} character`}/>
        <figcaption>{name}</figcaption>
    </figure>
    )
}

export default ContentItem;
