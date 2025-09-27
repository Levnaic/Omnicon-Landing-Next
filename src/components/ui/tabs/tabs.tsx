import { JSX, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './tabs.scss'

export type Tab<T extends string = string> = {
  id: T
  label: string
  content: JSX.Element
}

type Props<T extends string = string> = {
  tabs: Tab<T>[]
  activeId: T
  onChange: (id: T) => void
}

const Tabs = <T extends string>({ tabs, activeId, onChange }: Props<T>) => {
  const groupId = useId()
  const current = tabs.find(t => t.id === activeId)!
  return (
    <div className="tabs">
      <div className="tabs-list" role="tablist" aria-label={`tabs-${groupId}`}>
        {tabs.map(t => {
          const selected = t.id === activeId
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              className={`tab ${selected ? 'is-active' : ''}`}
              onClick={() => onChange(t.id)}
            >
              {t.label}
              {selected && (
                <motion.span
                  className="tab-pill"
                  layoutId="tab-pill"
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
              )}
            </button>
          )
        })}
      </div>

      <div className="tabs-panels">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            id={`panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="tab-panel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {current.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Tabs