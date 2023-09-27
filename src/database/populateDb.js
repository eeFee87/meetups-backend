require('dotenv').config();
const getPool = require('./getPool');
// const bcrypt = require('bcrypt');

// Funcion que inserta datos de prueba en la DB

const populateDb = async () => {
  try {
    const pool = getPool();
    await pool.query(`
       USE meetups;
    `);
    console.log('Inserting users...');

    await pool.query(`INSERT INTO users (email, password, name, biography)
  VALUES  
  ('julia@email.com',
  '12345',
  'Julia',
  'Soy Julia, una incansable exploradora, que ha recorrido selvas y montañas en busca de la naturaleza en su forma más pura. 
  Mis descubrimientos llevaron a importantes avances en conservación y ecología, 
  dejando un legado duradero para las generaciones futuras.'
  ),
  ('pepe@email.com',
  '12345',
  'Pepe',
  'Pepe, apasionado de la música desde niño, 
  se convirtió en un virtuoso del piano a temprana edad. 
  Su talento lo llevó a los escenarios más grandes del mundo,
  donde cautivó a multitudes con su magia musical. Una vida dedicada a la melodía y la inspiración.'
  ),
  ('maria@email.com',
  '12345',
  'maria',
  'María, la panadera de corazón, dedicó su vida al arte del pan. Con manos hábiles y amor en cada masa, endulzó las vidas de su vecindario. 
  Su pan casero trascendió recetas, convirtiéndose en el alma de su comunidad.'
  ),
  ('juan@email.com',
  '12345',
  'Juan',
  'Juan, amante de la sencillez, disfruta de la vida en dos ruedas. 
   Pedaleando por su ciudad, encuentra la alegría en los pequeños placeres y el contacto con la naturaleza. 
   Su pasión por el ciclismo refleja su espíritu libre y su amor por la aventura.'
  ),
  ('jorge@email.com',
  '12345',
  'jorge',
  'Jorge, el visionario de la tecnología, fundó empresas innovadoras que revolucionaron la industria. 
  Su liderazgo y creatividad transformaron la forma en que vivimos y trabajamos, 
  dejando un impacto perdurable en la era digital.'
  )
  `);

    console.log('Inserting categories...');

    await pool.query(`INSERT INTO categories (name)
  VALUES
  ('Fotografía'),
  ('Tecnología Médica'),
  ('Emprendimiento'),
  ('Gastronomía'),
  ('Medio Ambiente'),
  ('Literatura'),
  ('Bienestar'),
  ('Desarrollo de Videojuegos'),
  ('Senderismo'),
  ('Música')`);

    console.log('Inserting cities...');

    await pool.query(`INSERT INTO cities (name)
  VALUES
  ('Madrid'),
  ('Barcelona'),
  ('Valencia'),
  ('Sevilla'),
  ('Zaragoza'),
  ('Murcia'),
  ('Mallorca'),
  ('Gran Canaria'),
  ('Bilbao'),
  ('Alicante'),
  ('Córdoba'),
  ('Valladolid'),
  ('Vigo'),
  ('Gijón'),
  ('Granada'),
  ('Coruña')`);

    console.log('Inserting meetups...');

    await pool.query(`
        INSERT INTO meetups (title,description,category_id,city_id,date,user_id)
  VALUES
  ('Taller de Fotografía Nocturna',
   'Aprende las técnicas de fotografía nocturna con expertos en el campo.',
   1,
   2,
   '2023-11-02 11:00:00',
   1
   ),
   ('Charla sobre Inteligencia Artificial en la Medicina',
   'Explora el impacto de la IA en la atención médica.',
   2,
   1,
   '2023-11-05 16:30:00',
   5
   ),
   ('Networking para Emprendedores',
   'Conecta con otros emprendedores y comparte experiencias.',
   3,
   3,
   '2023-10-20 09:15:00',
   2
   ),
   ('Curso de Yoga al Aire Libre',
   'Encuentra paz y equilibrio practicando yoga en la naturaleza.',
   7,
   3,
   '2023-12-04 08:30:00',
   3
   ),
   ('Taller de Cocina Vegetariana',
   'Aprende a preparar deliciosos platos vegetarianos.',
   4,
   4,
   '2023-12-08 12:30:00',
   3
   ),
   ('Conferencia de Cambio Climático',
   'Explora soluciones para combatir el cambio climático.',
   5,
   2,
   '2023-11-02 18:00:00',
   5
   ),
   ('Grupo de Lectura: Libro del Mes',
   'Un espacio para discutir y compartir tus lecturas favoritas.',
   6,
   2,
   '2023-11-02 11:00:00',
   4
   ),
   ('Taller de Desarrollo de Videojuegos',
   'Aprende a crear tus propios videojuegos desde cero.',
   8,
   5,
   '2023-11-14 10:30:00',
   5
   );
    `);

    console.log('¡All done! 🤗');
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
