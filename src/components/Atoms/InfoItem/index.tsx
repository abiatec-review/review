/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo } from 'react';
import { IFunctions, IInfoItem } from 'Atoms/types';
import { Image } from 'components/Atoms';

const InfoItem: React.FC<IInfoItem> = ({ data, dataType }) => {
  const validateFunctions:IFunctions = useMemo(() => ({
    id: () => null,
    episode: () => null,
    url: () => null,
    origin: () => null,
    name: (currentData) => <div className="text-red-400">{currentData}</div>,
    type: (currentData) => (currentData || null),
    location: (currentData) => (`location: ${currentData.name}` || null),
    image: (currentData) => (<Image src={currentData} alt="Modal image" />),
    created: (currentData: string) => (`created: ${currentData.substring(0, 10)}`),
  }), []);

  const renderItemContent = () => (dataType in validateFunctions ? validateFunctions[dataType](data) : `${dataType}: ${data}`);

  const content = renderItemContent();

  return content ? (
    <div style={{ width: '100%', overflow: 'hidden' }} className="grid justify-center" key={dataType}>
      {content}
    </div>
  ) : null;
};

export default InfoItem;
