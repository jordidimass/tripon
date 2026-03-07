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

  return <LoginForm nextPath={nextPath} />
}
