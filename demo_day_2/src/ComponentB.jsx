import styles from './ComponentB.module.scss'
console.log(styles);
function ComponentB () {
  return <h1 className={styles.heading}>Component B</h1>
}
//?Es Module : IMPORT,EXPORT
export default ComponentB