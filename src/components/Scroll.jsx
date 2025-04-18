import React from "react";
import { motion, useScroll } from "motion/react";

const Scroll = () => {
  const scrollYProgress = useScroll().scrollYProgress;
  // console.log(scrollYProgress);

  return (
    <div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-red-300 origin-left w-full h-3 fixed top-0 left-0"
      ></motion.div>

      <h1 className="text-4xl font-bold text-center">Hello! How are you</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        voluptas qui numquam, officia accusantium esse quaerat! Nobis iure ut
        nihil nemo, pariatur id cum autem nesciunt velit architecto minima
        aliquam ea vel rem corporis rerum deleniti ab quae omnis maxime magnam!
        Laudantium totam fugiat necessitatibus repellat temporibus, consequuntur
        dicta ut, maiores tempore ex iste, cum praesentium rem iure possimus?
        Pariatur numquam eligendi non sint labore eum inventore, architecto odit
        suscipit, aspernatur ullam debitis. Exercitationem laudantium,
        voluptatem sit ratione, nisi placeat dignissimos ea autem explicabo fuga
        porro. Suscipit voluptates perferendis fugit, dolor dicta, nesciunt
        amet, sed nemo aspernatur labore ut iure. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        necessitatibus voluptate, corporis nemo ut nostrum consequatur pariatur
        enim dolor et ipsum non quis quisquam assumenda quo cupiditate officia
        asperiores eveniet mollitia modi. Nisi eligendi consequuntur cum
        temporibus. Doloremque sapiente eos suscipit quae rem, eveniet error sit
        voluptas nobis qui obcaecati eaque cupiditate vero ut harum accusantium
        vitae illo quia temporibus assumenda consectetur atque illum?
        Repellendus neque voluptatum omnis vitae obcaecati, hic vel voluptas
        inventore quisquam, maiores in provident doloremque, recusandae impedit!
        Similique corporis vitae laborum architecto quo, suscipit, voluptatum
        repellendus ipsa provident delectus pariatur corrupti dolores animi
        voluptate eos dolorum quibusdam voluptatibus mollitia. Quis animi
        delectus iste explicabo consectetur vero voluptatum tenetur recusandae,
        beatae odit necessitatibus possimus, laudantium unde. Officia nesciunt
        aspernatur voluptate vel pariatur, perferendis delectus, repudiandae
        mollitia cupiditate veniam cumque explicabo officiis hic consequatur
        culpa eaque reiciendis repellendus sapiente architecto facere! Culpa
        praesentium nam recusandae a eligendi quis sit at, eius ullam nihil
        accusamus earum saepe quod, fugit cumque laudantium nisi. Autem
        voluptates sint molestias ipsam aspernatur sapiente nulla doloremque
        exercitationem sit nisi dolorem asperiores quos cum at excepturi tempore
        quaerat iusto nostrum, repellat, soluta debitis magnam nobis! Quisquam
        reprehenderit natus voluptates, modi delectus quis necessitatibus alias
        facere.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vel
        aperiam. Suscipit laboriosam accusantium sint id. Et, numquam! Ex
        ratione praesentium nobis expedita animi aspernatur voluptates fugiat
        sed perferendis maiores, quis earum totam mollitia nisi ullam sequi quae
        necessitatibus nam quasi eaque. Autem facere numquam vel quae neque quam
        esse incidunt reprehenderit a, laudantium alias ab, qui expedita cum?
        Tenetur aperiam, nisi, possimus ad similique quo quasi iure molestiae
        quia, sapiente voluptas maxime. Nisi esse placeat doloribus, deserunt
        ducimus laborum eligendi dolore quod quam, iure ipsam id. Repudiandae
        incidunt, sit voluptatem animi at molestiae eum, facilis necessitatibus
        quo consectetur a suscipit quidem. Est a illum laudantium? Quo eveniet
        eaque dolorem! Totam, deserunt voluptates. Eius fugit magnam reiciendis
        tempore eaque aliquam nostrum, rem asperiores sit explicabo
        necessitatibus mollitia laudantium excepturi vitae, accusantium natus
        iste blanditiis laboriosam omnis, cupiditate exercitationem ab. Magni
        reiciendis tempora accusantium officiis enim, eius quae voluptatem
        fugiat molestias magnam doloribus laudantium veritatis sunt iste officia
        rerum, eos voluptatibus. Voluptas sapiente cupiditate nihil, commodi vel
        nemo distinctio exercitationem deleniti animi. Ipsa cumque nesciunt odit
        cum, fugiat iure nobis expedita doloribus dolorum sapiente nulla
        repudiandae quod perferendis doloremque cupiditate vitae ducimus tempore
        consequatur, maxime asperiores. Unde modi praesentium ea voluptatem nemo
        quos inventore, expedita, quisquam sunt vitae explicabo corrupti amet
        quia enim. Quidem placeat officiis a ad ratione vel expedita laudantium,
        provident aliquid laboriosam omnis aliquam accusamus sequi? Consequuntur
        quisquam dicta minima unde doloremque mollitia accusantium dignissimos
        repellat maiores, sunt quaerat eum recusandae magni iste suscipit illo
        inventore quas dolores ducimus error qui quibusdam velit et. Repudiandae
        quas quibusdam cumque tempora eligendi recusandae aliquid veritatis
        error qui quos consectetur, adipisci accusantium nesciunt! Earum
        molestiae unde labore fugiat minima et harum sunt, tempore laboriosam
        esse accusamus impedit at sed iusto necessitatibus ratione architecto!
        Est dignissimos velit veritatis. Nostrum natus sint voluptas fugit
        corrupti saepe qui eligendi, hic vel cumque quia. Ut animi accusantium
        culpa, ratione eaque quo officiis molestiae exercitationem ex laborum
        cumque illo, consequuntur eligendi nisi expedita necessitatibus rerum
        aspernatur reiciendis obcaecati ullam aut maiores aperiam atque iste!
        Expedita ut cumque neque omnis cum veritatis ullam vero non molestias
        aliquid, adipisci deserunt temporibus molestiae sequi dolor. Illo
        consequuntur facilis eius similique esse ab laboriosam sed! Aut
        quibusdam et quos corrupti, rerum similique beatae molestias nesciunt
        quo amet repellendus libero blanditiis numquam eos nam aspernatur
        delectus enim adipisci sint iusto, doloremque itaque repellat quas! Cum
        recusandae blanditiis similique enim distinctio exercitationem fuga odit
        ad, expedita in modi vero magnam odio accusantium. Quaerat voluptates
        rem modi quidem reiciendis, in quo blanditiis consectetur minus
        recusandae at eum itaque tempore ad, provident doloribus ullam cumque
        vitae perspiciatis rerum maxime assumenda dolorem! Laudantium accusamus
        officia, soluta minus voluptatum at iste in dolorum veritatis! A ducimus
        consequatur quasi veritatis aliquam beatae alias repudiandae recusandae
        dicta perferendis aut modi cupiditate laboriosam, fugit quas reiciendis
        sunt numquam facilis adipisci nobis rerum eos ipsam vero? Sunt inventore
        voluptatem eos sapiente vero dolores cupiditate ipsum, labore similique
        tempora quaerat nam tempore eaque aspernatur incidunt molestias quidem
        magni mollitia est debitis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        odit reiciendis atque ullam nemo numquam? Praesentium doloremque
        perspiciatis ea corrupti iure beatae alias quidem! Doloremque nostrum
        quos molestias tempora id veritatis cumque repellendus eum mollitia quae
        quasi eaque unde similique, tempore porro velit aliquam quas cum fuga
        maiores. Eos laboriosam dolores totam explicabo distinctio nobis ea
        porro, voluptatem voluptas quaerat sed voluptatum facilis nisi minus
        itaque quibusdam! Voluptatibus suscipit, dicta culpa illo nemo, debitis
        hic deleniti voluptate, ex similique eius mollitia illum eum odit
        possimus tenetur reiciendis inventore excepturi adipisci dolore
        consequatur consectetur qui odio! Delectus eveniet nihil harum modi
        illum obcaecati recusandae, quo alias commodi blanditiis similique eaque
        quisquam dolores dolorum voluptatum voluptas nemo iusto incidunt dolore,
        explicabo corporis! Ad magnam esse quas, recusandae porro totam libero
        dolores illo mollitia maiores suscipit debitis non deserunt expedita
        fuga impedit! Sequi, id libero quis laborum nesciunt similique tenetur.
        Adipisci autem ea labore! Debitis ex nihil unde atque tempora! Nam
        dignissimos expedita velit quibusdam a, tempore reprehenderit obcaecati
        corrupti quos dicta hic repudiandae aliquid tenetur nulla architecto
        tempora minus sunt aliquam molestiae, accusantium eius ad quae? Error
        atque quae deserunt commodi. Doloremque porro eveniet voluptatibus,
        facilis sunt magni explicabo quam eum obcaecati nam illo dolorum neque
        similique laboriosam perspiciatis distinctio atque possimus vero
        repellat nisi? Modi, tempore sapiente quod itaque necessitatibus laborum
        temporibus, impedit esse veritatis iusto dolores incidunt. Autem
        similique hic dolorem! Eum consectetur suscipit architecto optio odio
        quae sequi veritatis, debitis vero maiores ea nostrum fuga voluptatibus
        nihil itaque aut aspernatur! Pariatur aliquid eligendi itaque ut quam
        laboriosam doloremque tenetur, facilis, veritatis hic harum dicta
        temporibus quo rerum iusto placeat molestias beatae et cumque eaque.
        Possimus qui exercitationem ducimus praesentium expedita! In temporibus
        amet nobis, officiis optio, laboriosam voluptatum suscipit sunt
        quibusdam magnam doloribus recusandae est, quos necessitatibus esse
        tempore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        voluptas qui numquam, officia accusantium esse quaerat! Nobis iure ut
        nihil nemo, pariatur id cum autem nesciunt velit architecto minima
        aliquam ea vel rem corporis rerum deleniti ab quae omnis maxime magnam!
        Laudantium totam fugiat necessitatibus repellat temporibus, consequuntur
        dicta ut, maiores tempore ex iste, cum praesentium rem iure possimus?
        Pariatur numquam eligendi non sint labore eum inventore, architecto odit
        suscipit, aspernatur ullam debitis. Exercitationem laudantium,
        voluptatem sit ratione, nisi placeat dignissimos ea autem explicabo fuga
        porro. Suscipit voluptates perferendis fugit, dolor dicta, nesciunt
        amet, sed nemo aspernatur labore ut iure. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        necessitatibus voluptate, corporis nemo ut nostrum consequatur pariatur
        enim dolor et ipsum non quis quisquam assumenda quo cupiditate officia
        asperiores eveniet mollitia modi. Nisi eligendi consequuntur cum
        temporibus. Doloremque sapiente eos suscipit quae rem, eveniet error sit
        voluptas nobis qui obcaecati eaque cupiditate vero ut harum accusantium
        vitae illo quia temporibus assumenda consectetur atque illum?
        Repellendus neque voluptatum omnis vitae obcaecati, hic vel voluptas
        inventore quisquam, maiores in provident doloremque, recusandae impedit!
        Similique corporis vitae laborum architecto quo, suscipit, voluptatum
        repellendus ipsa provident delectus pariatur corrupti dolores animi
        voluptate eos dolorum quibusdam voluptatibus mollitia. Quis animi
        delectus iste explicabo consectetur vero voluptatum tenetur recusandae,
        beatae odit necessitatibus possimus, laudantium unde. Officia nesciunt
        aspernatur voluptate vel pariatur, perferendis delectus, repudiandae
        mollitia cupiditate veniam cumque explicabo officiis hic consequatur
        culpa eaque reiciendis repellendus sapiente architecto facere! Culpa
        praesentium nam recusandae a eligendi quis sit at, eius ullam nihil
        accusamus earum saepe quod, fugit cumque laudantium nisi. Autem
        voluptates sint molestias ipsam aspernatur sapiente nulla doloremque
        exercitationem sit nisi dolorem asperiores quos cum at excepturi tempore
        quaerat iusto nostrum, repellat, soluta debitis magnam nobis! Quisquam
        reprehenderit natus voluptates, modi delectus quis necessitatibus alias
        facere.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vel
        aperiam. Suscipit laboriosam accusantium sint id. Et, numquam! Ex
        ratione praesentium nobis expedita animi aspernatur voluptates fugiat
        sed perferendis maiores, quis earum totam mollitia nisi ullam sequi quae
        necessitatibus nam quasi eaque. Autem facere numquam vel quae neque quam
        esse incidunt reprehenderit a, laudantium alias ab, qui expedita cum?
        Tenetur aperiam, nisi, possimus ad similique quo quasi iure molestiae
        quia, sapiente voluptas maxime. Nisi esse placeat doloribus, deserunt
        ducimus laborum eligendi dolore quod quam, iure ipsam id. Repudiandae
        incidunt, sit voluptatem animi at molestiae eum, facilis necessitatibus
        quo consectetur a suscipit quidem. Est a illum laudantium? Quo eveniet
        eaque dolorem! Totam, deserunt voluptates. Eius fugit magnam reiciendis
        tempore eaque aliquam nostrum, rem asperiores sit explicabo
        necessitatibus mollitia laudantium excepturi vitae, accusantium natus
        iste blanditiis laboriosam omnis, cupiditate exercitationem ab. Magni
        reiciendis tempora accusantium officiis enim, eius quae voluptatem
        fugiat molestias magnam doloribus laudantium veritatis sunt iste officia
        rerum, eos voluptatibus. Voluptas sapiente cupiditate nihil, commodi vel
        nemo distinctio exercitationem deleniti animi. Ipsa cumque nesciunt odit
        cum, fugiat iure nobis expedita doloribus dolorum sapiente nulla
        repudiandae quod perferendis doloremque cupiditate vitae ducimus tempore
        consequatur, maxime asperiores. Unde modi praesentium ea voluptatem nemo
        quos inventore, expedita, quisquam sunt vitae explicabo corrupti amet
        quia enim. Quidem placeat officiis a ad ratione vel expedita laudantium,
        provident aliquid laboriosam omnis aliquam accusamus sequi? Consequuntur
        quisquam dicta minima unde doloremque mollitia accusantium dignissimos
        repellat maiores, sunt quaerat eum recusandae magni iste suscipit illo
        inventore quas dolores ducimus error qui quibusdam velit et. Repudiandae
        quas quibusdam cumque tempora eligendi recusandae aliquid veritatis
        error qui quos consectetur, adipisci accusantium nesciunt! Earum
        molestiae unde labore fugiat minima et harum sunt, tempore laboriosam
        esse accusamus impedit at sed iusto necessitatibus ratione architecto!
        Est dignissimos velit veritatis. Nostrum natus sint voluptas fugit
        corrupti saepe qui eligendi, hic vel cumque quia. Ut animi accusantium
        culpa, ratione eaque quo officiis molestiae exercitationem ex laborum
        cumque illo, consequuntur eligendi nisi expedita necessitatibus rerum
        aspernatur reiciendis obcaecati ullam aut maiores aperiam atque iste!
        Expedita ut cumque neque omnis cum veritatis ullam vero non molestias
        aliquid, adipisci deserunt temporibus molestiae sequi dolor. Illo
        consequuntur facilis eius similique esse ab laboriosam sed! Aut
        quibusdam et quos corrupti, rerum similique beatae molestias nesciunt
        quo amet repellendus libero blanditiis numquam eos nam aspernatur
        delectus enim adipisci sint iusto, doloremque itaque repellat quas! Cum
        recusandae blanditiis similique enim distinctio exercitationem fuga odit
        ad, expedita in modi vero magnam odio accusantium. Quaerat voluptates
        rem modi quidem reiciendis, in quo blanditiis consectetur minus
        recusandae at eum itaque tempore ad, provident doloribus ullam cumque
        vitae perspiciatis rerum maxime assumenda dolorem! Laudantium accusamus
        officia, soluta minus voluptatum at iste in dolorum veritatis! A ducimus
        consequatur quasi veritatis aliquam beatae alias repudiandae recusandae
        dicta perferendis aut modi cupiditate laboriosam, fugit quas reiciendis
        sunt numquam facilis adipisci nobis rerum eos ipsam vero? Sunt inventore
        voluptatem eos sapiente vero dolores cupiditate ipsum, labore similique
        tempora quaerat nam tempore eaque aspernatur incidunt molestias quidem
        magni mollitia est debitis.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        odit reiciendis atque ullam nemo numquam? Praesentium doloremque
        perspiciatis ea corrupti iure beatae alias quidem! Doloremque nostrum
        quos molestias tempora id veritatis cumque repellendus eum mollitia quae
        quasi eaque unde similique, tempore porro velit aliquam quas cum fuga
        maiores. Eos laboriosam dolores totam explicabo distinctio nobis ea
        porro, voluptatem voluptas quaerat sed voluptatum facilis nisi minus
        itaque quibusdam! Voluptatibus suscipit, dicta culpa illo nemo, debitis
        hic deleniti voluptate, ex similique eius mollitia illum eum odit
        possimus tenetur reiciendis inventore excepturi adipisci dolore
        consequatur consectetur qui odio! Delectus eveniet nihil harum modi
        illum obcaecati recusandae, quo alias commodi blanditiis similique eaque
        quisquam dolores dolorum voluptatum voluptas nemo iusto incidunt dolore,
        explicabo corporis! Ad magnam esse quas, recusandae porro totam libero
        dolores illo mollitia maiores suscipit debitis non deserunt expedita
        fuga impedit! Sequi, id libero quis laborum nesciunt similique tenetur.
        Adipisci autem ea labore! Debitis ex nihil unde atque tempora! Nam
        dignissimos expedita velit quibusdam a, tempore reprehenderit obcaecati
        corrupti quos dicta hic repudiandae aliquid tenetur nulla architecto
        tempora minus sunt aliquam molestiae, accusantium eius ad quae? Error
        atque quae deserunt commodi. Doloremque porro eveniet voluptatibus,
        facilis sunt magni explicabo quam eum obcaecati nam illo dolorum neque
        similique laboriosam perspiciatis distinctio atque possimus vero
        repellat nisi? Modi, tempore sapiente quod itaque necessitatibus laborum
        temporibus, impedit esse veritatis iusto dolores incidunt. Autem
        similique hic dolorem! Eum consectetur suscipit architecto optio odio
        quae sequi veritatis, debitis vero maiores ea nostrum fuga voluptatibus
        nihil itaque aut aspernatur! Pariatur aliquid eligendi itaque ut quam
        laboriosam doloremque tenetur, facilis, veritatis hic harum dicta
        temporibus quo rerum iusto placeat molestias beatae et cumque eaque.
        Possimus qui exercitationem ducimus praesentium expedita! In temporibus
        amet nobis, officiis optio, laboriosam voluptatum suscipit sunt
        quibusdam magnam doloribus recusandae est, quos necessitatibus esse
        tempore?
      </p>
    </div>
  );
};

export default Scroll;
