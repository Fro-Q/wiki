// input: file Object
const f = input.file

function getTitle(f) {
  if (f.title) {
    console.log(`[${f.title}](${f.file.name})`)
    return `[${f.title}](${f.file.name})`
  }
  return `[[${f.file.name}]]`
}

getTitle(f)