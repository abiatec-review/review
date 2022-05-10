import React from 'react';

interface TextDivProps {
  text: string,
  name: string,
  className?: string
}

const TextDiv = (props: TextDivProps) => {
  const { text, name, className } = props;

  return (
    <div className={className}>
      {name}: {text}
    </div>
  );
};

export default TextDiv;