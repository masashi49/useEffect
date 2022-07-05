import React, { FC } from 'react';

type Props = {
  image: {
    id: number;
    url: string;
  };
};

export const Img: FC<Props> = ({ image }: Props) => (
  <img src={image.url} alt={String(image.id)} />
);
