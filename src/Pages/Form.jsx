import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData);
    
  }
  const onAdd = () => {

  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '320px' }}>
      <input
        type='text'
        name='Title'
        placeholder='Enter your title'
        value={formData.Title ?? ''}
        onChange={handleChange}
      />
      <input
        type='text'
        name='Desc'
        placeholder='Enter your description'
        value={formData.Desc ?? ''}
        onChange={handleChange}
      />
      <input
        type='tel'
        name='Phone'
        placeholder='Enter your phone'
        value={formData.Phone ?? ''}
        onChange={handleChange}
      />
      <button onClick={onAdd} >Add</button>


      {formData && formData.map(((item, index) =>{
        return (
            <div key={index}>
                <h2> {item.Title} </h2>
                <h2> {item.Desc} </h2>
                <h2> {item.Phone} </h2>
            </div>
        )
      }))}
    </div>
  )
}

export default Form
