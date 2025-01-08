var concepts = dv.current().file.inlinks
  .map(i => dv.page(i))
  .sort(c => -c.file.ctime);

function getTitle(p) {
  if (p.title) {
    return `[${p.title}](${p.file.name}) ${getAlias(p)}`
  }
  return `[${p.file.name}](${p.file.name}) ${getAlias(p)}`
}

function getPages(c) {
  return dv.pages(`"notes"`)
    .filter(p => p.file.outlinks.includes(c))
    .map(p => generateStatus(p) + "｜" + getTitle(p))
}

function generateStatus(p) {
  if (p.status == "finished") {
    return "✅"
  } else if (p.status == "draft") {
    return "✏️"
  } else if (p.status == "archived") {
    return "📂"
  }
}

function getFile(pl) {
  // regex to get the file name (`file_name in `[[path/to/file_name|title]]`)
  const file_path = pl.toString().match(/\[\[(.*?)\|.*?\]\]/)[1]
  // strip suffix .md from file_path
  const file_name = file_path.replace(/.md/g, '')
  const file = dv.page(`${file_path}`)
  // exclude current file
  if (file.file.name == dv.current().file.name) {
    return ""
  }
  if (!file) {
    return `[${file_name}](topics/${file_path}) ❌`
  }
  return file.title ? `[${file.title}](${file_path}) ${getAlias(file)}` : `[[${file.file.name}]]`

}

function getAlias(p) {
  const originalAliases = p.aliases ? p.aliases : ""
  const filteredAliases = originalAliases.filter(a => a.length <= 10)
  const filteredLength = filteredAliases.length
  const aliases = (filteredAliases.length != originalAliases.length) + (filteredLength > 2) ? filteredAliases.slice(0, 2).concat("...") : filteredAliases

  return aliases.length > 0 ? `<br>  ${aliases.join("<br>  ")}` : ""
}

dv.table(["Concepts", "Also under", "Notes Related"],
  concepts.map(c => [
    getTitle(c),
    // c.file.outlinks
    //   .map(pl => getFile(pl)),
    c.file.outlinks.map(pl => getFile(pl)).filter(Boolean).join("<br>"),
    getPages(c.file.link).join("<br>")
  ])
)