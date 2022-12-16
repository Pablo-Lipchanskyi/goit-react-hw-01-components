import css from "./Statistics.module.css"
export const Statistic = ({
    title,
    stats
}) => {
    return (
        <section className={css.statistics}>
        {title.length > 0 && (<h2 className={css.title}>{title}</h2>)}

  <ul className={css.statlist}>
    {stats.map(stat => (
        <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
        </li>
        ))}
  </ul>
</section>
    )
}

    /*<li className="item">
      <span className="label">.docx</span>
      <span className="percentage">4%</span>
    </li>
    <li className="item">
      <span className="label">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item">
      <span className="label">.pdf</span>
      <span className="percentage">41%</span>
    </li>
    <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">12%</span>
    </li>*/