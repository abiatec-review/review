import React from 'react';
import { IInfoBlock } from 'Molecules/types';
import { InfoItem } from 'components/Atoms';

const InfoBlock: React.FC<IInfoBlock> = ({ content }) => {
  const renderInfoBlock = () => Object.entries(content).map((item: [string, unknown]) => (
    <InfoItem dataType={item[0]} data={item[1]} key={`${item[0]}-infoItem`} />
  ));

  return (
    <div className="grid gap-2 mt-10">
      {renderInfoBlock()}
    </div>
  );
};

export default InfoBlock;