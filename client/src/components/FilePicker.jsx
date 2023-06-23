import React from 'react'

import BotonPersonalizar from './BotonPersonalizar'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
        Subir archivo
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "Ningún archivo seleccionado" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <BotonPersonalizar 
          type="outline"
          titulo="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <BotonPersonalizar 
          type="filled"
          titulo="Todo"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker