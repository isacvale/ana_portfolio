import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const elTitle = document.querySelector(hash.replace('#', '#view_'))
                elTitle?.scrollIntoView({
                    behavior: 'smooth'
                  })
            }, 200)
        } else {
            window.scrollTo(0, 0)
        }
    }, [hash, pathname])

    return null
}

export default ScrollToTop