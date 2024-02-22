// // resolve unresolved links

// module.exports = async function moveFilesWithTag(params) {
//   const {
//     app,
//     quickAddApi: { suggester, yesNoPrompt },
//   } = params;

//   const unresolvedLinks = app.vault.getUnresolvedLinks();
//   const unresolvedLinksCount = unresolvedLinks.length;

//   if (unresolvedLinksCount === 0) {
//     new Notice('No unresolved links found');
//     return;
//   }

//   const unresolvedLinksList = unresolvedLinks.map((link) => link.link);
//   const unresolvedLinksListString = unresolvedLinksList.join('\n');

//   const unresolvedLinksPrompt = new Notice(
//     `Unresolved links found: ${unresolvedLinksCount}`,
//     unresolvedLinksListString
//   );

//   const resolveUnresolvedLinks = await yesNoPrompt(
//     'Resolve unresolved links?',
//     'Resolve unresolved links'
//   );

//   if (!resolveUnresolvedLinks) {
//     return;
//   }

//   const unresolvedLinksResolved = unresolvedLinks.map((link) => {
//     const resolvedLink = app.metadataCache.getFirstLinkpathDest(link.link);
//     return {
//       link: link.link,
//       resolvedLink,
//     };
//   });

//   const unresolvedLinksResolvedList = unresolvedLinksResolved.map(
//     (link) => `${link.link} -> ${link.resolvedLink}`
//   );

//   const unresolvedLinksResolvedListString = unresolvedLinksResolvedList.join(
//     '\n'
//   );

//   const unresolvedLinksResolvedPrompt = new Notice(
//     `Resolved links: ${unresolvedLinksCount}`,
//     unresolvedLinksResolvedListString
//   );

//   new Notice('Unresolved links resolved');

//   unresolvedLinksPrompt.hide();

//   unresolvedLinksResolvedPrompt;

//   return;
// };