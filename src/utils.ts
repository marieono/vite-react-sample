/**
 * 日付データをハイフン区切りのテキストに変換
 */
export const getDateText = (date: Date): string => {
  const monthText = `0${date.getMonth() + 1}`.slice(-2)
  const dateText = `0${date.getDate()}`.slice(-2)
  return `${date.getFullYear()}-${monthText}-${dateText}`
}
