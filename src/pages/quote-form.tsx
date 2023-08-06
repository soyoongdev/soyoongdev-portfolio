'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '~/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { toast } from '~/components/ui/use-toast'
import {
  Wrapper,
  WrapperContent,
  WrapperHeader,
  WrapperTitle,
} from '~/components/layouts/wrapper'

const profileFormSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: 'Your full name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Your full name must not be longer than 30 characters.',
    }),
  phoneNumber: z
    .string()
    .min(10, {
      message: 'Your phone number must be at least 10 characters',
    })
    .max(10, {
      message: 'Your phone number must be at least 10 characters',
    }),
  email: z
    .string()
    .min(2, {
      message: 'Your phone number must be at least 10 characters',
    })
    .email(),
  who: z.string({
    required_error: 'Please select an object to display.',
  }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export default function QuoteForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onChange',
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Wrapper hasNavbar hasFooter title='Báo giá' className='bg-base'>
      <WrapperHeader>
        <WrapperTitle className='text-center'>
          Thông tin báo giá sản phẩm
        </WrapperTitle>
      </WrapperHeader>
      <WrapperContent className='flex w-full items-center justify-center'>
        <div className='w-[65vw] rounded-md bg-background p-6'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='fullName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên của bạn</FormLabel>
                    <FormControl>
                      <Input placeholder='Nguyễn Văn A' {...field} />
                    </FormControl>
                    <FormDescription>
                      Đây là tên đầy đủ trong giấy tờ hoặc khai sinh của bạn.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phoneNumber'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Số điện thoại</FormLabel>
                    <FormControl>
                      <Input placeholder='0123456789' {...field} />
                    </FormControl>
                    <FormDescription>
                      Số điện thoại liên lạc của bạn.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='nguyenvana@gmail.com' {...field} />
                    </FormControl>
                    <FormDescription>Địa chỉ email của bạn.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='who'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bạn là ai?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Vui lòng chọn' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='Doanh nghiệp'>
                          Doanh nghiệp
                        </SelectItem>
                        <SelectItem value='Tổ chức cá nhân'>
                          Tổ chức cá nhân
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Thông tin cho chúng tôi biết chính xác bạn là ai để dễ
                      dàng liên hệ trong công việc.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <div>
                {fields.map((field, index) => (
                  <FormField
                    control={form.control}
                    key={field.id}
                    name={`urls.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={cn(index !== 0 && 'sr-only')}>
                          URLs
                        </FormLabel>
                        <FormDescription
                          className={cn(index !== 0 && 'sr-only')}
                        >
                          Add links to your website, blog, or social media
                          profiles.
                        </FormDescription>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  type='button'
                  variant='outline'
                  size='sm'
                  className='mt-2'
                  onClick={() => append({ value: '' })}
                >
                  Add URL
                </Button>
              </div> */}
              <Button type='submit'>Gửi yêu cầu</Button>
            </form>
          </Form>
        </div>
      </WrapperContent>
    </Wrapper>
  )
}
