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
          'bg-gray-900 hover:bg-gray-900/30 focus:ring-yellow-600 inline-flex items-centerrounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2',
        )}
      >
        <BiUpArrowAlt className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}