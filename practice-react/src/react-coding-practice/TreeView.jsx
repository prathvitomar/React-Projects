import React from 'react'

const SidebarItem = ({ item }) => {
    const { label, to, children } = item;
  
    return (
      <div style={{ marginLeft: 20 }}>
        <a href={to} style={{ display: 'block', padding: '5px 0' }}>{label}</a>
        {children && (
          <div style={{ marginLeft: 10 }}>
            {children.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  };


function TreeView({data}) {

  return (
    <div>
      {data.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default TreeView