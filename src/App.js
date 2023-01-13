import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [gifts, setGifts] = useState (data);
  const removeGift = (id) => {
    let newGift = gifts.filter(gift => gift.id !==id)
    setGifts(newGift)
  }

  return (
    <div>
      <div className='container'>
        <h1>Список из {gifts.length} вещей на День рождения</h1>
      </div>

      {gifts.map((element => {
        const {id, gift, image} = element;

        return (
          <div>
            <div className='container'>
              <h2>{id} {gift}</h2>
              <img src={image} width='400px' alt='ph'/>
            </div>
            <div className='container'>
              <button className='btn' onClick={() => removeGift(id)}>УДАЛИТЬ</button>
            </div>
          </div>
        )
      }))}
            <div className='container'>
              <button className='btnTwo' onClick={() => setGifts([])}>УДАЛИТЬ ВСЁ</button>
            </div>
    </div>
  );
}

export default App;
