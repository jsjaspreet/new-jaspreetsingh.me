import humps from 'humps'

export default (pgPool) => {
  // queries here
  return {
    getWorkouts() {
      return pgPool.query(`
      select * from workouts
      `).then(res => {
        return humps.camelizeKeys(res.rows)
      })
    },
    getWorkoutByDate(date) {
      return pgPool.query(`
      select * from workouts
      where workout_date = $1
      `, [date]).then(res => {
        return humps.camelizeKeys(res.rows[0])
      })
    }
  }
}