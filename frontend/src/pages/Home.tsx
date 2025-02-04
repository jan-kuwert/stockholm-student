import HomeEventsSection from '@/components/home-events-section'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StockholmImage from '../assets/stockholm-night-day.jpeg'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {}, [])

  return (
    <div className="relative scroll-smooth bg-green-100">
      {/* Background with parallax effect */}
      <div className="relative h-screen overflow-hidden">
        <motion.div className="fixed">
          <img
            src={StockholmImage}
            alt="Stockholm"
            className="h-[100vh] w-full object-cover"
          />
        </motion.div>

        {/* Title and Button */}
        <div className="relative flex h-full flex-col justify-center px-4 text-neutral-100">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6 text-center"
          >
            {/* Main Heading with animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 0.4,
                type: 'spring',
                stiffness: 100,
              }}
              className="space-y-4"
            >
              <h2 className="font-serif text-4xl font-semibold tracking-wider md:text-5xl">
                Your Student Life <br />
                in one place
              </h2>
            </motion.div>
            <Button
              variant={'transparent'}
              size={'xxl'}
              onClick={() => navigate('/events')}
            >
              Discover Events <ArrowRightIcon />
            </Button>
          </motion.div>
        </div>
      </div>

      <HomeEventsSection />
      {/* <HomeQuestionsSection /> */}

      <div className="relative flex flex-col justify-center bg-background p-10">
        <span className="text-2xl">Components Showcase:</span>
        <span className="mb-2 mt-5 text-lg">Buttons:</span>
        <div className="flex w-full flex-wrap gap-2 sm:justify-around">
          <Button>
            Default
            <ArrowRightIcon />
          </Button>
          <Button variant={'outline'}>
            Outline
            <ArrowRightIcon />
          </Button>
          <Button variant={'transparent'}>Transparent</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'link'}>Link</Button>
          <Button variant={'destructive'}>Destructive</Button>
        </div>
        <span className="my-4 text-lg">Colors:</span>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="rounded-xl bg-neutral-200 p-5 text-black">
            <span>Lightmode:</span>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-background"></div>
              <span>background</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-foreground"></div>{' '}
              <span>foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-card"></div> <span>card</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-card-foreground"></div>{' '}
              <span>card-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-popover"></div>
              <span>popover</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-popover-foreground"></div>{' '}
              <span>popover-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-primary"></div> <span>primary</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-primary-foreground"></div>{' '}
              <span>primary-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-secondary"></div>{' '}
              <span>secondary</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-secondary-foreground"></div>
              <span>secondary-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-muted"></div> <span>muted</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-muted-foreground"></div>{' '}
              <span>muted-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-accent"></div> <span>accent</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-accent-foreground"></div>{' '}
              <span>accent-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-destructive"></div>{' '}
              <span>destructive</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-destructive-foreground"></div>{' '}
              <span>destructive-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-border"></div>
              <span>border</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-input"></div> <span>input</span>
            </div>
            <div className="flex space-x-2">
              <div className="h-5 w-5 bg-ring"></div> <span>ring</span>
            </div>
          </div>
          <div className="rounded-xl bg-neutral-900 p-5 text-white">
            <span>Darkmode:</span>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-background"></div>
              <span>background</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-foreground"></div>{' '}
              <span>foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-card"></div> <span>card</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-card-foreground"></div>{' '}
              <span>card-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-popover"></div>
              <span>popover</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-popover-foreground"></div>{' '}
              <span>popover-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-primary"></div>{' '}
              <span>primary</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-primary-foreground"></div>{' '}
              <span>primary-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-secondary"></div>{' '}
              <span>secondary</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-secondary-foreground"></div>
              <span>secondary-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-muted"></div> <span>muted</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-muted-foreground"></div>{' '}
              <span>muted-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-accent"></div> <span>accent</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-accent-foreground"></div>{' '}
              <span>accent-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-destructive"></div>{' '}
              <span>destructive</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-destructive-foreground"></div>{' '}
              <span>destructive-foreground</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-border"></div>
              <span>border</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-input"></div> <span>input</span>
            </div>
            <div className="flex space-x-2">
              <div className="dark h-5 w-5 bg-ring"></div> <span>ring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
