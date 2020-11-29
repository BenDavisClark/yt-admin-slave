import React, { useState, useCallback, useEffect } from 'react'
import BraftEditor, { EditorState } from 'braft-editor'
import 'braft-editor/dist/index.css'
import './yt-editor.less'
import { YtEditorProps } from './yt-editor'

/**
 * 判断内容是否是空数据
 * @param content 内容
 */
const isContentEmpty = (content: EditorState) => {
  return content.toHTML() === '<p></p>'
}

export default function YtEditor(props: YtEditorProps) {
  const { value, onChange, disabled } = props
  const [content, setContent] = useState<EditorState>(BraftEditor.createEditorState(value || ''))

  useEffect(() => {
    // 如果 value 有值且 content 没有值，就重新设置一遍默认值
    if (value && isContentEmpty(content)) {
      setContent(BraftEditor.createEditorState(value))
    }
  }, [content, value])

  const handleChange = useCallback(
    (value: EditorState) => {
      if (onChange) {
        let html = value.toHTML()
        // 如果只有一个空的 p 标签，等于没有值
        if (html === '<p></p>') {
          html = ''
        }
        onChange(html)
      }
      setContent(value)
    },
    [onChange]
  )

  return disabled ? (
    <div dangerouslySetInnerHTML={{ __html: value }}></div>
  ) : (
    <BraftEditor
      placeholder="请输入内容"
      className="ant-input-affix-wrapper yt-editor"
      value={content}
      onChange={handleChange}
    />
  )
}
