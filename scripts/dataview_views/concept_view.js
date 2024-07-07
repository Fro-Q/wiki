var thisPage = dv.current()
var concepts = getInlinkNotes(thisPage.file.link)

function getTitle(p) {
  if (p.title) {
    return `[${p.title}](${p.file.name})`
  }
  return `[[${p.file.name}]]`
}

function getInlinkNotes(thisLink) {
  let allNotes = dv.pages(`"notes"`)
    .filter(n => n.file.outlinks.includes(thisLink))

  return allNotes
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
  // const file_path = pl.toString().match(/\[\[(.*?)\|.*?\]\]/)[1]
  const file_path = pl.toString().split("|")[0].replace("[[", "")
  // strip suffix .md from file_path
  const file_name = file_path.replace(/.md/g, '')
  const file = dv.page(`${file_path}`)
  if (!file) {
    return `[${file_name}](concepts/${file_path}) ❌`
  }
  return file.title ? `[${file.title}](${file_path}) ${getAlias(file)}` : `[[${file.file.name}]]`

}

function getAlias(p) {
  return p.aliases ? `<br> ${p.aliases}` : ""
}

function unique(arr) {
  // remove duplicate concepts
  // new array to store the unique concepts
  var newArr = [];
  // store the appeared topics. if a topic has appeared, skip it.
  var appearedTopicsTiel = [];
  for (var i = 0; i < arr.length; i++) {
    if (appearedTopicsTiel.includes(arr[i].toString())) {
      continue;
    }
    appearedTopicsTiel.push(arr[i].toString());
    newArr.push(arr[i]);
  }
  return newArr;
}

dv.table(["Notes Related", "Concepts Mentioned"],
  concepts.map(n => [
    getTitle(n) + " | " + generateStatus(n),
    unique(n.file.outlinks).map(l => {
      console.log(l)
      return getFile(l)
    }),
  ])
)