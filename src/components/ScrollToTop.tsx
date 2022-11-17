import { useEffect, useState } from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'

import classNames from '@/utils/classnames';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-6">
      <button
        type="button"
        title="back to top"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-teal-200 hover:bg-teal-200/50 focus:ring-purple-500 inline-flex items-center rounded-full p-3 text-slate-900 shadow-sm transition-all easy-in focus:outline-none focus:ring-2 focus:ring-offset-2',
        )}
      >
        <BiUpArrowAlt className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

export default ScrollToTop;