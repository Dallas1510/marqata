import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Label({ title, children }: Props){
    return (
    <form>
      <label htmlFor='id'>
        {title}
        {children}
      </label>
    </form>
  );
};
