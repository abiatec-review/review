/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo, FunctionComponentElement, ReactElement } from 'react';

import { IInfoItem, IInfoItemRenderFunction } from 'Atoms/types';
import { Image } from 'components/Atoms';

export const InfoItem: React.FC<IInfoItem> = ({ data, dataType }) => {
  const validateFunctions:IInfoItemRenderFunction = useMemo(() => ({
    id: () => null,
    episode: () => null,
    url: () => null,
    origin: () => null,
    name: (currentData): ReactElement<HTMLImageElement> => <div className="text-red-400">{currentData}</div>,
    type: (currentData): string | null => ((currentData as string) || null),
    location: (currentData) : string => (`location: ${(currentData as {name: string})?.name}`),
    image: (currentData): FunctionComponentElement<HTMLImageElement> => (<Image src={(currentData as string)} alt="Modal image" />),
    created: (currentData): string => (`created: ${(currentData as string)?.substring(0, 10)}`),
  }), []);

  const renderItemContent = () => (dataType in validateFunctions ? validateFunctions[dataType](data) : `${dataType}: ${data}`);

  const content = renderItemContent();

  return content ? (
    <div className="overflow-hidden w-[100%] grid justify-center" key={dataType}>
      {content}
    </div>
  ) : null;
};
