import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBA80YoJ_M0j4Ui4tmOKIENbg9YYAObUCo",
  authDomain: "reactcoder-b72db.firebaseapp.com",
  projectId: "reactcoder-b72db",
  storageBucket: "reactcoder-b72db.appspot.com",
  messagingSenderId: "263100693293",
  appId: "1:263100693293:web:20ebbbf4403508a54b31a4"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export default async function getItems() {

  const colectionProductsRef = collection(DB, "products");
  const documentSnapshot = await getDocs(colectionProductsRef);
  const documentsData = documentSnapshot.docs.map((doc) => {

    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}


export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");

  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {

    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return documentsData;
}

export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");

  const docOrder = await addDoc(collectionRef, order);

  return docOrder.id;
}

export async function exportArrayToFirestore(){
  const products = [
    {
      id: 1,
      title: "Kit introductorio de aventura para Calabozos y dragones",
      price: 7000,
      stock: 10,
      category: "Manuales",
      imgurl: "https://m.media-amazon.com/images/I/813tDL2bzfL._AC_SL1500_.jpg",
      description: "Empieza tu primera aventura de Calabozos y dragones con una caja llena de todo lo que necesitas para empezar a jugar con tus amigos. Calabozos y dragones es un juego cooperativo de narración que aprovecha tu imaginación y te invita a explorar un mundo de aventuras fantástico, donde los héroes luchan contra monstruos, encuentran tesoros y superan misiones épicas. Esta caja contiene los elementos esenciales que necesitas para un juego de Calabozos y dragones con un Dungeon Master y de uno a cinco aventureros.",
    },
    {
      id: 2,
      title: "Dungeons and Dragons RPG: juego de reglas, base de reglas.",
      description:"¿Necesitas un regalo para las fiestas? ¿Un regalo de cumpleaños, un regalo para ti? Eso es todo. Dentro del D&D Core Rulebook Gift Set hay ediciones especiales de portada de aluminio de los tres libros de reglas principales de Dungeons & Dragons: el Manual del jugador, la Guía del maestro de mazmorras y el Manual de monstruos, además de una pantalla de Maestro de mazmorras, todo recogido en un elegante estuche. Es el regalo perfecto para cualquier fan de D&D.",
      price: 28000,
      stock: 15,
      category: "Manuales",
      imgurl: "https://m.media-amazon.com/images/I/71BURLYgGhL.jpg",
    },
    {
      id: 3,
      title: "Dados poliedrales: gris opaco",
      description: "Juego de 7 dados de 16 mm de tamaño estándar. Los juegos de siete dados son ideales para Dungeons and Dragons y muchos otros juegos de rol y juegos de mesa. Este juego incluye 1 de cada uno: dado de 4 caras (D4), dado de 6 caras (D6), dado de 8 caras (D8), dado de 10 caras (D10), dado de 12 caras (D12), dado de 20 caras dado (D20), dado de percentil de 10 caras (D10 mostrando 00/10/20/30, etc.).",
      price: 2900,
      stock: 20,
      category: "Dados",
      imgurl: "https://m.media-amazon.com/images/I/61p5nK-tRpL._AC_SL1000_.jpg",
    },
    {
      id: 4,
      title: "Torre de dados Whoopass ",
      description:"Esta lata de whoop-ass es una torre de dados funcional. Se incluye un juego de dados aleatorio.",
      price: 6320,
      stock: 12,
      category: "Dados",
      imgurl: "https://m.media-amazon.com/images/I/71reRTgLRKL._AC_SL1500_.jpg",
    },
    {
      id: 5,
      title: "Caja de almacenamiento de dados de pecho Mimic",
      description:"Diseño impresionante hecho a mano: un giro malicioso y medieval en un soporte de dados que te da un accesorio de almacenamiento bellamente hecho a mano que disfrutarás mostrando durante tus noches de juego semanales.",
      price: 12670,
      stock: 7,
      category: "Dados",
      imgurl: "https://m.media-amazon.com/images/I/819-uyPBzhL._AC_SL1500_.jpg",
    },
    {
      id: 6,
      title: "La Llamada de Cthulhu: Beige y Negro dados, juego de 7",
      description:"Este es un conjunto de 7 Polyhedral dados que contiene 1 cada uno de los siguientes – D4, D6, D8, D10, D12, D20",
      price: 7268,
      stock: 12,
      category: "Dados",
      imgurl: "https://m.media-amazon.com/images/I/71ttLJlA2ML._AC_SL1500_.jpg",
    },
    {
      id: 7,
      title: "juego de dados de mascarada, para vampiro: el juego de rol de mascarada",
      description:"Juego de 18 dados personalizados para uso con Vampire: The Masquerade Games, (13) Dados personalizados de 0.630 in negros d10s",
      price: 5372,
      stock: 15,
      category: "Dados",
      imgurl: "https://m.media-amazon.com/images/I/81q-mrqaUfL._AC_SL1500_.jpg",
    },
    {
      id: 8,
      title: "Juego de 7 dados poliédricos de cobre antiguo de metal sólido",
      description: "Cada juego de 7 troqueles contiene uno de cada D4, D6, D8, D10 numerado 0-9, D10 marcado en decenas 00-90 para porcentajes, D12 y un D20.",
      price: 7320,
      stock: 6,
      category: "Dados",
      imgurl: "https://m.media-amazon.com/images/I/71H2h-1+BqL._AC_SL1500_.jpg",
    },
    {
      id: 9,
      title: "Soporte para dados de poción de calavera",
      description:"Este vial de dados de poción de calavera te permitirá contener 1 juego de dados poliédricos de tamaño estándar. Viene con un juego aleatorio de dados D20 de 7 piezas.",
      price: 5060,
      stock: 4,
      category: "Dados",
      imgurl: "https://m.media-amazon.com/images/I/61oJ7sE+i1L._AC_SL1144_.jpg",
    },
    {
      id: 10,
      title: "Dungeons & Dragons | Torre de dados coleccionable | Dados con dragón, oso búho, cubo gelatinoso, mimo, explosión mental y espectador",
      description:"La torre de dados mide 3.976 in de alto x 2.953 in de ancho y se adapta a dados estándar D4 a D20 para aventurarse en juegos de rol de cualquier origen",
      price: 9000,
      stock: 8,
      category: "Dados",
      imgurl: "https://m.media-amazon.com/images/I/71vS9kbraJL._AC_SL1500_.jpg",
    },
    {
      id: 11,
      title: "Dungeons & Dragons: Manual del jugador (D&D Guía principal y libro de reglas) 5ta edición Next (idioma español no garantizado)",
      description:"El Manual del jugador es la referencia esencial para todos los jugadores de rol de Dungeons & Dragons. Contiene reglas para la creación y el avance de personajes, trasfondos y habilidades, exploración y combate, equipo, hechizos y mucho más. Usa este libro para crear emocionantes personajes de entre las razas y clases más icónicas de D&D.",
      price: 6400,
      stock: 20,
      category: "Manuales",
      imgurl: "https://m.media-amazon.com/images/I/811dDmyv-pL._AC_SL1500_.jpg",
    },
    {
      id: 12,
      title: "Dungeons & Dragons – D & D – Monster Manual (D & D Core rulebook) 5th Edition Next",
      description:"El Manual de monstruos presenta una horda de criaturas clásicas de Dungeons & Dragons, incluidos dragones, gigantes, desolladores mentales y espectadores, un festín monstruoso para Dungeon Masters listos para desafiar a sus jugadores y poblar sus aventuras.",
      price: 8600,
      stock: 12,
      category: "Manuales",
      imgurl: "https://m.media-amazon.com/images/I/818Bc9VG4TL._AC_SL1500_.jpg",
    },
    {
      id: 13,
      title: "Dungeons & Dragons – Guía Del Dungeon Master (D & D Core Guide/rulebook) 5th Edition Next",
      description:"En su interior encontrarás consejos, sugerencias y trucos para crear mundos para crear mazmorras y aventuras memorables, reglas de juego opcionales, cientos de objetos mágicos clásicos de D&D y muchas otras herramientas para ayudarte a ser un gran Dungeon Master.",
      price: 12900,
      stock: 17,
      category: "Manuales",
      imgurl: "https://m.media-amazon.com/images/I/81cw5IcoM+L._AC_SL1500_.jpg",
    },
    {
      id: 14,
      title: "Dungeons & Dragons – Guía del xanathar a todo, 5th Edition",
      description:"El espectador Xanathar, el señor del crimen más infame de Aguas Profundas, es conocido por acumular información sobre amigos y enemigos por igual. El espectador cataloga la tradición sobre los aventureros y reflexiona sobre los métodos para frustrarlos. ¡Su mente retorcida imagina que eventualmente puede grabar todo!",
      price: 7600,
      stock: 6,
      category: "Manuales",
      imgurl: "https://m.media-amazon.com/images/I/81objtUow1L.jpg",
    },
    {
      id: 15,
      title: "Tasha's Cauldron of Everything (D&D Rules Expansion)",
      description:"La hechicera Tasha, cuyas grandes obras incluyen el hechizo La espantosa risa de Tasha, ha recopilado fragmentos de valiosa sabiduría durante su ilustre carrera como aventurera. Sus enemigos no querrían que estos preciados secretos se esparzan por todo el multiverso, así que, como desafío, ha recopilado y codificado estos datos para el enriquecimiento de todos.",
      price: 11700,
      stock: 8,
      category: "Manuales",
      imgurl: "https://m.media-amazon.com/images/I/81Me-r4UL1L.jpg",
    },
    {
      id: 16,
      title: "D&D Icons of the Realms: Kobold Warband | Miniaturas de juego de rol de mesa WizKids",
      description:"Las miniaturas Kobold saltan directamente de los libros de Calabozos y Dragones y directamente a la mesa, uniéndose a la batalla junto con muchas otras miniaturas de fantasía de Wizkids.",
      price: 11500,
      stock: 8,
      category: "Miniaturas",
      imgurl: "https://m.media-amazon.com/images/I/61c+G0l4JYL._AC_SL1100_.jpg",
    },
    {
      id:17,
      title: "WizKids D&D Icons of The Realms Miniaturas: Boneyard Booster 4 unidades",
      description: "El juego 18 en nuestra línea Icons of the Realms de miniaturas prepintadas de Calabozos y Dragones.",
      price: 6320,
      stock: 12,
      category: "Miniaturas",
      imgurl: "https://m.media-amazon.com/images/I/61vYsXCvAsL._AC_SL1200_.jpg",
    },
    {
      id: 18,
      title: "D&D- Miniaturas",
      description:"Colecciona las 45 figuras de Descent into Avernus, el nuevo conjunto de monstruos y personajes ordenados al azar en nuestra emocionante línea de miniaturas de D&D, Icons of the Realms.",
      price: 5060,
      stock: 13,
      category: "Miniaturas",
      imgurl: "https://m.media-amazon.com/images/I/71tJMNQKYmL._AC_SL1200_.jpg",
    },
    {
      id: 19,
      title: "WizKids D&D Icons of The Realms Miniatures: Fangs and Talons Booster individual, negro",
      description:"Colecciona las 45 figuras de Fangs & Talons, el último juego de héroes y monstruos ordenados al azar en nuestra emocionante línea de miniaturas de D&D, Icons of the Realms. El juego incluye una amplia gama de esculturas totalmente nuevas que representan desafíos para que tus héroes superen.",
      price: 5372,
      stock: 15,
      category: "Miniaturas",
      imgurl: "https://m.media-amazon.com/images/I/61JR9xXakDL._AC_SL1100_.jpg",
    },
    {
      id: 20,
      title: "D&D Icons of The Realms: Orcus, figura de Demon Lord of Undeath | Miniatura WizKids",
      description:"Orcus es el príncipe demonio de la muerte, conocido como el señor de la sangre. Disfruta del sufrimiento de los vivos, pero prefiere la compañía y el servicio de los muertos vivientes. Su deseo es ver toda la vida apagada y el multiverso transformado en una vasta necrópolis poblada únicamente por criaturas no muertas bajo su mando. Orcus recompensa a aquellos que propagan la muerte en su nombre otorgándoles una pequeña porción de su poder. Los menores de estos se convierten en demonios y zombies que sirven en sus legiones, mientras que sus sirvientes favoritos son los cultos y nigromantes que asesinan a los vivos y luego manipulan a los muertos, emulando a su temible maestro.",
      price: 22120,
      stock: 3,
      category: "Miniaturas",
      imgurl: "https://m.media-amazon.com/images/I/61oS5-W9BwL._AC_SL1100_.jpg",
    },
];
  const collectionRef = collection (DB, "products");  

  for (let item of products){
    item.index=item.id;
    delete item.id;
  let docOrder = await addDoc(collectionRef, item )
  }
}