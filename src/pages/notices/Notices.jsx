import { useState } from 'react';
import { Calendar } from '../../components';
import { MOCK_EVENTS } from '../../constants/day';

const Notices = () => {
  const [events, setEvents] = useState(MOCK_EVENTS);
  const addEvent = (date, color) => {
    const text = window.prompt('추가하고 싶은 일정을 입력해주세요!');
    if (text === '') {
      alert('추가할 내용은 공백이 될 수 없습니다.');
      return;
    }
    setEvents(prev => [...prev, { date, title: text, color }]);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis
      veritatis aliquid eos error? Molestias qui beatae eveniet quo harum amet,
      a dicta aliquid ipsa reiciendis, commodi velit, deserunt rem. Enim
      adipisci veniam deserunt fugiat. Doloribus assumenda quidem at alias
      dolorem dicta, necessitatibus quae, dolores, vitae aliquam perspiciatis
      deleniti amet quis ratione perferendis rerum sit praesentium ipsam
      architecto? Voluptate enim culpa, ad maiores sed eligendi non deserunt
      animi consequuntur dolorum rerum eaque quos illo quidem assumenda nisi
      suscipit nemo similique. Consectetur voluptates quam consequatur,
      necessitatibus harum eos itaque perferendis illum laudantium voluptate
      culpa quibusdam et? Pariatur nemo, sunt sit perferendis qui error deleniti
      nisi distinctio voluptas tempora officiis dolor non. Rem fuga expedita,
      quasi commodi nam labore corporis sint itaque voluptatem maxime suscipit
      iste iusto aliquam quidem nobis ex. Accusantium nam distinctio tempore
      sapiente possimus recusandae neque doloribus est? Quae consectetur laborum
      voluptatem laboriosam sint iste quo aut enim voluptates aliquid magnam, ad
      nulla praesentium ipsum consequatur error assumenda voluptatum
      voluptatibus officiis! Unde incidunt sit voluptate aspernatur! Voluptates,
      provident! Deleniti minus repellendus quos odio perspiciatis aliquam,
      officia maxime voluptates. Vel animi quaerat minus iure placeat accusamus
      facilis, nam inventore dolore dolorem harum delectus, tempora numquam
      itaque omnis at aspernatur qui ab ipsa in modi voluptas beatae debitis!
      Velit voluptatum neque officiis obcaecati, magni dicta? Magnam ullam quos
      dolorem facere dolor voluptate. Accusamus excepturi perspiciatis minima
      officiis exercitationem architecto quidem, quisquam deserunt, facere
      laboriosam nihil molestiae doloribus nam expedita, aliquid suscipit
      aperiam esse officia commodi ab obcaecati! Ipsum quisquam provident modi
      voluptas et eaque facilis ullam amet eius adipisci! Nihil quis omnis eos
      labore voluptas rem earum facilis architecto error. Animi, ipsa nihil
      harum tenetur mollitia earum deleniti ullam culpa sequi numquam dicta!
      Veritatis autem odit delectus commodi enim possimus, aut recusandae sequi
      voluptates, ducimus odio fugiat omnis, non animi iusto.
      <Calendar
        startingDate={new Date()}
        eventsArr={events}
        addEvent={addEvent}
      />
      <h3>
        dolorem facere dolor voluptate. Accusamus excepturi perspiciatis minima
        officiis exercitationem architecto quidem, quisquam deserunt, facere
        laboriosam nihil molestiae doloribus nam expedita, aliquid suscipit
        aperiam esse officia commodi ab obcaecati! Ipsum quisquam provident modi
        voluptas et eaque facilis ullam amet eius adipisci! Nihil quis omnis eos
        labore voluptas rem earum facilis architecto error. Animi, ipsa nihil
        harum tenetur mollitia earum deleniti ullam culpa sequi numquam dicta!
        Veritatis autem odit delectus commodi enim possimus, aut recusandae
        sequi voluptates, ducimus odio fugiat omnis, non animi iusto.
      </h3>
    </div>
  );
};

export default Notices;
