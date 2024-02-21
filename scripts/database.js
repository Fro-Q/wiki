function getTitle(p) {
  if (p.title) {
    return `[${p.title}](${p.file.name})`
  }
  return `[${p.file.name}](${p.file.name})`
}