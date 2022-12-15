import css from "./profileStyle.module.css"
const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats
}) => {
    return (
      <div className={css.profile}>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

        <ul className={css.stats}>
    <li className={css.statsUnit}>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
    </li>
    <li className={css.statsUnit}>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
    </li>
    <li className={css.statsUnit}>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}
export default Profile