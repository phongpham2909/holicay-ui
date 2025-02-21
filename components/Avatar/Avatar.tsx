import InternalAvatar from './InternalAvatar';
import AvatarGroup from './AvatarGroup';
import AvatarLabelGroup from './AvatarLabelGroup';
import AvatarProfile from './AvatarProfile';

export type { AvatarProps } from './InternalAvatar';
export type { AvatarLabelGroupProps } from './AvatarLabelGroup';
export type { AvatarProfileProps } from './AvatarProfile';

type CompoundedComponent = typeof InternalAvatar & {
  LabelGroup: typeof AvatarLabelGroup;
  Profile: typeof AvatarProfile;
  Group: typeof AvatarGroup;
};

const Avatar = InternalAvatar as CompoundedComponent;

Avatar.LabelGroup = AvatarLabelGroup;
Avatar.Profile = AvatarProfile;
Avatar.Group = AvatarGroup;

export default Avatar;
