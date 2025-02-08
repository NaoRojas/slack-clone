import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export const SignInCard = () => {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Log in to continue</CardTitle>
        <CardDescription>
          Use your email or another serivce to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 px-0 pb-0">
        <form action="" className="space-y-2.5">
          <Input
            disabled={false}
            value=""
            type="email"
            placeholder="Email"
            required
          />
          <Input
            disabled={false}
            value=""
            type="password"
            placeholder="Password"
            required
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
