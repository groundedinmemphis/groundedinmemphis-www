export function linkResolver(doc: any) {
  if (!doc) {
    return '/';
  }

  if (doc.url) {
    return doc.url;
  }

  return '/';
}
