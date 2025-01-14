"use cache"
import { ReactNode } from "react";

export default async function RootLayout({ children, params }: { children: ReactNode, params: Promise<{ slug: string[] }> }) {
  return <div>hi
    {children}
    <WhatRoute params={params} />
  </div>
}
async function WhatRoute({ params }: { params: Promise<{ slug: string[] }> }) {

  const await_params = await params
  const slug = await_params.slug.join("/")
  return <p>you are on {slug}</p>
}

