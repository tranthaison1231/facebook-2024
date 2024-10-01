import { resetPassword } from '@/core/apis/auth'
import { Button } from '@/core/components/ui/button'
import { Input } from '@/core/components/ui/input'
import { useSearchParams } from '@remix-run/react'

function ResetPassword() {
  const [searchParams] = useSearchParams()

  const handleResetPassword = async () => {
    const accessToken = searchParams.get('access-token')
    if (!accessToken) {
      return
    }
    console.log('accessToken', accessToken)

    await resetPassword('newPassword', accessToken)
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">Reset Password</h1>
        <Input type="password" placeholder="New Password" className="mt-4 px-2 py-1" />
        <Input type="password" placeholder="Confirm Password" className="mt-4 px-2 py-1" />
        <Button className="mt-4" onClick={handleResetPassword}>
          Reset Password
        </Button>
      </div>
    </div>
  )
}

export default ResetPassword
