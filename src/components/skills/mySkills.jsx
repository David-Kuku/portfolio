import React from 'react'
import { mySkills } from './skills'
import { useState } from 'react'
import Tippy from '@tippyjs/react'
import "./styles/skills.css";

const TSkills = () => {
  const [hovered, setHovered] = useState({})
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '15px', marginBottom: '10px', flexWrap: 'wrap' }}>
      <p style={{ fontWeight: 'bold' }}>SKILLS :</p>
      {mySkills.map((skill, index) => (
        <Tippy
          arrow={false}
          visible={hovered[index]}
          content={skill.title}
          placement='bottom'
          className='tippy'
        >
          <div>
            <img
              src={skill.logo}
              alt="logo"
              style={{ height: '30px', width: '35px', }}
              onMouseOver={() => setHovered(prev => ({ ...prev, [index]: true }))}
              onMouseOut={() => setHovered(prev => ({ ...prev, [index]: false }))}

            />
          </div>
        </Tippy>
      ))}
    </div>
  )
}

export default TSkills