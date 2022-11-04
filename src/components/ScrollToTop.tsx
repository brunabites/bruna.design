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
    <div className="fixed bottom-2 right-4">
      <button
        type="button"
        title="back to top"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-gray-900/70 hover:bg-gray-900/100 focus:ring-yellow-600 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-all easy-in focus:outline-none focus:ring-2 focus:ring-offset-2',
        )}
      >
        <BiUpArrowAlt className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

export default ScrollToTop;