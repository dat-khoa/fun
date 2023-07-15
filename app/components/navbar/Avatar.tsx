'use client';

import Image from 'next/image';
import placeholder from '../../images/Profile_avatar_placeholder_large.png';
// interface AvatarProps {
//   src: string | null | undefined;
// }

// const Avatar: React.FC<AvatarProps> = ({ src }) => {
const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      // src={src || placeholder}
      src={placeholder}
    />
  );
};

export default Avatar;
