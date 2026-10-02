// Converte "YYYY-MM" em "Mês/Ano" no formato pt-BR
export function formatMonthYear(value) {
  if (!value) return 'Atual'
  const [year, month] = value.split('-')
  const date = new Date(Number(year), Number(month) - 1)
  const formatted = date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })
  return formatted.charAt(0).toUpperCase() + formatted.slice(1).replace('.', '')
}

export function formatPeriod(start, end) {
  return `${formatMonthYear(start)} - ${end ? formatMonthYear(end) : 'Atual'}`
}
