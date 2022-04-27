interface AvatarProps {
  size: string;
  avatarUrl: string;
}

const Avatar = ({ size, avatarUrl }: AvatarProps) => {
  return <img src={avatarUrl} className={`${size}`} alt="" />;
};

export default Avatar;
