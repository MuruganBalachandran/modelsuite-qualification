// imports
import { useState } from "react";

const UserAvatar = ({
  name = "User",
  avatar,
  className = "",
  alt = "",
  style = {},
}) => {
  const [hasImageError, setHasImageError] = useState(false);

  // Use the first letter as the simple fallback badge.
  const initials =
    (name || "User").split(" ").filter(Boolean)[0]?.[0]?.toUpperCase() || "U";

  if (!avatar || hasImageError) {
    return (
      <div className={className} style={style}>
        {initials}
      </div>
    );
  }

  return (
    <img
      src={avatar}
      alt={alt || `${name} avatar`}
      className={className}
      style={style}
      onError={() => setHasImageError(true)}
    />
  );
};

export default UserAvatar;
