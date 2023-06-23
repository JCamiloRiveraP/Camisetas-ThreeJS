import React from 'react'

import BotonPersonalizar from './BotonPersonalizar';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Pregúntale a la IA..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <BotonPersonalizar 
            type="outline"
            titulo="Pregúntale a la IA..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <BotonPersonalizar 
              type="outline"
              titulo="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <BotonPersonalizar 
              type="filled"
              titulo="AI Todo"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker