export function getAlias(p) {
  const originalAliases = p.aliases ? p.aliases : ""
  const filteredAliases = originalAliases.filter(a => a.length <= 10)
  const filteredLength = filteredAliases.length
  const aliases = (filteredAliases.length != originalAliases.length) + (filteredLength > 2) ? filteredAliases.slice(0, 2).concat("...") : filteredAliases

  return aliases.length > 0 ? `<br>${aliases.join("<br>")}` : ""
}