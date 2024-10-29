import { Button } from '@/core/components/ui/button'
import { Calendar } from '@/core/components/ui/calendar'
import { Input } from '@/core/components/ui/input'
import { Label } from '@/core/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/core/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/core/components/ui/radio-group'
import Ratings from '@/core/components/ui/rating'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/core/components/ui/select'
import { cn } from '@/core/utils/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const registerFormSchema = z.object({
  email: z.string().email(),
  country: z.string().nonempty(),
  birthday: z.date(),
  range: z.object({
    from: z.date(),
    to: z.date()
  }),
  rating: z.number().int().min(1).max(5),
  gender: z.enum(['male', 'female'])
})

type RegisterForm = z.infer<typeof registerFormSchema>

export function NotificationForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      country: '',
      rating: 0
    }
  })

  const birthday = watch('birthday')

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form className="mx-auto flex w-96 flex-col gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" placeholder="Email" {...register('email')} />
      {errors.email && <span className="text-red-500">Email is required</span>}
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <Select value={field.value} onValueChange={value => field.onChange(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country</SelectLabel>
                <SelectItem value="vietnam">VietNam</SelectItem>
                <SelectItem value="america">America</SelectItem>
                <SelectItem value="singapore">Singapore</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {errors.country && <span className="text-red-500">Country required</span>}
      <Controller
        control={control}
        name="birthday"
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn('w-full justify-start space-x-4 text-left font-normal', 'text-muted-foreground')}
              >
                <CalendarIcon />

                {birthday ? <span>{birthday.toLocaleDateString()}</span> : <span>Pick a birthday</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={field.value} onSelect={date => field.onChange(date)} />
            </PopoverContent>
          </Popover>
        )}
      />
      {errors.birthday && <span className="text-red-500">Birthday required</span>}
      <Controller
        name="range"
        control={control}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn('w-full justify-start space-x-4 text-left font-normal', 'text-muted-foreground')}
              >
                <CalendarIcon />

                {field.value?.from && field.value?.to ? (
                  <span>
                    {field.value.from.toLocaleDateString()} - {field.value.to.toLocaleDateString()}
                  </span>
                ) : (
                  <span>Pick a start date and end date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                numberOfMonths={2}
                selected={{
                  from: field.value?.from,
                  to: field.value?.to
                }}
                onSelect={range => field.onChange(range)}
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {errors.range && <span className="text-red-500">Range required</span>}
      <Controller
        name="rating"
        control={control}
        render={({ field }) => (
          <Ratings value={field.value} variant="yellow" onValueChange={value => field.onChange(value)} />
        )}
      />
      {errors.rating && <span className="text-red-500">Rating required</span>}
      <p> Choose a Gender </p>
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <RadioGroup value={field.value} onValueChange={value => field.onChange(value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        )}
      />
      <Button type="submit"> Submit </Button>
    </form>
  )
}
