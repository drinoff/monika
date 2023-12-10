import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import first from '../Assets/carousel/1.jpg';
import second from '../Assets/carousel/2.jpg';
import third from '../Assets/carousel/3.jpg';
import { db } from '../../config';
import { onValue, ref, set } from 'firebase/database';
import './Home.css';

const Home = () => {
  const [appliances, setAppliances] = useState([]);
  useEffect(() => {
    const query = ref(db, '/appliances');

    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setAppliances(data);
    });
  }, []);

  const Push = () => {
    appliances.push({ username: 'o22', email: 'o22@gmail.com', age: '22' });

    set(ref(db, 'appliances'), {
      ...appliances,
    });
  };

  return (
    <div className="homeContainer">
      <button onClick={Push}>Add</button>
      <h3>Ние сме FA MultiPolis</h3>
      <Box sx={{ borderColor: '#4462C4' }}>
        <div className="firstTab">
          <div className="imgContainer">
            <img src={first} alt="first" />
          </div>

          <p className="homePageContent">
            Най-важните неща за уюта в един дом са <span className="colorOne">ЩАСТИЕ</span>,{' '}
            <span className="colorTwo">УДОВЛЕТВОРЕНОСТ</span>, <span className="colorThree">КОМФОРТ</span> И{' '}
            <span className="colorFour">ТОПЛИНА</span>! Мисията на <span className="colorFive">ФА МУЛТИПОЛИС</span> е да
            предостави всички тях, на клиентите си. Фирмата се занимава с доставка, проектиране и изграждане на всякакъв
            вид отоплителни системи.{' '}
          </p>
        </div>
      </Box>
      <h3>Нашата Визия</h3>
      <Box sx={{ borderColor: '#4462C4' }}>
        <div className="firstTab">
          <p className="homePageContent">
            Нашата визия е проста. Да бъдем най-добрия изпълнител в нашата област - опитен, отзивчив,
            конкурентноспособен и по график. Смятаме, че тези качества се обезпечават с отлични постижения, печелят
            доверие и се стремим да ги развиваме. ФА МУЛТИПОЛИС ООД е фирма, която знае смисъла на понятието "честен
            труд". Чрез изключително персонално обслужване, внимание към детайла и ангажираност към нуждите на нашите
            клиенти, ние градим репутация на надежден партньор, който печели своите клиенти завинаги, и те се връщат
            отново за нови проекти, със свои близки или партньори, с увереност за резултата от сътрудничеството си с ФА
            МУЛТИПОЛИС ООД. Ние разбираме, че нашите възложители искат в проектите им да се използват най-новите
            технологии и достижения на непрестанно променящия се пазар. Предоставяме Ви информация и консултации, за да
            сте в крак, както с нововъведенията, така и с утвърдените практики в областите, които касаят Вашия проект,
            за да направите своя информиран избор на техника, оборудване и дизайн и да получите максимално
            удовлетворение от изпълнението му, което сте възложили на нас.{' '}
          </p>
          <div className="imgContainer">
            <img src={second} alt="first" />
          </div>
        </div>
      </Box>
      <h3>Нашият ангажимент</h3>
      <Box sx={{ borderColor: '#4462C4' }}>
        <div className="firstTab">
          <div className="imgContainer">
            <img src={third} alt="first" />
          </div>

          <p className="homePageContent">
            Стремим да предложим на своите клиенти качествена услуга на конкурентна цена. Ето защо, ние се ангажираме за
            качество и преди всичко за него – качество на материалите, които влагаме и качество на изпълнението
            (изграждане, инсталиране, тестване или абонаментно обслужване). Разбира се, за екипа на ФА МУЛТИПОЛИС
            цената, която Ви предлагаме е винаги от значение, но не и за сметка на качеството. Приоритет номер едно ни е
            клиентът ни да получите най-доброто качество срещу парите си и в уговорените срокове. Разполагате с
            възможност да ни потърсите по телефона или електронния адрес. Независимо от избрания начин, ще се свържем с
            Вас за да организираме среща, на която да обсъдим проекта в подробности, да ви покажем нашето портфолио, да
            Ви обясним всички опции и да предоставим практически идеи, с които да отговорим на вашите индивидуални нужди
            и изисквания.{' '}
          </p>
        </div>
      </Box>
    </div>
  );
};

export default Home;
