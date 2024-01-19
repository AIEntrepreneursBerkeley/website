export function getLinkFromHTML(html: string): string {
  const match = html.match(/href="([^"]*)"/);
  return match ? match[1] : html;
}
