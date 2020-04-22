export const getLastDate = (lastDateNumber) => {
  // if lastDateNumber = 7  => 2019-6-18  2019-6-11
  const date = new Date()
  date.setDate(date.getDate() - lastDateNumber)
  const time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  return time
}
