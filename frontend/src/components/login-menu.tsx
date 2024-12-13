import {
  CalendarHeartIcon,
  LaptopIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
  UserPlusIcon,
} from 'lucide-react'

import { useTheme } from '@/components/theme-provider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { useState } from 'react'
import { Button } from './ui/button'
import LoginButton from './LoginBtn'
import { useAuth0 } from '@auth0/auth0-react'

interface LoginMenuProps {
  isHomePage: boolean
  scrollY: number
  height: number
}
//TODO: Add a login form link, add link to profile page, replace Temporary state logedIn with real state provider when authentication available

export function LoginMenu({ isHomePage, scrollY, height }: LoginMenuProps) {
  const { setTheme, theme } = useTheme()

  const [ logedIn, setLogedIn ] = useState(false)


  // Testing fetching protected route
  const { user, getAccessTokenSilently } = useAuth0();

  const fetchEvents = async () => { 
    try { 
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_API_AUDIENCE,
          scope: import.meta.env.VITE_PROVIDER_ALLOWED_SCOPES,
        },
      })


      fetch(
        `${import.meta.env.VITE_API_DOMAIN}/secure/events`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(data => data.json())
      .then(json => console.log(json)); 

    } catch (error) { console.error(error); }
  }

  if (user)
    fetchEvents()


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={'icon'}
          variant={'icon'}
          className={`fixed bg-foreground p-0 hover:bg-foreground/70 ${isHomePage && scrollY < height && '!bg-background'} ${isHomePage && scrollY == 0 ? 'right-12 top-12' : 'right-4 top-3'}`}
        >
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>
              <UserIcon
                className={`text-background ${isHomePage && scrollY < height && '!text-foreground'}`}
              ></UserIcon>
            </AvatarFallback>
          </Avatar>{' '}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <UserIcon />
              <span>Test</span>
              <LoginButton/>
            </DropdownMenuItem>
        

        {logedIn && (
          <>
            <DropdownMenuItem>
              <UserIcon />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CalendarHeartIcon />
              <span>My Events</span>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <SunIcon className={`${theme === 'light' ? 'block' : 'hidden'}`} />
            <MoonIcon className={`${theme === 'dark' ? 'block' : 'hidden'}`} />
            <LaptopIcon
              className={`${theme === 'system' ? 'block' : 'hidden'}`}
            />
            <span>Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                <SunIcon />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                <MoonIcon /> Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                <LaptopIcon /> System
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {logedIn ? (
            <DropdownMenuItem onClick={() => setLogedIn(!logedIn)}>
              <LogOutIcon />
              <span>Log out</span>
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem onClick={() => setLogedIn(!logedIn)}>
                <UserPlusIcon />
                <span>Sign up</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLogedIn(!logedIn)}>
                <LogOutIcon />
                <span>Log in</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
