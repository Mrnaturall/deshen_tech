'use client'

import Image from 'next/image'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { SignInWithGoogle } from '@/lib/actions/user.action'

export function GoogleSignInForm() {
  const SignInButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button disabled={pending} className="w-full flex items-center justify-center gap-2" variant="outline">
        <Image
          src="/icons/google-icon.png" // Ensure this file exists in your `public/` folder
          alt="Google"
          width={20}
          height={20}
        />
        {pending ? 'Redirecting to Google...' : 'Sign In with Google'}
      </Button>
    )
  }

  return (
    <form action={SignInWithGoogle}>
      <SignInButton />
    </form>
  )
}
