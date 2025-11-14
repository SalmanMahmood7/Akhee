"use client"

import { useEffect, useRef } from 'react'

interface RichTextEditorProps {
  value
  onChange(value) => void
  placeholder?
  className?
  minHeight?
}

export function RichTextEditor({ 
  value, 
  onChange, 
  placeholder = "Enter content...",
  className = "",
  minHeight = "300px" 
}) {
  const editorRef = useRef<HTMLDivElement>(null)
  const isInternalChange = useRef(false)

  useEffect(() => {
    if (editorRef.current && !isInternalChange.current) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || ''
      }
    }
    isInternalChange.current = false
  }, [value])

  const handleInput = () => {
    if (editorRef.current) {
      isInternalChange.current = true
      onChange(editorRef.current.innerHTML)
    }
  }

  const handleCommand = (command, value?) => {
    document.execCommand(command, false, value)
    handleInput()
  }

  const handleKeyDown = (e) => {
    // Handle some keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault()
          handleCommand('bold')
          break
        case 'i':
          e.preventDefault()
          handleCommand('italic')
          break
        case 'u':
          e.preventDefault()
          handleCommand('underline')
          break
      }
    }
  }

  return (
    <div className={`border rounded-lg ${className}`}>
      {/* Toolbar */}
      <div className="border-b p-2 flex flex-wrap gap-1 bg-gray-50">
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => handleCommand('bold')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Bold (Ctrl+B)"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h8a4 4 0 100-8H6v8zm0 0h9a4.5 4.5 0 110 9H6v-9z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleCommand('italic')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Italic (Ctrl+I)"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 4h4m0 0l-4 16m4-16h4m-8 16h4m0 0h4" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleCommand('underline')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Underline (Ctrl+U)"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v8a5 5 0 0010 0V4M5 20h14" />
            </svg>
          </button>
        </div>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => handleCommand('formatBlock', '<h1>')}
            className="px-2 py-1 hover:bg-gray-200 rounded transition-colors text-sm font-medium"
            title="Heading 1"
          >
            H1
          </button>
          <button
            type="button"
            onClick={() => handleCommand('formatBlock', '<h2>')}
            className="px-2 py-1 hover:bg-gray-200 rounded transition-colors text-sm font-medium"
            title="Heading 2"
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => handleCommand('formatBlock', '<h3>')}
            className="px-2 py-1 hover:bg-gray-200 rounded transition-colors text-sm font-medium"
            title="Heading 3"
          >
            H3
          </button>
          <button
            type="button"
            onClick={() => handleCommand('formatBlock', '<p>')}
            className="px-2 py-1 hover:bg-gray-200 rounded transition-colors text-sm font-medium"
            title="Paragraph"
          >
            P
          </button>
        </div>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => handleCommand('insertUnorderedList')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Bullet List"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleCommand('insertOrderedList')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Numbered List"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6h10M7 12h10M7 18h10M3 6h.01M3 12h.01M3 18h.01" />
            </svg>
          </button>
        </div>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => handleCommand('justifyLeft')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Align Left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleCommand('justifyCenter')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Align Center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M7 12h10M4 18h16" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleCommand('justifyRight')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Align Right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M10 12h10M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => {
              const url = prompt('Enter URL:')
              if (url) handleCommand('createLink', url)
            }}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Insert Link"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleCommand('removeFormat')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Clear Formatting"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14v7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="p-4 focus:outline-none"
        style={{ minHeight }}
        data-placeholder={placeholder}
      />

      <style jsx>{`
        [contenteditable]:empty:before {
          content(data-placeholder);
          color#9ca3af;
        }
        [contenteditable] {
          font-family;
          line-height1.6;
        }
        [contenteditable] h1 {
          font-size2em;
          font-weight;
          margin0.67em 0;
        }
        [contenteditable] h2 {
          font-size1.5em;
          font-weight;
          margin0.83em 0;
        }
        [contenteditable] h3 {
          font-size1.17em;
          font-weight;
          margin1em 0;
        }
        [contenteditable] p {
          margin1em 0;
        }
        [contenteditable] ul, [contenteditable] ol {
          padding-left2em;
          margin1em 0;
        }
        [contenteditable] a {
          color#3b82f6;
          text-decoration;
        }
      `}</style>
    </div>
  )
}