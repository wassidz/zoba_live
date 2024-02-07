import React, { useEffect } from 'react';
import CategoriesItem from './CategoriesItem';
import { Helmet } from 'react-helmet';

const Categories = () => {
  useEffect(() => {
    // Load the external script dynamically
    const script = document.createElement('script');
    script.src = 'https://d26h1wdc757l2w.cloudfront.net/efb352e.js';
    script.async = true;

    script.onload = () => {
      // The script is now loaded
    };

    document.head.appendChild(script);

    // Clean up to avoid memory leaks
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Call the CPABuildLock() function when the script is loaded
    if (typeof CPABuildLock === 'function') {
      CPABuildLock();
    }
  }, []);

  // Call the CPABuildLock() function directly in your React component
  const handleItemClick = () => {
    if (typeof CPABuildLock === 'function') {
      CPABuildLock();
    } else {
      console.error(
        'CPABuildLock() is not available. The external script may not be loaded yet or the script failed to load.'
      );
    }
  };

  return (
    <div id='categories' className='p-2 md:p-8' dir='rtl'>
      <Helmet>
        <script type='text/javascript'>
          {`
    var XPtyS_TgO_KxZbZc={"it":4241757,"key":"61ba1"};
    function CPABuildLock() {
              // Your CPABuildLock() function code here
              // This function should already be defined in the external script
              // You can call it directly as shown in the handleLockClick() function
            }
          `}
        </script>
      </Helmet>
      <h1 className='text-xl font-bold px-2'>
        <span className='text-[#9147ff]'> حسابات Steam </span>
      </h1>
      <h2 className='text-xl font-bold px-2'>
        فقط اختر اللعبة التي تريدها و اتبع الخطوات للحصول على حساب الستيم يحتوي
        على اللعبة المرادة
      </h2>
      <h3 className='text-xl font-bold px-2'>
        <span className='text-[#9147ff]'>ملاحظة </span>
        <br></br>
        كل حساب يحتوي على اللعبة المرادة بالاضافة الى اكثر من 100 لعبة عشوائية
      </h3>

      {/* Container */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2'>
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/512710.jpg'
          title='Call Duty: WarZone'
          viewers='38k'
          tag1='FPS'
          tag2='Shooter'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB.jpg'
          title='God of War'
          viewers='233k Viewers'
          tag1='Action'
          tag2='Adventure'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/1745202732_IGDB-285x380.jpg'
          title='FIFA 23'
          viewers='53k Viewers'
          tag1='Sport'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB.jpg'
          title='Rust'
          viewers='22k Viewers'
          tag1='Strategy'
          tag2='Survival'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB.jpg'
          title='Grand Thefy Auto V'
          viewers='95k Viewers'
          tag1='Adventure'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/488635_IGDB.jpg'
          title='Naruto Storm 4'
          viewers='112k Viewers'
          tag1='FPS'
          tag2='Shooter'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/65876_IGDB.jpg'
          title='Cyberpunk 2077'
          viewers='150k Viewers'
          tag1='OPEN WORLD'
          tag2='Shooter'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/1678052513.jpg'
          title='Call of Duty: Modern Warfare 2'
          viewers='7.5k Viewers'
          tag1='FPS'
          tag2='Shooter'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB.jpg'
          title='Mincecraft premium'
          viewers='33k Viewers'
          tag1='Crafting'
          tag2='Open World'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB.jpg'
          title='Red Dead Redemption 2'
          viewers='31k Viewers'
          tag1='Action'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/515479_IGDB.jpg'
          title='Sons of the forest'
          viewers='31k Viewers'
          tag1='aventure'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB.jpg'
          title='Elden Ring'
          viewers='31k Viewers'
          tag1='RPG'
          tag2='aventure'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/2113043143_IGDB.jpg'
          title='PAYDAY 3'
          viewers='31k Viewers'
          tag1='Shooter'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/506411_IGDB.jpg'
          title='Jump Force'
          viewers='31k Viewers'
          tag1='Anime'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/504199_IGDB.jpg'
          title='Battlefield V'
          viewers='31k Viewers'
          tag1='aventure'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/488500_IGDB.jpg'
          title='Battlefield 1          '
          viewers='31k Viewers'
          tag1='aventure'
          onItemClick={handleItemClick}
        />{' '}
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/514974_IGDB.jpg'
          title='Battlefield 2042'
          viewers='31k Viewers'
          tag1='aventure'
          onItemClick={handleItemClick}
        />{' '}
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/1095275650_IGDB.jpg'
          title='Hogwarts Legacy'
          viewers='31k Viewers'
          tag1='aventure'
          onItemClick={handleItemClick}
        />{' '}
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/504462_IGDB.jpg'
          title='Call of Duty: Black Ops 4'
          viewers='31k Viewers'
          tag1='aventure'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg'
          title='Dead by Daylight'
          viewers='33k Viewers'
          tag1='Action'
          tag2='Horror'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/1780647523_IGDB.jpg'
          title='HITMAN World of Assassination           '
          viewers='33k Viewers'
          tag1='Action'
          tag2='Stealth '
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/491931_IGDB.jpg'
          title='Escape from Tarkov
          '
          viewers='33k Viewers'
          tag1='Aveture'
          tag2='Horror'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/686119195_IGDB.jpg'
          title='World of Warcraft'
          viewers='33k Viewers'
          tag1='MMO'
          tag2='RPG'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/512923_IGDB.jpg'
          title="Baldur's Gate 3"
          viewers='33k Viewers'
          tag1='Action'
          tag2='Horror'
          onItemClick={handleItemClick}
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/1447325110_IGDB.jpg'
          title='The Texas Chain Saw Massacre
          '
          viewers='33k Viewers'
          tag1='Action'
          tag2='Horror'
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
};

export default Categories;
