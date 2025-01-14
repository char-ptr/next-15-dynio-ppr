export default function SlugPage() {
  return <p>hi</p>
}
export function generateStaticParams() {
  return [{ slug: ["test"] }]
}
