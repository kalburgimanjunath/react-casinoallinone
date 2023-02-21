import React from 'react';
export default function Banner() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: 20,
      }}
    >
      <img
        src="https://picsum.photos/200"
        style={{ borderRadius: 20, width: '100%' }}
      />
      <div style={{ margin: 20 }}>
        <div>
          <h3>Prizes every day!</h3>
        </div>
        <div>
          Take part in the Tournaments by Pragmatic as soon as possible{' '}
        </div>
      </div>
    </div>
  );
}
