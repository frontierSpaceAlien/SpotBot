import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import { getURL, verifyOtp } from '@/services/auth.api'

interface ConfirmProps {
  token_hash: string
  type: string
  next: string
}

export default function Confirm({ token_hash, type, next }: ConfirmProps) {
  const router = useRouter()

  const OtpMutation = useMutation({
    mutationFn: (data: Parameters<typeof verifyOtp>[0]) => verifyOtp(data),
    onSuccess: () => {
      router.navigate({ to: '/' + next })
    },
  })

  React.useEffect(() => {
    OtpMutation.mutate({
      data: {
        token: token_hash,
        type: type,
      },
    })
  }, [])
  return <div>Validating...</div>
}
