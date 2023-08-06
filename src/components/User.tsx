'use client'
import { UserIcon } from 'lucide-react'
import React, { forwardRef } from 'react'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

export interface UserAvatarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const User = forwardRef<HTMLButtonElement, UserAvatarProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button ref={ref} {...props} className={cn(className)} variant='ghost'>
        <UserIcon size={20} />
        {/* <span className='flex-shrink-0'>Đăng nhập</span> */}
      </Button>
    )
  }
)

User.displayName = 'UserAvatar'

export default User
