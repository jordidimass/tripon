import { LoginForm } from "@/components/auth/login-form"

type SearchParams = { [key: string]: string | string[] | undefined }

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const sp = await searchParams
  const rawNext = sp.next
  const nextPath = typeof rawNext === "string" ? rawNext : Array.isArray(rawNext) ? rawNext[0] : undefined

  return (
    <div className="relative min-h-[calc(100dvh-6rem)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_10%_0%,rgba(255,255,255,0.09),transparent_45%),radial-gradient(700px_circle_at_100%_0%,rgba(126,91,255,0.2),transparent_40%)]" />
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <LoginForm nextPath={nextPath} />
      </div>
    </div>
  )
}
