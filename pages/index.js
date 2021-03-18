import React, { useState } from 'react';
import { Editor } from 'primereact/editor';

export default function Home() {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Editor style={{height:'320px'}} value={text} onTextChange={(e) => setText(e.htmlValue)} />
    </div>
  )
}
