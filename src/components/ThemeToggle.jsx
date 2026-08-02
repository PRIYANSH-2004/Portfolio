import { FiSun, FiMoon } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme.js'

const ThemeToggle = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDark}
        className={`relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors duration-200 hover:border-border-strong hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${className}`}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
                >
                    {isDark ? <FiMoon className="text-base" /> : <FiSun className="text-base" />}
                </motion.span>
            </AnimatePresence>
        </button>
    )
}

export default ThemeToggle
