import * as React from 'react'
import { ErrorScreen, type ErrorType } from '@/components/ErrorScreen'

export function generateStaticParams() {
  return [
    { code: '404' },
    { code: '500' },
    { code: '501' },
    { code: '502' },
    { code: '503' },
    { code: '504' },
    { code: 'server-error' },
  ]
}

interface ErrorPageProps {
  params: {
    code: string
  }
}

export default function DynamicErrorPage({ params }: ErrorPageProps) {
  const validCodes: ErrorType[] = ['404', '500', '501', '502', '503', '504', 'server-error']
  const code: ErrorType = validCodes.includes(params.code as ErrorType)
    ? (params.code as ErrorType)
    : '404'

  return <ErrorScreen code={code} />
}
