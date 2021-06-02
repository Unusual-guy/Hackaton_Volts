const admin = require('firebase-admin');
const serviceAccount = require('./secret/serviceAccountKey.json');
const { lowerCase } = require('lodash');
const { INTENT, getIntent } = require('./src/nlu');
const lex = require('./src/lexicon');

// Инициализируем Firestore:
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hackathon-29aee-default-rtdb.europe-west1.firebasedatabase.app"
});

// Устанавливаем связь с БД, из которой будем брать конкретные данные устройства (компания Volts):
const db = admin.firestore();


// Тело Yndex Cloude Function:
module.exports.skill = async (event) => {
  try {
    // Получаем из события запрос Алисы необходимые данные:
    const { request, session, version } = event;

    // Быстрый ответ на пингование Алисы:
    if (request.original_utterance === 'ping') {
      return {
        version,
        session,
        response: {
          text: 'ОК',
          end_session: true
        }
      };
    }

    // Голосовое и звуковое сообщение юзеру:
    let ttsMsg = '';

    // Получаем и переводим в нижний регистр сказанную юзером фразу:
    const userUtterance = lowerCase(request.original_utterance);

     // Определяем намерение пользователя:
     const intent = getIntent(userUtterance, intent);


    // Обращаемся к БД за данными:
    const userSnapshot = await usersRef.where(server.FieldPath.documentId(), '==', userId).get();
    let userData = {};

    // Получаем данные из БД:
    userSnapshot.forEach(doc => {
      userData = doc.data();
    });


    // Инициализируем переменные, которые будут принимать значения из базы данных
    let didDevice = 0;
    let dday = 0;
    let doutput_active_power = 0;
    let dbattery_capacity = 0;
    let dsolar_panel_input_power = 0;
    let dstatus = 0;
    let dgenerge_total = 0;
    let dgenerge_year = 0;
    let dgenerge_month = 0;
    let dgenerge_day = 0;
    let denerge_fPhase = 0;
    let denerge_sPhase = 0;
    let denerge_tPhase = 0;


    // Получаем конкретные данные из БД 
    if(!isEmpty(userData)) {
      didDevice = userData && userData.dat;
      dday = userData && userData.dat;
      doutput_active_power = userData && userData.dat;
      dbattery_capacity = userData && userData.dat;
      dsolar_panel_input_power = userData && userData.dat;
      dstatus = userData && userData.dat;
      dgenerge_total = userData && userData.dat;
      dgenerge_year = userData && userData.dat;
      dgenerge_month = userData && userData.dat;
      dgenerge_day = userData && userData.dat;
      denerge_fPhase = userData && userData.dat;
      denerge_sPhase && userData.dat;
      denerge_tPhase && userData.dat;
    }




    // ДИАЛОГ С ПОЛЬЗОВАТЕЛЕМ:
    let msg = ''; // переменная, в которой будет храниться ответ Алисы пользователю (полный ответ: реплика Алисы, конкретные данные из БД)
    
    msg = '${sample(lex.memoryFull1)} ${spokenTime}. ${lex.memoryFull2} ${memory} ${lex.promptForget}'
    
    
    if (intent === INTENT.give_idDevice)

    ......
   










    // Ответ Алисе:
    return {
      version,
      session,
      response: {
        text: ' ',
        tts: ttsMsg,
        end_session: isEndSession
      }
    };

    // Обработка возможных ошибок:
  } catch (err) {
    console.error(err);
    return {
      'statusCode': 500,
      'headers': {
        'Content-Type': 'text/plain'
      },
      'isBase64Encoded': false,
      'body': `Internal server error: ${err}` // TODO скрыть переменную err в продакшн-версии.
    };
  }
};
