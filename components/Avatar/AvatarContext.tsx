import * as React from 'react';

export type AvatarSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export interface AvatarContextType {
  size?: AvatarSize;
}

const AvatarContext = React.createContext<AvatarContextType>({});

export default AvatarContext;
