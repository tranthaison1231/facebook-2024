import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

export default function RegisterButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="mt-6" variant="success">
          Create New Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">Hello</DialogContent>
    </Dialog>
  )
}
